import { useState } from 'react';
import './chatbot.css';
import { Send } from 'lucide-react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hola soy tu asistente virtual Quimica Anfa | ¿En qué puedo ayudarte?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const suggestions = [
    "¿Qué productos venden?",
    "¿Qué productos hay en suavizantes de telas?",
    "¿Qué productos hay en detergentes líquidos?",
    "¿Cuál es la misión de la empresa?",
    "¿Cuál es la dirección de la empresa?",
    "¿Cuál es el horario de la empresa?",
    "¿Cuál es la información del jabón líquido para manos?",
    "¿Cuál es la información del desengrasante?"
  ];
  
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://backchat-production-4b60.up.railway.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input })
      });

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        {
          from: 'bot',
          text: data.data || 'No tengo informacion para esa pregunta'
        }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          from: 'bot',
          text: 'Error al conectar con el servidor'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendSuggestion = (text) => {
    if (loading) return;
    setInput(text);
    setTimeout(() => {
      sendMessage();
    }, 50);
  };

  const renderMessage = (text) => {
    return text.split('|').map((block, idx) => {
      const parts = block.split(':');

      if (parts[0].toLowerCase().includes('producto')) {
        return (
          <div key={idx} className="chat-product">
            {parts.slice(1).join(':').trim()}
          </div>
        );
      }

      if (parts.length > 1) {
        return (
          <div key={idx} className="chat-block">
            <div className="chat-title">{parts[0].trim()}</div>
            <div className="chat-content">
              {parts.slice(1).join(':').trim()}
            </div>
          </div>
        );
      }

      if (block.includes(',')) {
        return (
          <div key={idx} className="chat-block">
            <div className="chat-title">PRODUCTOS DISPONIBLES</div>
            <div className="chat-content">
              <ul className="chat-list">
                {block.split(',').map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      }

      return (
        <div key={idx} className="chat-content">
          {block.trim()}
        </div>
      );
    });
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((m, i) => (
          <div key={i} className={`chat ${m.from}`}>
            {m.from === 'bot'
              ? renderMessage(m.text)
              : <div className="chat-content">{m.text}</div>
            }
          </div>
        ))}
        {loading && <div className="chat bot">.........</div>}
      </div>

      {messages.length === 1 && !loading && (
        <div className="chatbot-suggestions">
          {suggestions.map((s, index) => (
            <button
              key={index}
              className="suggestion-btn"
              onClick={() => sendSuggestion(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="chatbot-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />

        <button onClick={sendMessage} disabled={loading}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
