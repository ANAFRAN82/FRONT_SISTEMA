import React from 'react';
import { ArrowLeft, Package } from 'lucide-react';
import '../components/CategoryPage.css';
import { categories } from '../components/ProductsPage'


export const products = [
  {
    id: 'p1',
    categoryId: '1',
    name: 'SÚPER COLOR',
    description: 'Este producto se utiliza para el lavado de ropa, después de su aplicación su ropa se siente como nueva con un agradable aroma.',
    uses: 'Ideal para prendas como pantalones, chamarras, suéteres, ropa de bebé, ropa interior, batas, toallas, sábanas y más. Este detergente líquido puede emplearse tanto en el hogar como en establecimientos (hoteles, lavanderías, etc.) e industrias (fábricas de mezclilla, textiles de algodón, etc.). No desgasta el color original de tus prendas.',
    applications: '',
    presentation: `• 500 ml
      • 2 L
      • 5 L
      • 7 L
      • 10 L
      • 20 L`,
    imageUrl: ['/assets/SUPERCOLOR.png']
  },
  {
    id: 'p1b',
    categoryId: '1',
    name: 'ROPA OSCURA',
    description: 'Formulado especialmente para lavar prendas oscuras, este producto limpia a profundidad dejando la ropa con un tacto suave y un aroma agradable.',
    uses: 'Recomendado para prendas como pantalones, chamarras, suéteres, ropa interior, ropa de bebé, batas, toallas, sábanas, entre otras. El detergente líquido para ropa oscura puede utilizarse en el hogar, en lavanderías, hoteles e industrias textiles. Ayuda a conservar el tono original de las prendas oscuras sin decolorarlas.',
    presentation: `• 500 ml
      • 2 L
      • 5 L
      • 7 L
      • 10 L
      • 20 L`,
    imageUrl: ['/assets/ROPA OSCURA.png']
  },
  {
    id: 'p1c',
    categoryId: '1',
    name: 'ROPA FINA',
    description: 'Detergente especialmente formulado para el cuidado y la limpieza profunda de tus prendas delicadas. Su composición suave limpia sin dañar las fibras, mientras sus abrillantadores ópticos realzan los colores naturales de la tela.',
    uses: 'Ideal para prendas de lino, algodón, mezclilla, seda, sábanas,toallas y todo tipo de ropa que requiera un trato especial. Limpia eficazmente sin maltratar los tejidos y resalta los colores naturales.',
    presentation: `• 6 L
      • 7 L
      • 10 L`,
    imageUrl: ['/assets/ROPA FINA.png']
  },
  {
    id: 'p1d',
    categoryId: '1',
    name: 'QUITAMANCHAS PARA ROPA',
    description: 'Es ideal para el prelavado de telas blancas o de color. Gracias a su gran poder de penetración, actúa sin dañar las fibras. Su fórmula sin peróxido protege tus manos durante el uso.',
    uses: 'Este producto se utilizan en prendas de vestir como: pantalones,chamarras de tela, suéteres, ropa de bebé, ropa interior, batas, toallas, sábanas, etc, para remover manchas como: sangre, grasa de alimentos, café, pasto entre otros. El QUITAMANCHAS puede usarse tanto en el hogar como en instituciones (hoteles, lavanderías, etc.), industrias (fábricas de mezclillas, fabricas, telas de  algodón, etc.) Y NO  DESGASTA EL TONO DE SUS PRENDAS DE COLORES OSCUROS.',
    presentation: `• 925 ml
      • 4 L
      • 6 L`,

    imageUrl: [`/assets/QUITAMANCHAS.png`]
  },
  {
    id: 'p1e',
    categoryId: '1',
    name: 'CLORO',
    description: 'El hipoclorito de sodio (cuya disolución en agua es conocida como lejía) es un compuesto químico, fuertemente oxidante de fórmula NaClO. Contiene cloro en estado de oxidación +1, es un oxidante fuerte y económico. Debido a esta característica se utiliza como desinfectante, además destruye muchos colorantes por lo que se utiliza como blanqueador.',
    uses: 'BLANQUEA, DESMANCHA Y DESINFECTA: Úselo en el lavado o enjuague. Para telas blancas, para remover manchas de transpiración o desodorantes, cosméticos, pasto, café, té, vino y bebidas suaves, manchas de comida, sangre, leche o productos de huevo, manchas de orina y tinta de escribir.',
    presentation: `• 20 L

      DESINFECTA: Superficies como pisos y paredes, cuarto de baño o tinas de baño, lavanderías, tazas sanitarias, así como para, utensilios de cocina, agua, frutas y verduras,eliminando el 99.9% de los microorganismos que atentan contra la salud.
      
      DESODORIZA: Aplicándolo en Botes de basura,caños o tuberías.`,
    imageUrl: [`/assets/cloro.png`]
  },
  {
    id: 'p2a',
    categoryId: '2',
    description: `Están desarrollados para dejar las telas con una sensación delicada. Acondiciona los tejidos, evita su apelmazamiento y facilita las tareas de enjuague y planchado. Revitaliza las prendas, devolviéndoles su suavidad.
    
    Este producto se utiliza en especial en telas que están en contacto con la piel, dejando un aroma agradable. Contiene una mezcla de silicones y antiespumantes que ayudan a reducir las estática en la ropa permitiéndole un mejor deslizamiento al momento del planchado.

    Están desarrollados para dejar las telas con una sensación delicada. Acondiciona los tejidos, evita su apelmazamiento y facilita las tareas de enjuague y planchado. Revitaliza las prendas, devolviéndoles su suavidad.
    Este producto se utiliza en especial en telas que están en contacto con la piel, dejando un aroma agradable. Contiene una mezcla de silicones y antiespumantes que ayudan a reducir las estática en la ropa, permitiéndole un mejor deslizamiento al momento del planchado. 


    Usos
    Estos productos se utilizan en las prendas de vestir para suavizar las telas como pantalones, chamarras de tela, suéteres, ropa de bebé, batas, dejando un aroma agradable.
    Los suavizantes pueden usarse tanto en el hogar como en instituciones (hoteles, lavanderías, etc.), industrias (fábricas de mezclillas, fábricas telas de algodón, etc.)


    PROPIEDADES Y VENTAJAS
    • Biodegradable.
    • Alto rendimiento.
    • Aroma agradable.
    • Aroma perdurable.
    • Facilita el planchado de sus prendas.
    • Facilita el enjuague de sus prendas.
    • Revitaliza las prendas devolviéndoles su suavidad.
`,
  },
  {
    id: 'p2',
    categoryId: '2',
    name: 'LIBRE ENGUAJE AROMA FRESCO ANOCHERCER',
    lineaPre: `Presentación:
      • 850 ml
      • 4 L
      • 6 L
      • 7 L
      • 10 L`,
    lineaEco: `Manteniene la calidad del producto interno contratipo líder para ofrecer un gran costo beneficio por el consumidor final.
  
      En presentaciones de: 1L envase cuadrado y redondo, 5L, 10L y 20L.`,
    imageUrl: ['/assets/linea premium.png',
      "/assets/LINEA ECONOMICA.png"
    ]
  },
  {
    id: 'p2b',
    categoryId: '2',
    name: 'AROMA PRIMAVERA',
    lineaPre: `Presentación:
      • 850 ml
      • 4 L
      • 6 L
      • 7 L
      • 10 L`,
    lineaEco: `Manteniene la calidad del producto interno contratipo líder para ofrecer un gran costo beneficio por el consumidor final.
  
      En presentaciones de: 1L envase cuadrado y redondo, 5L, 10L y 20L.`,
    imageUrl: ['/assets/AROMA PRIMAVERA PREMIUM.png',
      "/assets/AROMA PRIMAVERA ECONOMICA.png"
    ]
  },
  {
    id: 'p2c',
    categoryId: '2',
    name: 'AROMA BEBÉ',
    lineaPre: `Presentación:
      • 850 ml
      • 4 L
      • 6 L
      • 7 L
      • 10 L`,
    lineaEco: `
  Manteniene la calidad del producto interno contratipo líder para ofrecer un gran costo beneficio por el consumidor final.
  
  En presentaciones de: 1L envase cuadrado y redondo, 5L, 10L y 20L.`,
    imageUrl: ['/assets/AROMA BEBE PREMIUM.png',
      "/assets/AROMA BEBE ECONOMICA.png"
    ]
  },
  {
    id: 'p2d',
    categoryId: '2',
    name: 'AROMA FRESCO AMANECER',
    lineaPre: `Presentación:
      • 850 ml
      • 4 L
      • 6 L
      • 7 L
      • 10 L`,
    lineaEco: `Manteniene la calidad del producto interno contratipo líder para ofrecer un gran costo beneficio por el consumidor final.
  
      En presentaciones de: 1L envase cuadrado y redondo, 5L, 10L y 20L.`,
    imageUrl: ['/assets/FRESCO AMANECER PREMIUM.png',
      "/assets/FRESCO AMANECER ECONOMICA.png"
    ]
  },
  {
    id: 'p3a',
    categoryId: '3',
    name: 'LIMPIADORES MULTIUSOS',
    description: `Proporciona una limpieza efectiva y segura en cualquier superficie que el agua no dañe, protegiendo al medio ambiente. Cuenta con la solución perfecta para dejar limpia y reluciente toda tu casa, ya que su fórmula tiene una poderosa triple acción limpiadora que remueve grasa y mugre. Su fórmula concentrada permite más efecto limpiador por botella. Además, es un limpiador que no maltrata tu piel. `,
    usesProduct: `Remueve grasa, polvo y mugre de cualquier superficie lavable, con su triple acción Desinfecta, Limpia y Aromatiza, dejando un agradable y fresco aroma.
    
    Los Limpiadores multiusos pueden usarse tanto en el hogar como en instituciones (hoteles, lavanderías, etc.), industrias (fábricas de mezclillas, fábricas telas de algodón, etc.)`,
    propietys: `• Limpia la mayoría de superficies en el hogar dejándolas con un fresco aroma.
    • Es ideal para toda clase de superficies, especialmente aquellas que el agua no dañe. 
    • Ayuda a lograr un saludable ambiente en el hogar.
    • Remueve la suciedad difícil y la grasa. No deja residuos.
    • Protege el medio ambiente, ya que no contiene fosfatos.
    • No daña la piel.

    Presentaciónes: 
    • 1 L.
    • 5 L
    • 10 L
    • 20 L`,
    imageUrl: ['/assets/LIMPIADOR FRUTAL.png',
      '/assets/LIMPIADOR LAVANDA.png',
      '/assets/LIMPIADOR LIMON.png',
      '/assets/LIMPIADOR PINO.png'

    ]
  },
  {
    id: 'p3',
    categoryId: '3',
    name: 'DETERGENTE LÍQUIDO PARA TRASTES',
    description: 'Fórmula que limpia y desincrusta la grasa pegada en los trastes, además de proteger tus manos, su nueva fórmula concentrada permite la limpieza profunda de los utensilios de cocina, con solo una pequeña cantidad.',
    presentation: `• Botellas spray 500ml
      • Garrafas 1L y 5L
      • Tambos 20L`,
    propietys: `• Alto rendimiento.
      • Fácil enjuague.
      • Antibacterial.
      • Alto poder desengrasante.
      • Biodegradable.
      • Humectante.`,
    imageUrl: ['/assets/DETERGENTE TRASTES.png']
  },
  {
    id: 'p3b',
    categoryId: '3',
    name: 'DESENGRASANTE MULTIUSOS',
    description: 'Formulado con detergentes, tenso, activos y espumantes, no ataca metales, plásticos ni pinturas, no se descompone en substancias tóxicas ni corrosivas y es biodegradable.',
    presentation: `• 1 L
      • 5 L
      • 10 L
      • 20 L`,
    propietys: `• Alto rendimiento.
      • Fácil enjuague.
      • Antibacterial.
      • Alto poder desengrasante.
      • Biodegradable.
      • Humectante `,
    imageUrl: ['/assets/DESENGRASANTE.png']
  },
  {
    id: 'p3c',
    categoryId: '3',
    name: 'LIMPIAVIDRIOS',
    description: 'Formulado con detergentes, tenso, activos y espumantes, no ataca metales, plásticos ni pinturas, no se descompone en substancias tóxicas ni corrosivas y es biodegradable. ',
    presentation: `• 1 L
      • 5 L
      • 10 L
      • 20 L`,
    propietys: `• Biodegradable.
      • Poder desengrasante.
      • Libre de amoniaco.
      • Disuelve rápidamente la mugre.
      • Es de rápida evaporación.
      • Sin solventes.
      • Brinda una alta transparencia y brillo en la superficie aplicada.`,
    imageUrl: ['/assets/limpia vidrios.png']
  },
  {
    id: 'p3d',
    categoryId: '3',
    name: 'JABÓN LÍQUIDO PARA MANOS',
    description: 'Es un producto especialmente diseñado para el cuidado y limpieza de tus manos, su fórmula balanceada permite recuperar fácilmente el factor de humectación natural de la piel. ',
    presentation: `• 500 ml
      • 1 L
      • 4 L
      • 20 L
  
      AROMAS
      • Apple
      • Coco
      • Cherry
      • Lavanda `

    ,
    propietys: `• Antibacterial.
      • Gran Espuma.
      • No reseca las Manos.
      • pH Balanceado.
      • Humectante.
      • Recupera el Factor Hídrico de la Piel.
      • Fácil Enjuague.
      • Gran emoliencia.`,
    imageUrl: ['/assets/JABON DE MANOS.png']
  },
  {
    id: 'p4',
    categoryId: '4',
    name: 'DESENGRASANTE',
    description: `Formulado con detergentes, tenso, activos y espumantes, no ataca metales, plásticos ni pinturas, no se descompone en substancias tóxicas ni corrosivas y es biodegradable.`,
    presentation: '• 20 L',
    propietys: `• Uso directo, no se diluya.
      • Rápido brillo a sus pisos.
      • Inoloro.
      • Alto rendimiento.
      • No contiene ni huele a petróleo.
      • No deja sus pisos aceitosos.
      • Insoluble.`,
    imageUrl: ['/assets/DESENGRASANTE LINEA INDUSTRIAL.png']
  },
  {
    id: 'p4b',
    categoryId: '4',
    name: 'LÍQUIDO PARA MOPS',
    description: 'Líquido aceitoso, incoloro, ligeramente viscoso, propio para ser usado en mops y con magnetizador de polvo, con aroma a cereza.',
    presentation: '• 20 L',
    propietys: `• Uso directo, no se diluya.
      • Rápido brillo a sus pisos.
      • Inoloro.
      • Alto rendimiento.
      • No contiene ni huele a petróleo.
      • No deja sus pisos aceitosos.
      • Insoluble.`,
    imageUrl: ['/assets/mops.png']
  },
  {
    id: 'p4c',
    categoryId: '4',
    name: 'CERA PARA PISOS',
    description: `Puede ser usado sobre una gran variedad de superficies (pisos) sintéticas, sellados o sin sellar. Su contenido de sólidos provee alto brillo con un mínimo de aplicaciones sobre pisos nuevos.`,
    presentation: '• 20 L',
    propietys: `• Alto rendimiento 50 m2 por litro
      • Versátil.
      • Alto brillo.`,
    imageUrl: ['/assets/CERA PARA PISOS.png']
  },
  {
    id: 'p4d',
    categoryId: '4',
    name: 'PASTA PARA PÚLIR MARMOL',
    description: `Les da un mejor aspecto y un brillo natural. Ideal para pisos de mucho tráfico en centros comerciales, hoteles, hospitales, escuelas, fábricas y otros. Solo se necesitan 15 gr por metro cuadrado.`,
    presentation: '• 20 L',
    propietys: `• Brillo natural a sus pisos.
      • Alto rendimiento.
      • Para pisos de granito, mármol y terrazo.`,
    imageUrl: ['/assets/pasta para pulir.png']
  },
  {
    id: 'p4e',
    categoryId: '4',
    name: 'SANITIZANTE',
    description: `Germicida, deodorizante y limpiador formulado con sales cuaternarias de amonio. Inhibe el crecimiento de los microorganismos patógenos causantes de enfermedades y malos olores.`,
    presentation: '• 20 L',
    propietys: `• Efectivo frente a bacterias, algas y hongos.
      • Rápido poder bacteriana, muy alto coeficiente fenólico.
      • Mantiene su eficacia bacteriana en presencia de elevadas cantidades de materia orgánica.
      • Excelente actividad fungicida o antimoho.`,
    imageUrl: ['/assets/sanitizante.png']
  },
  {
    id: 'p4f',
    categoryId: '4',
    name: 'GERMICIDA',
    applications: `El limpiador puede ser usado en todo tipo de pisos, barras, mesas, azulejos, baños, etc. Puede utilizarlo en todo tipo de superficies como plástico, madera, cerámica, metales entre otros con suciedad leve que desee remover y desinfectar.`,
    recomUses: `Para baños rocíelo directamente sobre tazas, mingitorios, mamparas, lavamanos, llaves y despachadores, luego pase un trapo limpio o deje secar libremente.`,
    imageUrl: ['/assets/GERMICIDA.png']
  },
  {
    id: 'p5',
    categoryId: '5',
    name: 'DESENGRASANTE PARA MANOS',
    description: 'Crema humectante de uso rudo para la limpieza profunda de las manos. Remueve grasa, tinta, carbón, hollín, mugre y suciedad sin dañar ni resecar la piel. No contiene solventes ni materiales agresivos para la piel.',
    presentation: '• 4 L',
    propietys: `• Máxima limpieza para tus manos.
      • No necesita agua para enjuagar.
      • Elimina la grasa y siciedad pegada.
      • Protege y humecta sus manos.
      • Biodegradable.
      • Alto rendimiento.`,
    imageUrl: ['/assets/DESENGRASANTE MANOS.png']
  },
  {
    id: 'p5b',
    categoryId: '5',
    name: 'SHAMPOO PARA AUTOS',
    description: `Excelente para el lavado del auto, permite eliminar los residuos de polvo y suciedad que se van depositando sobre la superficie del automóvil, genera poca espuma, lo que permite un enjuague más fácil y rápido sin gastar agua.`,
    presentation: '• 7 L',
    propietys: `• Biodegradable.
      • Fácil enjuague.
      • Baja espuma.
      • Alto rendimiento.
      • Disuelve rápidamente la mugre.
      • Fácil aplicación.`,
    imageUrl: ['/assets/shammpoo autos.png']
  },
  {
    id: 'p5c',
    categoryId: '5',
    name: 'ABRILLANTADOR',
    description: `Producto especialmente diseñado para mantener el brillo de las llantas y molduras del automóvil, auxiliar en el tratamiento de pieles y vinilos con un excelente brillo. Ahora acondicionado con filtro solar, lo que ayuda a evitar el desgaste de las molduras y llantas por efecto de la luz ultravioleta.`,
    presentation: `• 7 L
      • 10 L
      • 20 L`,
    propietys: `• Biodegradable.
      • Alto brillo.
      • Excelente deslizamiento.
      • No se escurre.
      • Libre de glicerinas (no cuartea las moldaduras y los tableros).
      • No genera estática, no atrae el polvo. `,
    imageUrl: ['/assets/ABRILLANTADOR.png']
  },
  {
    id: 'p5d',
    categoryId: '5',
    name: 'LIMPIA PARABRISAS',
    description: `Producto especialmente diseñado para remover mugre, polvo y grasa depositada en las superficies de vidrio, cerámica y espejos. Puede utilizarse en los depósitos de agua del automóvil para su limpieza, además de que evita el empañamiento.`,
    presentation: `• 7 L
      • 10 L
      • 20 L`,
    propietys: `• Biodegradable.
      • Alto rendimiento.
      • Poder desengrasante.
      • Libre de amoniaco.
      • Disuelve rápidamente la mugre.
      • Es de rápida evaporación.
      • Brinda una alta transparencia y brillo. `,
    imageUrl: ['/assets/LIMPIA PARABISAS.png']
  },
  {
    id: 'p5e',
    categoryId: '5',
    name: 'ANTICONGELANTE 50/50',
    description: `Uno de los mejores medios para mantener el motor a una temperatura adecuada, hasta hace algunos años, era el agua, sin embargo, esta solo evitaba el sobrecalentamiento del motor, y en ocasiones no permitía uno buen desempeño a temperaturas bajas.`,
    presentation: `• 3.78 L
      • 5 L`,
    propietys: `• Alto rendimiento.
      • Fácil de identificar.
      • Gran desempeño a bajas y altas temperaturas.
      • Previene la corrosión.
      • Evita la deposición.`,
    imageUrl: ['/assets/ANTICONGELANTE 5050.png']
  },
  {
    id: 'p5f',
    categoryId: '5',
    name: 'ANTICONGELANTE LISTO PARA USAR',
    description: `Está formulado con ingredientes que ayudan a obtener puntos de congelación muy por debajo de las del agua y puntos de ebullición muy por encima de las temperaturas de trabajo de los motores, además de que su composición permite proteger contra la corrosión.`,
    presentation: `• 7 L`,
    propietys: `• Alto rendimiento.
      • Fácil de identificar.
      • Gran desempeño a bajas y altas temperaturas.
      • Previene la corrosión.
      • Evita la deposición.`,
    imageUrl: ['/assets/anticongelante listo para usar.png']
  },
  {
    id: 'p5g',
    categoryId: '5',
    name: 'SHAMPOO PARA CARROCERÍAS FÁCIL ENJUAGUE',
    description: `Excelente para el lavado del auto, permite eliminar los residuos de polvo y suciedad que se van depositando sobre la superficie del automóvil, genera poca espuma, lo que permite un enjuague más fácil y rápido sin gastar agua.`,
    presentation: `• 1 L`,
    propietys: `• Biodegradable.
      • Fácil limpieza.
      • Baja espuma.
      • Alto rendimiento.
      • Disuelve rápidamente la mugre.
      • Fácil aplicación.`,
    imageUrl: ['/assets/shampoo carroceria.png']
  },
  {
    id: 'p5h',
    categoryId: '5',
    name: 'CERA LÍQUIDA CON FILTRO SOLAR',
    description: `Mantiene el brillo y la tonalidad de la pintura de tu automóvil, fabricado a partir de ceras naturales que le confieren un brillo y protección contra los efectos del sol y la lluvia. Adicionado con filtro solar que evita la decoloración de la pintura, mezcla de suaves agentes que permiten un excelente pulido sin rayar.`,
    presentation: `• 500 ml`,
    propietys: `• Biodegradable.
      • Alto Brillo.
      • Excelente deslizamiento.
      • No se apelmaza.
      • Alto rendimiento.
      • Con ceras naturales.
      • Es de fácil aplicación.`,
    imageUrl: ['/assets/cera liquida.png']
  },
  {
    id: 'p5i',
    categoryId: '5',
    name: 'DESENGRASANTE PARA MOTORES Y RINES',
    description: `Formulado con detergentes, tenso, activos y espumantes, no ataca metales, plásticos ni pinturas, no se descompone en substancias tóxicas ni corrosivas y es biodegradable.`,
    presentation: `• 1 L`,
    propietys: `• Alto rendimiento.
      • Antibacterial.
      • Alto poder desengrasante.
      • Biodegradable.`,
    imageUrl: ['/assets/desengrasante rines.png']
  },

  {
    id: 'p5j',
    categoryId: '5',
    name: 'LIMPIA PARABRISAS BRINDA UNA ALTA TRANSPARENCIA Y BRILLO',
    description: `Producto especialmente diseñado para remover mugre, polvo y grasa depositada en las superficies de vidrio, cerámica y espejos. Puede utilizarse en los depósitos de agua del automóvil para su limpieza, además de que evita el empañamiento.`,
    presentation: `• 1 L`,
    propietys: `• Biodegradable.
      • Alto rendimiento.
      • Poder desengrasante.
      • Libre de Amoniaco.
      • Disuelve rápidamente la mugre.
      • Es de rápida evaporación.`,
    imageUrl: ['/assets/LIMPIA PARABRISAS ALTO BRILLO.png']
  },
  {
    id: 'p5k',
    categoryId: '5',
    name: 'LAVA VESTIDURAS DE FÁCIL APLICACIÓN',
    description: `Fórmula diseñada para la limpieza de la tapicería y vestiduras del automóvil, puede usarse como auxiliar en la limpieza de sofás, alfombras y sillas. Su mezcla de activos y detergentes suaves, permite eliminar la suciedad de la tela sin maltratarla, además de incorporar agentes desengrasantes que te ayudaran a quitar la mancha más difícil, de fácil enjuague y gran rendimiento.`,
    presentation: `• 500 ml`,
    propietys: `• Biodegradable.
      • Alto brillo.
      • Excelente deslizamiento.
      • No se apelmaza.
      • Alto rendimiento.
      • Con ceras naturales.
      • Es de facíl aplicación.`,
    imageUrl: ['/assets/lavavestiduras.png']
  },
  {
    id: 'p5l',
    categoryId: '5',
    name: 'ABRILLANTADOR NO GENERA ESTÁTICA, NO ATRAE EL POLVO',
    description: `Mantiene el brillo y la tonalidad de la pintura de tu automóvil, fabricado a partir de ceras naturales que le confieren un brillo y protección contra los efectos del sol y la lluvia. Adicionado con filtro solar que evita la decoloración de la pintura, mezcla de suaves agentes que permiten un excelente pulido sin rayar.`,
    presentation: `• 1 L`,
    propietys: `• Biodegradable.
      • Alto brillo.
      • Excelente deslizamiento.
      • No se escurre.
      • Libre de glicerinas (no cuartea las moldaduras y los tableros)`,
    imageUrl: ['/assets/LIMPIA PARABRISAS ALTO BRILLO.png']
  },
  {
    id: 'p6',
    categoryId: '6',
    imageUrl: ['/assets/jarceria-2-2.jpg']
  },

  {
    id: 'p7',
    categoryId: '7',
    nameSeg: `SANITEC PE`,
    decripSeg: `Descripción:
    Desinfectante a base ácido peracético con alto poder germicida. Elimina bacterias gram (+) y gram (-), coliformes, levaduras, hongos y virus. No mancha las superficies y es fácil de enjuague.`,
    usesSeg: `Usos y aplicaciones:
    Para la desinfección de frutas, verduras, equipos, utensilios y superficies en contacto con alimentos.`,
    advantagesSeg: `Ventajas:
    • Amplio espectro antibacteriano, efectivo contra hongos, levaduras y virus donde sea aplicado.
    • Sirve para desinfectar superficies y utensilios en contacto con alimentos en cocinas y plantas procesadoras involucradas en elaboración de alimentos.
    • Libre de enjuague
    • Es totalmente Hidrosoluble
    • No hace espuma por lo que es ideal en sistemas CIP`
  },
  {
    id: 'p7b',
    categoryId: '7',
    nameSeg: `SANITEC 10`,
    decripSeg: `Descripción:
    Desinfectante líquido concentrado a base de cloro activo. Elimina bacterias patógenas, hongos y moho de superficies. Mejora la apariencia de los equipos.`,
    usesSeg: `Usos y aplicaciones:
    Para la limpieza, desinfección y deodorización de equipos, tuberías, utensilios y superficies.`,
    advantagesSeg: `Ventajas:
    • Efectivo frente a bacterias, algas y hongos.
    • Rápido poder bactericida, muy alto coeficiente fenólico.
    • Mantiene su eficacia bactericida en presencia de elevadas cantidades de materia orgánica.
    • Excelente actividad fungicida o antimoho.`
  },
  {
    id: 'p7c',
    categoryId: '7',
    nameSeg: `CUT GREASE`,
    decripSeg: `Descripción:
    Desengrasante líquido concentrado, formulado para eliminar grasa, aceite, cochambre y suciedad en general.`,
    usesSeg: `Usos y aplicaciones:
    Para limpieza de pisos, paredes, maquinaria, equipo, mesas de trabajo, cocinas, hornos, campanas, etc.`,
    advantagesSeg: `Ventajas:
    • Reduce el tiempo de limpieza.
    • Elimina la grasa acumulada y grasas quemadas.
    • Es efectivo a bajas concentraciones.`
  },
  {
    id: 'p7d',
    categoryId: '7',
    nameSeg: `KUTTER PLUS`,
    decripSeg: `Descripción:
    Detergente alcalino concentrado, remueve grasas, películas de proteínas y residuos de alimentos. Penetra rápidamente en las suciedades más adheridas, no deja películas de alcalinidad y previene la formación de incrustaciones.`,
    usesSeg: `Usos y aplicaciones:
    •Para la limpieza manual o por recirculación (CIP) de equipos, tanques, tuberías, tinas, depósitos, etc. de plantas de procesamiento de alimentos.`,
    advantagesSeg: ` Ventajas:
    • Elimina las suciedades y la grasa adheridas en los equipos, tuberías y accesorios implicados en la manufactura de alimentos.
    • Especial para su utilización en aguas duras.
    • No genera espuma.`
  },
  {
    id: 'p7e',
    categoryId: '7',
    nameSeg: `WAY PLUS`,
    decripSeg: `Descripción:
    Desincrustante para máquinas lavavajillas que humecta, penetra y disuelve las incrustaciones originadas por las sales de agua y óxido de metales. Puede ser usado también de manera manual para la limpieza de depósitos minerales y sarro en superficies de metal o cerámica.`,
    usesSeg: `Usos y aplicaciones:
    En máquinas lavavajillas, superficies de acero inoxidable, loza, cafeteras, cristalería, marmitas, baños maría, etc.`,
    advantagesSeg: `Ventajas:
    • Elimina las incrustaciones calcáreas sin dañar los componentes de las máquinas.
    • No desprende olores desagradables ni vapores nocivos.
    • Contiene tensoactivos biodegradables.
    • Ideal para desincrustar máquinas lavavajillas por recirculación.`
  },
  {
    id: 'p7f',
    categoryId: '7',
    nameSeg: `WASH CLEAN`,
    decripSeg: `Descripción:
    Detergente espumoso, concentrado de acción rápida, emulsifica y remueve grasa vegetal y animal, aceites y residuos alimenticios. No raya las superficies ni contiene materiales cáusticos ni abrasivos.`,
    usesSeg: `Usos y aplicaciones:
    Detergente de uso general para la limpieza de todo tipo de superficies y equipos involucrados en el procesamiento de alimentos. Para uso manual o con espumadores.`,
    advantagesSeg: `Ventajas:
    • Su espuma permanece más tiempo en contacto con las superficies, mejorando la limpieza
    • Alto poder espumante a concentraciones bajas
    • Fácil enjuague
    • No deja residuos
    • No mancha`
  },
  {
    id: 'p7g',
    categoryId: '7',
    nameSeg: `POWER DRY`,
    decripSeg: `Descripción:
    Aditivo para el rápido secado de loza y cristalería, formulado para evitar la formación de marcas, manchas y películas provocadas por la dureza del agua y residuos de detergente, facilita el escurrimiento y ayuda a conservar el brillo original de los utensilios.`,
    usesSeg: `Usos y aplicaciones:
    Para ser usado en el enjuague final del proceso de lavado de loza y cristalería en máquinas lava vajillas automáticas.`,
    advantagesSeg: `Ventajas:
    • Permite que la vajilla y utensilios queden secos y brillantes al finalizar el ciclo de lavado.
    • Reduce los residuos calcáreos.
    • Ideal para cristalería y loza.
    • Rendimiento óptimo lo cual se traduce en ahorros.
    • En conjunto con una temperatura de secado óptima, elimina la necesidad de trapear la loza.`
  },
  {
    id: 'p7h',
    categoryId: '7',
    nameSeg: `HAND SANIDERM`,
    decripSeg: `Descripción:
    Gel desinfectante para manos con acción bactericida y bacteriostática contra la mayoría de microorganismos y hongos patógenos. No requiere enjuague. Contiene agentes humectantes a la piel que previenen la resequedad.`,
    usesSeg: `Usos y aplicaciones:
    Para lugares donde se manipulan alimentos como hoteles, restaurantes, comedores industriales, procesadoras de alimentos, embotelladoras, empacadoras, etc.`,
    advantagesSeg: `Ventajas:
    • Elimina eficazmente la presencia de microorganismos patógenos causantes de enfermedades.
    • No deja sensación pegajosa.
    • No reseca la piel ni deja residuos de aromas desagradables.`
  },
  {
    id: 'p7i',
    categoryId: '7',
    nameSeg: `DERMOCLEAN`,
    decripSeg: `Descripción:
    Jabón desinfectante líquido para la limpieza profunda de manos. Posee acción bactericida y bacteriostática contra la mayoría de microorganismos patógenos que se depositan en las manos. Elimina bacterias gram (+), gram (-), hongos y virus.`,
    usesSeg: `Usos y aplicaciones:
    Para lugares donde se manipulan alimentos como hoteles, restaurantes, comedores industriales, procesadoras de alimentos, embotelladoras, empacadoras, etc.`,
    advantagesSeg: `Ventajas:
    • Remueve de la piel partículas de mugre, bacterias, células muertas, sudor y grasa mediante una fórmula que contiene agentes tensoactivos que permiten disolver y remover la suciedad manteniendo la piel saludable.
    • No reseca la piel ni deja residuos de aromas desagradables.
    • Controla eficazmente la presencia de microorganismos patógenos causantes de enfermedades.`
  },
  {
    id: 'p7j',
    categoryId: '7',
    nameSeg: `DOSIFICADORES PARA MÁQUINA LAVALOZA Y DISPENSADORES DE JABON`,
    decripSeg: `Ofrecemos una amplia variedad de soluciones innovadoras para dispensadores para lava vajillas industriales. Ofrezca una mayor eficiencia de limpieza a través de sistemas dispensadores altamente precisos que mejoran la confiabilidad, funcionalidad, con el respaldo de un equipo personal de ventas y servicios.
    Los productos los ofrecemos con un convenio de comodato.`
  },


];

export default function CategoryPage({ categorySlug, onBack }) {
  const category = categories.find(c => c.slug === categorySlug) || null;
  const categoryProducts = category
    ? products.filter(p => p.categoryId === category.id)
    : [];


  if (!category) {
    return (
      <div className="not-found-page">
        <div className="not-found-content">
          <h2 className="not-found-title">Categoría no encontrada</h2>
          <button
            onClick={onBack}
            className="back-button-link"
          >
            Volver a productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page-wrapper">
      <div className="page-container">
        <button
          onClick={onBack}
          className="back-to-products-button"
          style={{ fontFamily: '"Josefin Sans", sans-serif' }}
        >
          <ArrowLeft className="icon-small" />
          <span>Volver a Productos</span>
        </button>

        <div className="category-header">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="header-image"
          />
          <div className="header-overlay">
            <div className="header-title-box">
              <h1 className="header-title">{category.name}</h1>
            </div>
          </div>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="no-products-message">
            <Package className="icon-large" />
            <h2 className="no-products-title">Próximamente</h2>
            <p className="no-products-text">Estamos trabajando en agregar productos a esta categoría.</p>
          </div>
        ) : (
          <div className="products-list">

            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
              >

                {product.name && (
                  <h2 className="product-name" style={{ fontFamily: '"Oswald", sans-serif' }}>
                    {product.name.toUpperCase()}
                  </h2>
                )}

                {product.description && (
                  <p
                    className="product-description"
                    style={{ textAlign: "justify", fontFamily: '"Lato", sans-serif' }}
                  >
                    {product.description}
                  </p>
                )}

                <div className="product-info-grid">

                  <div className="image-display-area">
                    {product.imageUrl && product.imageUrl.length > 0 && (
                      product.imageUrl.length > 1 ? (
                        <div className="multi-image-container">
                          <div className="multi-image-scroll">
                            {product.imageUrl.map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt={product.name}
                                className="product-thumbnail"
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className={`single-image-container ${product.categoryId === '6' ? 'jarceria-image' : ''} `}>

                          <img
                            src={product.imageUrl[0]}
                            alt={product.name}
                            className="product-image"
                          />
                        </div>
                      )
                    )}
                  </div>

                  <div className="product-details-grid">
                    {product.descriptProduct && (
                      <div className="security-box grezen-highlight">
                        <p className='security-text' style={{ textAlign: "justify" }}>
                          {product.descriptProduct}
                        </p>
                      </div>
                    )}

                    {product.usesProduct && (
                      <div className="detail-box green-gradient">
                        <h3 className="detail-title" style={{ fontFamily: '"Oswald", sans-serif' }}>USOS</h3>
                        <p className="detail-text" style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                          {product.usesProduct}
                        </p>
                      </div>
                    )}


                    {product.propietys && (
                      <div className="detail-box blue-gradient">
                        <h3 className="detail-title" style={{ fontFamily: '"Oswald", sans-serif' }}>PROPIEDADES Y VENTAJAS</h3>
                        <p className="detail-text" style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                          {product.propietys}
                        </p>
                      </div>
                    )}

                    {product.uses && (
                      <div className="detail-box blue-gradient">
                        <h3 className="detail-title" style={{ fontFamily: '"Oswald", sans-serif' }}>USOS</h3>
                        <p className="detail-text" style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                          {product.uses}
                        </p>
                      </div>
                    )}

                    {product.presentation && (
                      <div className="detail-box green-gradient">
                        <h3 className="detail-title" style={{ fontFamily: '"Oswald", sans-serif' }}>PRESENTACIÓN</h3>
                        <p className="detail-text" style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                          {product.presentation}
                        </p>
                      </div>
                    )}

                    {product.applications && (
                      <div className="detail-box blue-gradient">
                        <h3 className="detail-title" style={{ fontFamily: '"Oswald", sans-serif' }}>APLICACIONES</h3>
                        <p className="detail-text" style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                          {product.applications}
                        </p>
                      </div>
                    )}

                    {product.lineaPre && (
                      <div className="detail-box blue-gradient">
                        <h3 className="detail-title" style={{ fontFamily: '"Oswald", sans-serif' }}>LÍNEA PREMIUM</h3>
                        <p className="detail-text" style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                          {product.lineaPre}
                        </p>
                      </div>
                    )}

                    {product.lineaEco && (
                      <div className="detail-box green-gradient">
                        <h3 className="detail-title" style={{ fontFamily: '"Oswald", sans-serif' }}>LÍNEA ECONÓMICA</h3>
                        <p className="detail-text" style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                          {product.lineaEco}
                        </p>
                      </div>
                    )}

                    {product.recomUses && (
                      <div className='detail-box green-gradient'>
                        <h3 className='detail-title' style={{ fontFamily: '"Oswald", sans-serif' }}>RECOMENDACIONES DE USO</h3>
                        <p className='detail-text' style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                          {product.recomUses}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {product.decripSeg && (
                  <div className="security-box grezen-highlight">
                    <h3 className='security-title' style={{ fontFamily: '"Oswald", sans-serif' }}>
                      {product.nameSeg}
                    </h3>
                    <p className='security-text' style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                      {product.decripSeg}

                    </p>
                    <p className='security-text' style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                      {product.usesSeg}
                    </p>
                    <p className='security-text' style={{ textAlign: "justify", fontFamily: '"Josefin Sans", sans-serif' }}>
                      {product.advantagesSeg}

                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}