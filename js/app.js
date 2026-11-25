const recetas = [
    {
        id: 1,
        titulo: "Galletas veganas con mermelada",
        categoria: "Postres",
        subcategoria: "Repostería · Horno",
        alimentacion: ["Sin frutos secos"],
        tiempoMin: 15,
        tiempoTexto: "15 min + 1 h reposo",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 38,
        porcionesBase: 24,
        unidadPorciones: "galletas",
        descripcion: "Galletas suaves de vainilla y bebida de soja con centro de mermelada de fresa ecológica con sirope de agave.",
        imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Galletas horneadas con relleno de mermelada de fresa ecológica.",
        alergenos: "Contiene gluten (harina de trigo) y soja.",
        claveCocina: "Refrigera la masa al menos 1 hora para que no se deforme al hornear y haz el hueco con el pulgar ligeramente enharinado.",
        ingredientes: [
            { cantidad: 250, unidad: "g", nombre: "de harina de trigo" },
            { cantidad: 150, unidad: "g", nombre: "de margarina vegetal a temperatura ambiente" },
            { cantidad: 70, unidad: "g", nombre: "de azúcar glass" },
            { cantidad: 1, unidad: "pizca", nombre: "de sal" },
            { cantidad: 0.5, unidad: "cdita", nombre: "de esencia de vainilla" },
            { cantidad: 50, unidad: "ml", nombre: "de bebida de soja" },
            { cantidad: 6, unidad: "cditas", nombre: "de mermelada extra de fresa ecológica" }
        ],
        pasos: [
            { titulo: "Crema la margarina", detalle: "Bate la margarina a temperatura ambiente con el azúcar glass hasta lograr una crema uniforme. Añade la bebida vegetal y la vainilla y vuelve a batir. Agrega la harina y la sal e integra bien." },
            { titulo: "Amasa y refrigera", detalle: "Amasa unos minutos sobre una superficie enharinada, forma una bola y deja enfriar al menos 1 hora en la nevera." },
            { titulo: "Forma las galletas", detalle: "Precalienta el horno a 180 °C. Divide la masa en 24 porciones pequeñas, aplasta cada bola y haz un hueco en el centro con una cucharilla o el pulgar." },
            { titulo: "Rellena con mermelada", detalle: "Coloca las galletas en una bandeja de horno y pon un cuarto de cucharadita de mermelada de fresa en el hueco central de cada una." },
            { titulo: "Hornea y enfría", detalle: "Hornea a 180 °C durante 15 minutos hasta que los bordes estén dorados y deja enfriar sobre una rejilla." }
        ]
    },
    {
        id: 2,
        titulo: "Flan de avena",
        categoria: "Postres",
        subcategoria: "Postre frío · Sin horno",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 20,
        tiempoTexto: "20 min + 3 h frío",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 45,
        porcionesBase: 4,
        unidadPorciones: "porciones",
        descripcion: "Postre cremoso elaborado con bebida y copos de avena, aromatizado con vainilla, cúrcuma y caramelo dorado.",
        imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Flan de avena con caramelo líquido dorado.",
        alergenos: "Puede contener trazas de gluten según la certificación de la avena.",
        claveCocina: "Mueve constantemente con varillas al calentar para que la maicena y la avena espesen sin pegarse al fondo del cazo.",
        ingredientes: [
            { cantidad: 1, unidad: "L", nombre: "de bebida de avena" },
            { cantidad: 100, unidad: "g", nombre: "de copos de avena" },
            { cantidad: 80, unidad: "g", nombre: "de maicena" },
            { cantidad: 200, unidad: "g", nombre: "de endulzante a elección" },
            { cantidad: 1, unidad: "cdita", nombre: "de cúrcuma en polvo" },
            { cantidad: 1, unidad: "cdita", nombre: "de vainilla en polvo o rama" },
            { cantidad: 100, unidad: "g", nombre: "de azúcar o eritritol (para el caramelo)" },
            { cantidad: 60, unidad: "g", nombre: "de agua (para el caramelo)" }
        ],
        pasos: [
            { titulo: "Licúa la base", detalle: "Añade a la batidora o licuadora la bebida de avena, los copos, la maicena, el endulzante, la cúrcuma y la vainilla. Bate 2-3 minutos hasta obtener una mezcla homogénea sin grumos." },
            { titulo: "Espesa al fuego", detalle: "Vierte la mezcla en un cazo y calienta a fuego medio removiendo sin parar hasta que adquiera una textura espesa." },
            { titulo: "Carameliza y rellena", detalle: "Prepara el caramelo con el azúcar y el agua, repártelo en el fondo de los moldes para flan y vierte encima la mezcla caliente." },
            { titulo: "Refrigera hasta cuajar", detalle: "Deja templar y refrigera durante al menos 3 horas antes de desmoldar y servir." }
        ]
    },
    {
        id: 3,
        titulo: "Stick de brownie cheesecake veganos",
        categoria: "Postres",
        subcategoria: "Repostería fría · Chocolate",
        alimentacion: [],
        tiempoMin: 60,
        tiempoTexto: "60 min + reposo",
        dificultadNivel: 5,
        dificultadTexto: "Experta",
        likesBase: 64,
        porcionesBase: 12,
        unidadPorciones: "unidades",
        descripcion: "Triángulos helados en palito con base de brownie húmedo, relleno cremoso de anacardos y doble cobertura de chocolate.",
        imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Porciones de brownie cheesecake bañadas en chocolate y galleta.",
        alergenos: "Contiene frutos secos (anacardos), gluten y soja.",
        claveCocina: "Limpia el cuchillo con agua caliente entre corte y corte para obtener triángulos limpios antes de insertar los palitos.",
        ingredientes: [
            { cantidad: 4, unidad: "cdas", nombre: "de semillas de lino molidas + 8 cdas de agua" },
            { cantidad: 140, unidad: "g", nombre: "de margarina vegana" },
            { cantidad: 300, unidad: "g", nombre: "de azúcar en polvo" },
            { cantidad: 120, unidad: "g", nombre: "de cacao puro en polvo" },
            { cantidad: 200, unidad: "g", nombre: "de harina de repostería + 1 cdita polvo de hornear" },
            { cantidad: 250, unidad: "g", nombre: "de anacardos remojados y escurridos" },
            { cantidad: 500, unidad: "g", nombre: "de queso crema vegano + 100 g crema de coco" },
            { cantidad: 700, unidad: "g", nombre: "de chocolate vegano oscuro (relleno y cobertura)" },
            { cantidad: 400, unidad: "g", nombre: "de chocolate blanco vegano + galletas de caramelo" }
        ],
        pasos: [
            { titulo: "Prepara el lino y hornea el brownie", detalle: "Precalienta el horno a 180 °C. Hidrata el lino molido con agua 10 minutos, bate con margarina y azúcar, e integra cacao, polvo de hornear y harina. Hornea 3/4 en molde de 20 cm y 1/4 en molde pequeño por 20-25 minutos." },
            { titulo: "Prepara la crema cheesecake", detalle: "Derrite 200 g de chocolate al baño María y licúa con los anacardos escurridos, el queso crema vegano y la crema de coco por 5 minutos hasta lograr una crema lisa." },
            { titulo: "Monta y cuaja en frío", detalle: "Vierte el relleno sobre la base de brownie fría, incrusta trozos del brownie pequeño y refrigera de 4 a 6 horas." },
            { titulo: "Corta e inserta los palitos", detalle: "Desmolda, corta en 8-12 triángulos uniformes, inserta un palito de madera en cada uno y congela 1 hora." },
            { titulo: "Baña en chocolate y decora", detalle: "Sumerge cada triángulo en chocolate oscuro o blanco derretido, rocía crema de galleta tibia y decora con trozos de brownie y galleta." }
        ]
    },
    {
        id: 4,
        titulo: "Helado vegano de avellana",
        categoria: "Postres",
        subcategoria: "Heladería artesanal",
        alimentacion: ["Sin gluten", "Sin soja"],
        tiempoMin: 60,
        tiempoTexto: "60 min + congelado",
        dificultadNivel: 5,
        dificultadTexto: "Intermedia",
        likesBase: 51,
        porcionesBase: 6,
        unidadPorciones: "porciones",
        descripcion: "Helado cremoso de anacardos y bebida de avellanas endulzado naturalmente con dátiles y vetas de crema de cacao.",
        imagen: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Bolas de helado artesanal de avellana con trocitos crujientes.",
        alergenos: "Contiene frutos secos (anacardos y avellanas).",
        claveCocina: "Tapa la crema con papel film haciendo contacto directo ('a piel') para evitar que se formen cristales de hielo.",
        ingredientes: [
            { cantidad: 450, unidad: "g", nombre: "de anacardos crudos" },
            { cantidad: 100, unidad: "ml", nombre: "de agua" },
            { cantidad: 300, unidad: "ml", nombre: "de bebida de avellana" },
            { cantidad: 1, unidad: "cda", nombre: "de esencia de vainilla" },
            { cantidad: 100, unidad: "g", nombre: "de cubitos de avellana tostada" },
            { cantidad: 2, unidad: "cdas", nombre: "de crema de cacao y avellanas" },
            { cantidad: 7, unidad: "pzas", nombre: "de dátiles sin hueso" }
        ],
        pasos: [
            { titulo: "Remoja frutos y dátiles", detalle: "Pon los anacardos y los dátiles en remojo durante 4 horas; escurre bien y pásalos a un vaso batidor amplio." },
            { titulo: "Tritura hasta emulsionar", detalle: "Añade el agua, la bebida de avellanas y la vainilla. Bate unos 5 minutos hasta conseguir una mezcla fina y sin grumos." },
            { titulo: "Reposa en frío", detalle: "Tapa con papel film a piel y refrigera un mínimo de 9 horas para que la base tome cuerpo." },
            { titulo: "Manteca y marmolea", detalle: "Manteca en heladera 45 minutos (o congela batiendo cada hora), añade los cubitos de avellana al final y alterna en el molde con crema de cacao antes de congelar toda la noche." }
        ]
    },
    {
        id: 5,
        titulo: "Mousse de chocolate vegano",
        categoria: "Postres",
        subcategoria: "Postre rápido · Sin cocción",
        alimentacion: ["Sin gluten", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min + 2 h frío",
        dificultadNivel: 3,
        dificultadTexto: "Muy fácil",
        likesBase: 57,
        porcionesBase: 4,
        unidadPorciones: "copas",
        descripcion: "Mousse aterciopelado de cacao puro y aguacate maduro con sirope de agave y un toque de vainilla.",
        imagen: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Mousse cremoso de cacao servido en copa individual.",
        alergenos: "Contiene frutos secos (leche de almendra).",
        claveCocina: "Elige aguacates bien maduros y sin hebras para que la textura quede sedosa y el sabor del cacao sea protagonista.",
        ingredientes: [
            { cantidad: 1, unidad: "taza", nombre: "de aguacate maduro" },
            { cantidad: 0.5, unidad: "taza", nombre: "de cacao puro en polvo" },
            { cantidad: 0.25, unidad: "taza", nombre: "de sirope de agave" },
            { cantidad: 1, unidad: "cdita", nombre: "de esencia de vainilla" },
            { cantidad: 0.5, unidad: "taza", nombre: "de leche de almendra" }
        ],
        pasos: [
            { titulo: "Bate hasta cremar", detalle: "Coloca el aguacate, el cacao en polvo, el sirope de agave, la vainilla y la leche de almendra en la licuadora y procesa hasta lograr una crema suave y aireada." },
            { titulo: "Refrigera en copas", detalle: "Reparte en vasos o copas individuales y refrigera al menos 2 horas para que tome consistencia." },
            { titulo: "Decora al servir", detalle: "Termina con nueces picadas, virutas de chocolate oscuro o frutos rojos frescos." }
        ]
    },
    {
        id: 6,
        titulo: "Waffles veganos con chocolate",
        categoria: "Desayunos",
        subcategoria: "Desayuno dulce · Wafflera",
        alimentacion: ["Sin soja"],
        tiempoMin: 30,
        tiempoTexto: "30 min",
        dificultadNivel: 1,
        dificultadTexto: "Sencilla",
        likesBase: 49,
        porcionesBase: 6,
        unidadPorciones: "waffles",
        descripcion: "Waffles dorados y crujientes por fuera bañados en salsa de chocolate amargo 70%, almendras fileteadas y fruta fresca.",
        imagen: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Waffles recién hechos acompañados de fresas y salsa de cacao.",
        alergenos: "Contiene gluten (harina de trigo) y frutos secos (almendra).",
        claveCocina: "Deja reposar la masa 10 minutos antes de cocinar para que el polvo de hornear active y queden más esponjosos.",
        ingredientes: [
            { cantidad: 250, unidad: "g", nombre: "de harina de trigo" },
            { cantidad: 50, unidad: "g", nombre: "de azúcar morena" },
            { cantidad: 1, unidad: "cdita", nombre: "de extracto de vainilla natural" },
            { cantidad: 1.5, unidad: "cditas", nombre: "de polvo para hornear" },
            { cantidad: 20, unidad: "g", nombre: "de aceite de girasol + extra para engrasar" },
            { cantidad: 300, unidad: "g", nombre: "de leche de almendras (para la masa)" },
            { cantidad: 120, unidad: "g", nombre: "de chocolate amargo 70% cacao en trozos" },
            { cantidad: 75, unidad: "g", nombre: "de leche de almendras (para la salsa)" },
            { cantidad: 30, unidad: "g", nombre: "de almendras fileteadas y frutas variadas" }
        ],
        pasos: [
            { titulo: "Prepara la masa", detalle: "Mezcla la harina, el azúcar morena, la vainilla, el polvo para hornear, el aceite de girasol y los 300 g de leche de almendras. Deja reposar 10 minutos." },
            { titulo: "Funde la salsa de chocolate", detalle: "Calienta el chocolate amargo picado junto con los 75 g de leche de almendras a fuego suave hasta obtener una salsa lisa y brillante." },
            { titulo: "Cocina en la wafflera", detalle: "Engrasa ligeramente la wafflera caliente, vierte un cucharón de masa y cocina hasta que estén dorados; pasa a una rejilla." },
            { titulo: "Emplata con fruta", detalle: "Sirve calientes bañados con la salsa de chocolate, almendras fileteadas y fruta fresca." }
        ]
    },
    {
        id: 7,
        titulo: "Ensalada de frutas y linaza",
        categoria: "Desayunos",
        subcategoria: "Desayuno fresco · Sin cocción",
        alimentacion: ["Sin gluten", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 29,
        porcionesBase: 2,
        unidadPorciones: "platos",
        descripcion: "Bowl frutal energético con plátano machacado, mezcla de semillas trituradas y frutas frescas de temporada con limón.",
        imagen: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Frutas frescas de temporada con semillas trituradas.",
        alergenos: "Contiene sésamo y frutos secos (nueces y almendras).",
        claveCocina: "Tritura las semillas justo antes de servir para aprovechar mejor sus ácidos grasos omega-3 y su aroma.",
        ingredientes: [
            { cantidad: 0.5, unidad: "pza", nombre: "de plátano maduro" },
            { cantidad: 2, unidad: "cdas", nombre: "de aceite de colza o vegetal suave" },
            { cantidad: 1, unidad: "cda", nombre: "de semillas de lino trituradas" },
            { cantidad: 1, unidad: "cda", nombre: "de sésamo triturado" },
            { cantidad: 1, unidad: "cda", nombre: "de mezcla de 3 semillas (nueces, calabaza y almendras)" },
            { cantidad: 0.5, unidad: "pza", nombre: "de limón exprimido" },
            { cantidad: 2, unidad: "tazas", nombre: "de frutas de temporada (pera, kiwi, mango, frutos rojos)" }
        ],
        pasos: [
            { titulo: "Crea la base cremosa", detalle: "Machaca el medio plátano con un tenedor en el fondo del tazón hasta obtener un puré." },
            { titulo: "Emulsiona con aceite y semillas", detalle: "Agrega el aceite, mezcla bien e incorpora el lino, el sésamo y las semillas trituradas." },
            { titulo: "Añade la fruta y el limón", detalle: "Incorpora los trozos de fruta de temporada y rocía con el jugo de medio limón antes de servir." }
        ]
    },
    {
        id: 8,
        titulo: "Hot cakes de avena sin plátano",
        categoria: "Desayunos",
        subcategoria: "Sartén · Sin azúcar refinada",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 44,
        porcionesBase: 6,
        unidadPorciones: "hot cakes",
        descripcion: "Hot cakes tiernos de harina de avena con vinagre de manzana y vainilla para lograr esponjosidad sin usar plátano ni huevo.",
        imagen: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Torre de hot cakes dorados de avena.",
        alergenos: "Puede contener trazas de gluten según la avena utilizada.",
        claveCocina: "La combinación de bicarbonato con vinagre de manzana crea burbujas al instante: voltea cada hot cake apenas aparezcan en la superficie.",
        ingredientes: [
            { cantidad: 1, unidad: "taza", nombre: "de harina de avena" },
            { cantidad: 1, unidad: "cdita", nombre: "de polvo de hornear" },
            { cantidad: 0.5, unidad: "cdita", nombre: "de bicarbonato de sodio" },
            { cantidad: 1, unidad: "pizca", nombre: "de sal" },
            { cantidad: 2, unidad: "cdas", nombre: "de monkfruit o endulzante" },
            { cantidad: 0.75, unidad: "taza", nombre: "de agua" },
            { cantidad: 1, unidad: "cdita", nombre: "de vinagre de manzana" },
            { cantidad: 1, unidad: "cdita", nombre: "de extracto de vainilla" }
        ],
        pasos: [
            { titulo: "Integra secos y húmedos", detalle: "Mezcla muy bien todos los ingredientes secos en un tazón y los húmedos en otro." },
            { titulo: "Une y reposa", detalle: "Vierte los húmedos sobre los secos, integra sin batir en exceso y deja reposar 3-5 minutos." },
            { titulo: "Dora en sartén", detalle: "Cocina en un sartén ligeramente engrasado a fuego medio; voltea cuando salgan burbujas y cocina 1 minuto más por el otro lado." },
            { titulo: "Acompaña", detalle: "Sirve con jarabe sabor maple sin azúcar y compota de frutas." }
        ]
    },
    {
        id: 9,
        titulo: "Chilaquiles rojos",
        categoria: "Desayunos",
        subcategoria: "Cocina mexicana · Salado",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 60,
        tiempoTexto: "60 min",
        dificultadNivel: 4,
        dificultadTexto: "Intermedia",
        likesBase: 72,
        porcionesBase: 4,
        unidadPorciones: "porciones",
        descripcion: "Totopos crujientes bañados en salsa tradicional de chile guajillo, chile de árbol, tomatillo y epazote con aguacate y frijoles.",
        imagen: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Chilaquiles rojos servidos con aguacate fresco y frijoles.",
        alergenos: "Libre de gluten (con totopos 100% maíz), soja y frutos secos.",
        claveCocina: "Sumerge los totopos solo unos segundos en la salsa caliente justo antes de emplatar para que conserven su textura crujiente.",
        ingredientes: [
            { cantidad: 4, unidad: "tazas", nombre: "de totopos de maíz" },
            { cantidad: 5, unidad: "pzas", nombre: "de chiles guajillos limpios" },
            { cantidad: 4, unidad: "pzas", nombre: "de chiles de árbol" },
            { cantidad: 4, unidad: "pzas", nombre: "de tomatillos medianos" },
            { cantidad: 3, unidad: "tazas", nombre: "de agua o caldo de verduras" },
            { cantidad: 2, unidad: "dientes", nombre: "de ajo + 1/4 de cebolla" },
            { cantidad: 1, unidad: "cdita", nombre: "de orégano + 1/2 cdita de comino" },
            { cantidad: 1, unidad: "ramito", nombre: "de epazote fresco" },
            { cantidad: 1, unidad: "pza", nombre: "de aguacate y frijoles de guarnición" }
        ],
        pasos: [
            { titulo: "Hierve chiles y tomatillos", detalle: "Limpia los chiles secos y hiérvelos con los chiles de árbol y tomatillos. Retira los tomatillos cuando estén cocidos y deja hidratar bien los chiles." },
            { titulo: "Licúa ambas bases", detalle: "Licúa los chiles con 1 taza de agua de cocción y caldo de verduras; cuela y reserva. Aparte licúa los tomatillos con 1/2 taza de agua, ajo, orégano y comino." },
            { titulo: "Sazona la salsa", detalle: "Sofríe la salsa verde en una olla con un chorrito de aceite 7-10 minutos, agrega la salsa roja colada y sal, hierve 8 minutos y añade el epazote por 5 minutos más." },
            { titulo: "Baña y monta", detalle: "Incorpora los totopos sin romperlos, retíralos en cuanto se impregnen y sirve con más salsa, cebolla picada, aguacate y frijoles." }
        ]
    },
    {
        id: 10,
        titulo: "Sándwich verde integral",
        categoria: "Desayunos",
        subcategoria: "Almuerzo rápido · Fresco",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 5,
        tiempoTexto: "5 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 31,
        porcionesBase: 1,
        unidadPorciones: "sándwich",
        descripcion: "Sándwich fresco y crujiente de pan integral con aguacate machacado, germinados de alfalfa, vegetales y un toque de jalapeño.",
        imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Sándwich integral relleno de vegetales crujientes y aguacate.",
        alergenos: "Contiene gluten (pan integral).",
        claveCocina: "Sazona los vegetales con limón y una pizca de sal justo antes de cerrar el pan para que no humedezcan la miga.",
        ingredientes: [
            { cantidad: 2, unidad: "rebanadas", nombre: "de pan integral" },
            { cantidad: 0.25, unidad: "pza", nombre: "de aguacate maduro" },
            { cantidad: 1, unidad: "cdita", nombre: "de mostaza amarilla" },
            { cantidad: 1, unidad: "puño", nombre: "de germinados de alfalfa" },
            { cantidad: 3, unidad: "hojas", nombre: "de espinaca + 1 hoja de radicchio en tiras" },
            { cantidad: 3, unidad: "rebanadas", nombre: "de jitomate + tiras de pimiento verde" },
            { cantidad: 1, unidad: "puño", nombre: "de zanahoria rallada + aros de cebolla" },
            { cantidad: 2, unidad: "rajas", nombre: "de chile jalapeño en escabeche" },
            { cantidad: 0.5, unidad: "pza", nombre: "de limón y sal al gusto" }
        ],
        pasos: [
            { titulo: "Corta los vegetales", detalle: "Lava bien todos los vegetales y corta en tiras finas la espinaca y el radicchio." },
            { titulo: "Unta el pan", detalle: "Unta una rebanada de pan integral con la mostaza amarilla y la otra con el aguacate machacado." },
            { titulo: "Arma y sazona", detalle: "Acomoda el jitomate, zanahoria rallada, pimiento, cebolla, hojas verdes, germinados y jalapeño. Sazona con jugo de limón y sal, cierra y disfruta." }
        ]
    },
    /* --- 5 RECETAS DE ALMUERZOS --- */
    {
        id: 11,
        titulo: "Bowl de quinoa, garbanzos especiados y aguacate",
        categoria: "Almuerzos",
        subcategoria: "Plato completo · Tazón cálido",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 25,
        tiempoTexto: "25 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 53,
        porcionesBase: 2,
        unidadPorciones: "tazónes",
        descripcion: "Tazón nutritivo con quinoa esponjosa, garbanzos tostados con comino y pimentón, pepino fresco, aguacate y aderezo de limón.",
        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Bowl vegetal con quinoa, garbanzos especiados y aguacate fresco.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Enjuaga bien la quinoa antes de cocerla para quitar su amargor natural y seca los garbanzos con papel absorbente antes de dorarlos.",
        ingredientes: [
            { cantidad: 1, unidad: "taza", nombre: "de quinoa cocida" },
            { cantidad: 1, unidad: "taza", nombre: "de garbanzos cocidos y escurridos" },
            { cantidad: 1, unidad: "pza", nombre: "de aguacate en láminas" },
            { cantidad: 0.5, unidad: "pza", nombre: "de pepino en cubos" },
            { cantidad: 1, unidad: "cdita", nombre: "de pimentón dulce + 0.5 cdita de comino" },
            { cantidad: 1.5, unidad: "cdas", nombre: "de aceite de oliva virgen extra" },
            { cantidad: 1, unidad: "pza", nombre: "de limón exprimido + sal al gusto" }
        ],
        pasos: [
            { titulo: "Dora los garbanzos", detalle: "Saltea los garbanzos en un sartén con la mitad del aceite, el pimentón, el comino y sal durante 6-8 minutos hasta que queden crujientes." },
            { titulo: "Prepara la base", detalle: "Reparte la quinoa tibia en dos tazones junto con el pepino en cubos y las láminas de aguacate." },
            { titulo: "Aliña y sirve", detalle: "Coloca los garbanzos especiados encima y adereza con el resto del aceite de oliva y el jugo de limón." }
        ]
    },
    {
        id: 12,
        titulo: "Tacos de lentejas guisadas con pico de gallo",
        categoria: "Almuerzos",
        subcategoria: "Cocina mexicana · Tortillas de maíz",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 30,
        tiempoTexto: "30 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 61,
        porcionesBase: 4,
        unidadPorciones: "porciones",
        descripcion: "Tacos sabrosos rellenos de lentejas guisadas con jitomate, cebolla, ajo y especias, coronados con pico de gallo fresco y cilantro.",
        imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Tacos vegetales de lentejas con pico de gallo y cilantro.",
        alergenos: "Libre de gluten (con tortillas 100% maíz), soja y frutos secos.",
        claveCocina: "Aplasta ligeramente un tercio de las lentejas al final del guiso para que la salsa espese y se adhiera mejor a la tortilla.",
        ingredientes: [
            { cantidad: 1.5, unidad: "tazas", nombre: "de lentejas cocidas escurridas" },
            { cantidad: 8, unidad: "pzas", nombre: "de tortillas de maíz" },
            { cantidad: 2, unidad: "pzas", nombre: "de jitomates picados" },
            { cantidad: 0.5, unidad: "pza", nombre: "de cebolla blanca finamente picada" },
            { cantidad: 2, unidad: "dientes", nombre: "de ajo picados" },
            { cantidad: 1, unidad: "cdita", nombre: "de comino molido + 1 cda de aceite vegetal" },
            { cantidad: 0.5, unidad: "taza", nombre: "de cilantro fresco picado + 1 limón" }
        ],
        pasos: [
            { titulo: "Sofríe el guiso de lentejas", detalle: "Calienta el aceite en un sartén y sofríe el ajo y la mitad de la cebolla 2 minutos. Agrega un jitomate picado, el comino y las lentejas; cocina 8 minutos sazonando con sal." },
            { titulo: "Prepara el pico de gallo", detalle: "Mezcla el jitomate restante, la cebolla sobrante, el cilantro, sal y jugo de limón en un tazón." },
            { titulo: "Calienta tortillas y arma", detalle: "Calienta las tortillas de maíz en comal, sírvelas con las lentejas guisadas y corona con pico de gallo fresco." }
        ]
    },
    {
        id: 13,
        titulo: "Pasta cremosa con pesto de albahaca y tomates cherry",
        categoria: "Almuerzos",
        subcategoria: "Pasta · Sartén",
        alimentacion: ["Sin soja"],
        tiempoMin: 20,
        tiempoTexto: "20 min",
        dificultadNivel: 4,
        dificultadTexto: "Sencilla",
        likesBase: 56,
        porcionesBase: 3,
        unidadPorciones: "platos",
        descripcion: "Pasta al dente envuelta en un pesto aromático de albahaca fresca, piñones o almendras y aceite de oliva con tomates cherry salteados.",
        imagen: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Pasta con pesto verde de albahaca y tomates cherry asados.",
        alergenos: "Contiene gluten (pasta de trigo) y frutos secos (piñones o almendras).",
        claveCocina: "Reserva media taza del agua de cocción de la pasta para emulsionar el pesto y lograr una cobertura brillante sin resecar.",
        ingredientes: [
            { cantidad: 270, unidad: "g", nombre: "de pasta corta o larga" },
            { cantidad: 1.5, unidad: "tazas", nombre: "de hojas de albahaca fresca" },
            { cantidad: 3, unidad: "cdas", nombre: "de piñones o almendras tostadas" },
            { cantidad: 1, unidad: "diente", nombre: "de ajo" },
            { cantidad: 0.33, unidad: "taza", nombre: "de aceite de oliva virgen extra" },
            { cantidad: 1.5, unidad: "tazas", nombre: "de tomates cherry partidos a la mitad" },
            { cantidad: 0.5, unidad: "taza", nombre: "de agua de cocción de la pasta" }
        ],
        pasos: [
            { titulo: "Cuece la pasta", detalle: "Hierve la pasta en agua con sal hasta que esté al dente; reserva media taza del agua de cocción y escurre." },
            { titulo: "Muele el pesto", detalle: "Tritura la albahaca, los frutos secos, el ajo, el aceite de oliva y una pizca de sal hasta obtener una salsa verde homogénea." },
            { titulo: "Saltea y mezcla", detalle: "Saltea los tomates cherry 4 minutos en sartén, incorpora la pasta, el pesto y un chorrito del agua reservada, y mezcla a fuego suave." }
        ]
    },
    {
        id: 14,
        titulo: "Curry suave de garbanzos y espinacas con arroz",
        categoria: "Almuerzos",
        subcategoria: "Guiso especiado · Arroz",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 30,
        tiempoTexto: "30 min",
        dificultadNivel: 3,
        dificultadTexto: "Intermedia",
        likesBase: 67,
        porcionesBase: 4,
        unidadPorciones: "porciones",
        descripcion: "Guiso aromático de garbanzos y espinacas frescas en leche de coco con curry suave, jengibre y arroz blanco o integral.",
        imagen: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Curry vegetal de garbanzos y espinacas servido con arroz.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Tuesta el curry en polvo 30 segundos con la cebolla y el ajo antes de añadir la leche de coco para intensificar su aroma.",
        ingredientes: [
            { cantidad: 2, unidad: "tazas", nombre: "de garbanzos cocidos" },
            { cantidad: 1, unidad: "taza", nombre: "de arroz cocido para acompañar" },
            { cantidad: 250, unidad: "ml", nombre: "de leche de coco" },
            { cantidad: 2, unidad: "tazas", nombre: "de espinacas frescas" },
            { cantidad: 0.5, unidad: "pza", nombre: "de cebolla picada + 2 dientes de ajo" },
            { cantidad: 1.5, unidad: "cdas", nombre: "de curry suave en polvo" },
            { cantidad: 1, unidad: "cda", nombre: "de aceite vegetal + sal al gusto" }
        ],
        pasos: [
            { titulo: "Sofríe base y especias", detalle: "Acitrona la cebolla y el ajo con el aceite por 3 minutos; añade el curry en polvo y remueve 30 segundos." },
            { titulo: "Cocina a fuego lento", detalle: "Incorpora los garbanzos y la leche de coco, salpimenta y cocina a fuego medio 10 minutos hasta que espese ligeramente." },
            { titulo: "Integra espinacas y sirve", detalle: "Añade las espinacas frescas hasta que reduzcan en 2 minutos y sirve acompañado del arroz." }
        ]
    },
    {
        id: 15,
        titulo: "Wrap mediterráneo de hummus y vegetales crocantes",
        categoria: "Almuerzos",
        subcategoria: "Enrollado · Sin cocción",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 36,
        porcionesBase: 2,
        unidadPorciones: "wraps",
        descripcion: "Tortillas suaves untadas con hummus cremoso, zanahoria rallada, pepino, pimiento morrón, hojas verdes y aceitunas.",
        imagen: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Wraps vegetales rellenos de hummus y verduras crujientes.",
        alergenos: "Contiene gluten (tortilla de trigo) y sésamo (tahini del hummus).",
        claveCocina: "Seca bien las tiras de pepino y pimiento antes de enrollar para que el wrap no se humedezca ni se rompa.",
        ingredientes: [
            { cantidad: 2, unidad: "pzas", nombre: "de tortillas grandes de trigo" },
            { cantidad: 0.5, unidad: "taza", nombre: "de hummus cremoso" },
            { cantidad: 1, unidad: "pza", nombre: "de zanahoria mediana rallada" },
            { cantidad: 0.5, unidad: "pza", nombre: "de pepino en bastones finos" },
            { cantidad: 0.5, unidad: "pza", nombre: "de pimiento morrón en tiras" },
            { cantidad: 1.5, unidad: "tazas", nombre: "de lechuga o arúgula fresca" },
            { cantidad: 6, unidad: "pzas", nombre: "de aceitunas negras rebanadas" }
        ],
        pasos: [
            { titulo: "Unta el hummus", detalle: "Extiende una capa generosa de hummus sobre cada tortilla dejando un pequeño borde libre." },
            { titulo: "Distribuye los vegetales", detalle: "Acomoda las hojas verdes, la zanahoria rallada, los bastones de pepino, las tiras de pimiento y las aceitunas." },
            { titulo: "Enrolla y corta", detalle: "Dobla los lados hacia adentro, enrolla con firmeza, corta por la mitad y sirve." }
        ]
    },
    /* --- 5 RECETAS DE CENAS --- */
    {
        id: 16,
        titulo: "Crema tibia de calabaza y jengibre",
        categoria: "Cenas",
        subcategoria: "Cena reconfortante · Cuchara",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 25,
        tiempoTexto: "25 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 47,
        porcionesBase: 3,
        unidadPorciones: "platos",
        descripcion: "Crema suave y reconfortante de calabaza con un toque cálido de jengibre fresco, cebolla y semillas de calabaza tostadas.",
        imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Crema de calabaza con jengibre y semillas tostadas.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "No pongas demasiado caldo al principio; añade poco a poco hasta lograr la espesura de crema que prefieras para cenar.",
        ingredientes: [
            { cantidad: 500, unidad: "g", nombre: "de calabaza pelada y en cubos" },
            { cantidad: 2, unidad: "tazas", nombre: "de caldo de verduras" },
            { cantidad: 0.5, unidad: "pza", nombre: "de cebolla picada + 1 diente de ajo" },
            { cantidad: 1, unidad: "cdita", nombre: "de jengibre fresco rallado" },
            { cantidad: 1, unidad: "cda", nombre: "de aceite de oliva" },
            { cantidad: 2, unidad: "cdas", nombre: "de semillas de calabaza para decorar" }
        ],
        pasos: [
            { titulo: "Sofríe aromáticos", detalle: "Sofríe la cebolla, el ajo y el jengibre rallado en el aceite de oliva durante 3 minutos a fuego medio." },
            { titulo: "Cuece la calabaza", detalle: "Agrega los cubos de calabaza y el caldo de verduras, tapa y cocina 15 minutos hasta que la calabaza esté muy tierna." },
            { titulo: "Licúa y sirve", detalle: "Tritura hasta obtener una crema sedosa, rectifica la sal y sírvela tibia con semillas de calabaza encima." }
        ]
    },
    {
        id: 17,
        titulo: "Salteado de champiñones y brócoli con ajo",
        categoria: "Cenas",
        subcategoria: "Cena ligera · Sartén",
        alimentacion: ["Sin gluten", "Sin frutos secos"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 42,
        porcionesBase: 2,
        unidadPorciones: "porciones",
        descripcion: "Salteado rápido y sabroso de floretes de brócoli tiernos y champiñones laminados al ajo con un toque de salsa de soja o tamari.",
        imagen: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Salteado de brócoli y champiñones al ajo con semillas de ajonjolí.",
        alergenos: "Contiene soja (salsa de soja o tamari). Libre de gluten si usas tamari.",
        claveCocina: "Cocina a fuego medio-alto sin mover en exceso los champiñones al inicio para que doren en lugar de soltar demasiada agua.",
        ingredientes: [
            { cantidad: 2, unidad: "tazas", nombre: "de floretes de brócoli" },
            { cantidad: 200, unidad: "g", nombre: "de champiñones laminados" },
            { cantidad: 3, unidad: "dientes", nombre: "de ajo fileteados" },
            { cantidad: 1.5, unidad: "cdas", nombre: "de salsa de soja o tamari" },
            { cantidad: 1, unidad: "cda", nombre: "de aceite de sésamo o vegetal" },
            { cantidad: 1, unidad: "cdita", nombre: "de semillas de ajonjolí" }
        ],
        pasos: [
            { titulo: "Saltea el brócoli", detalle: "Calienta el aceite en un sartén y saltea el brócoli con 2 cucharadas de agua tapado 3 minutos para que quede tierno pero firme." },
            { titulo: "Dora los champiñones y el ajo", detalle: "Destapa, añade los champiñones laminados y cocina 4 minutos; incorpora el ajo fileteado y saltea 1 minuto más sin que se queme." },
            { titulo: "Sazona y sirve", detalle: "Vierte la salsa de soja o tamari, mezcla bien, espolvorea ajonjolí y sirve al momento." }
        ]
    },
    {
        id: 18,
        titulo: "Quesadillas vegetales con champiñones y espinaca",
        categoria: "Cenas",
        subcategoria: "Comal · Rápida",
        alimentacion: ["Sin frutos secos"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 54,
        porcionesBase: 3,
        unidadPorciones: "quesadillas",
        descripcion: "Quesadillas doradas al comal con champiñones guisados, espinacas frescas y queso vegano fundido, acompañadas de salsa verde.",
        imagen: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Quesadillas doradas con relleno vegetal y salsa verde.",
        alergenos: "Puede contener gluten (según la tortilla) y soja (según el queso vegano).",
        claveCocina: "Cocina a fuego medio-bajo para que el queso vegano se funda bien por dentro antes de que la tortilla se dore de más.",
        ingredientes: [
            { cantidad: 3, unidad: "pzas", nombre: "de tortillas grandes de harina o maíz" },
            { cantidad: 150, unidad: "g", nombre: "de champiñones picados" },
            { cantidad: 1.5, unidad: "tazas", nombre: "de espinacas frescas picadas" },
            { cantidad: 0.75, unidad: "taza", nombre: "de queso vegano rallado para fundir" },
            { cantidad: 1, unidad: "cdita", nombre: "de aceite vegetal + sal al gusto" },
            { cantidad: 0.5, unidad: "taza", nombre: "de salsa verde para acompañar" }
        ],
        pasos: [
            { titulo: "Guisa el relleno", detalle: "Saltea los champiñones picados con una pizca de sal 5 minutos hasta que evaporen su líquido; agrega las espinacas y mezcla 1 minuto." },
            { titulo: "Rellena las tortillas", detalle: "Coloca queso vegano rallado y el guiso de champiñones y espinacas sobre la mitad de cada tortilla y dóblala." },
            { titulo: "Dora en el comal", detalle: "Calienta en comal o sartén con un toque de aceite unos 2-3 minutos por lado hasta dorar y fundir, y sirve con salsa verde." }
        ]
    },
    {
        id: 19,
        titulo: "Sopa minestrone con alubias y fideos",
        categoria: "Cenas",
        subcategoria: "Sopa de verduras · Hogar",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 35,
        tiempoTexto: "35 min",
        dificultadNivel: 3,
        dificultadTexto: "Intermedia",
        likesBase: 41,
        porcionesBase: 4,
        unidadPorciones: "platos",
        descripcion: "Sopa italiana casera con zanahoria, calabacín, jitomate, alubias blancas y pasta corta en caldo aromático con hierbas.",
        imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Sopa minestrone con verduras, alubias y pasta.",
        alergenos: "Contiene gluten (pasta corta). Libre de soja y frutos secos.",
        claveCocina: "Incorpora la pasta en los últimos 8 a 10 minutos de cocción para que no se pase ni absorba todo el caldo.",
        ingredientes: [
            { cantidad: 1, unidad: "taza", nombre: "de alubias blancas cocidas" },
            { cantidad: 0.75, unidad: "taza", nombre: "de pasta corta pequeña (codito o concha)" },
            { cantidad: 1, unidad: "pza", nombre: "de zanahoria en cubos + 1 calabacín en cubos" },
            { cantidad: 2, unidad: "pzas", nombre: "de jitomates triturados" },
            { cantidad: 4, unidad: "tazas", nombre: "de caldo de verduras" },
            { cantidad: 1, unidad: "cdita", nombre: "de orégano seco + 1 cda de aceite de oliva" }
        ],
        pasos: [
            { titulo: "Sofríe verduras y jitomate", detalle: "En una olla con aceite de oliva sofríe la zanahoria y la cebolla picada 4 minutos; añade el jitomate triturado y el orégano y cocina 3 minutos más." },
            { titulo: "Añade caldo y calabacín", detalle: "Vierte el caldo de verduras, agrega el calabacín y las alubias blancas, y lleva a hervor suave 10 minutos." },
            { titulo: "Cuece la pasta y sirve", detalle: "Incorpora la pasta corta y cocina hasta que esté tierna; rectifica la sal y sirve caliente." }
        ]
    },
    {
        id: 20,
        titulo: "Tostadas de aguacate, frijoles negros y rábano",
        categoria: "Cenas",
        subcategoria: "Cena rápida · Crujiente",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 59,
        porcionesBase: 2,
        unidadPorciones: "porciones",
        descripcion: "Tostadas crujientes de maíz con frijoles negros refritos caseros, aguacate machacado con limón, rábano fresco y cilantro.",
        imagen: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Tostadas con frijoles negros, aguacate y rábanos en rodajas.",
        alergenos: "Libre de gluten (con tostadas 100% maíz), soja y frutos secos.",
        claveCocina: "Unta primero una capa ligera de frijoles negros y encima el aguacate para que las tostadas se mantengan firmes más tiempo.",
        ingredientes: [
            { cantidad: 4, unidad: "pzas", nombre: "de tostadas horneadas de maíz" },
            { cantidad: 1, unidad: "taza", nombre: "de frijoles negros cocidos y machacados" },
            { cantidad: 1, unidad: "pza", nombre: "de aguacate maduro" },
            { cantidad: 3, unidad: "pzas", nombre: "de rábanos en rodajas finas" },
            { cantidad: 0.5, unidad: "pza", nombre: "de limón exprimido + sal al gusto" },
            { cantidad: 0.25, unidad: "taza", nombre: "de cilantro fresco picado" }
        ],
        pasos: [
            { titulo: "Prepara los frijoles y el aguacate", detalle: "Calienta los frijoles machacados con una pizca de sal; por separado aplasta el aguacate con jugo de limón y sal." },
            { titulo: "Unta las tostadas", detalle: "Distribuye los frijoles negros sobre las tostadas y agrega encima una capa de aguacate sazonado." },
            { titulo: "Decora y sirve", detalle: "Termina con rodajas finas de rábano y cilantro fresco antes de llevar a la mesa." }
        ]
    },
    /* --- 5 BEBIDAS VERDES VEGANAS --- */
    {
        id: 21,
        titulo: "Matcha latte helado con bebida vegetal",
        categoria: "Bebidas",
        subcategoria: "Bebida verde · Fría o tibia",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 5,
        tiempoTexto: "5 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 68,
        porcionesBase: 1,
        unidadPorciones: "vasos",
        descripcion: "Matcha ceremonial batido con agua tibia sobre hielos y bebida vegetal de avena o coco, con un toque dulce de agave.",
        imagen: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Matcha latte verde sobre hielos con bebida vegetal.",
        alergenos: "Libre de gluten, soja y frutos secos (usando bebida de avena o coco).",
        claveCocina: "Tamiza el polvo de matcha antes de batirlo para evitar grumos y usa agua a unos 75-80 °C (nunca hirviendo) para no amargarlo.",
        ingredientes: [
            { cantidad: 1.5, unidad: "cditas", nombre: "de matcha en polvo" },
            { cantidad: 60, unidad: "ml", nombre: "de agua tibia (sin hervir)" },
            { cantidad: 200, unidad: "ml", nombre: "de bebida vegetal fría (avena o coco)" },
            { cantidad: 1, unidad: "cda", nombre: "de jarabe de agave o endulzante líquido" },
            { cantidad: 4, unidad: "pzas", nombre: "de cubos de hielo" }
        ],
        pasos: [
            { titulo: "Disuelve el matcha", detalle: "Tamiza el matcha en una taza, añade el agua tibia y bate en zig-zag con batidor de bambú o espumador hasta lograr espuma fina." },
            { titulo: "Prepara el vaso", detalle: "Coloca los hielos y el jarabe de agave en un vaso y vierte la bebida vegetal." },
            { titulo: "Integra y sirve", detalle: "Añade el matcha batido encima, remueve suavemente y disfruta bien frío." }
        ]
    },
    {
        id: 22,
        titulo: "Smoothie verde de espinaca, piña y chía",
        categoria: "Bebidas",
        subcategoria: "Batido verde · Refrescante",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 5,
        tiempoTexto: "5 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 46,
        porcionesBase: 2,
        unidadPorciones: "vasos",
        descripcion: "Batido verde tropical y cremoso con espinaca fresca, piña dulce, plátano congelado, semillas de chía y agua de coco.",
        imagen: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Smoothie verde cremoso de espinaca y piña con semillas de chía.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Licúa primero las espinacas con el agua de coco y la piña antes de añadir el plátano congelado para lograr una textura uniforme.",
        ingredientes: [
            { cantidad: 1.5, unidad: "tazas", nombre: "de espinacas frescas" },
            { cantidad: 1, unidad: "taza", nombre: "de piña natural en trozos" },
            { cantidad: 1, unidad: "pza", nombre: "de plátano maduro congelado" },
            { cantidad: 1, unidad: "taza", nombre: "de agua de coco o bebida vegetal" },
            { cantidad: 1, unidad: "cda", nombre: "de semillas de chía" }
        ],
        pasos: [
            { titulo: "Licúa base verde y líquido", detalle: "Coloca las espinacas, la piña y el agua de coco en la licuadora y mezcla hasta integrar." },
            { titulo: "Añade plátano y chía", detalle: "Incorpora el plátano congelado y las semillas de chía y licúa 30-45 segundos hasta que quede cremoso." },
            { titulo: "Sirve al momento", detalle: "Reparte en dos vasos y espolvorea unas semillas de chía extras si lo deseas." }
        ]
    },
    {
        id: 23,
        titulo: "Jugo verde detox de pepino, apio, manzana y limón",
        categoria: "Bebidas",
        subcategoria: "Jugo prensado o licuado · Ligero",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 39,
        porcionesBase: 2,
        unidadPorciones: "vasos",
        descripcion: "Bebida verde cítrica y muy hidratante con pepino fresco, apio, manzana verde, limón y un toque de jengibre.",
        imagen: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Jugo verde fresco con pepino, manzana y limón.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Conserva la cáscara del pepino y de la manzana (bien lavados) para aportar más color verde intenso y fibra natural.",
        ingredientes: [
            { cantidad: 1, unidad: "pza", nombre: "de pepino mediano en trozos" },
            { cantidad: 2, unidad: "tallos", nombre: "de apio picados" },
            { cantidad: 1, unidad: "pza", nombre: "de manzana verde en trozos" },
            { cantidad: 1, unidad: "pza", nombre: "de limón exprimido" },
            { cantidad: 0.5, unidad: "taza", nombre: "de agua fría + 0.5 cdita de jengibre rallado" }
        ],
        pasos: [
            { titulo: "Prepara los ingredientes", detalle: "Lava bien el pepino, el apio y la manzana verde y córtalos en trozos fáciles de licuar." },
            { titulo: "Licúa con agua y jengibre", detalle: "Procesa todo junto con el agua fría y el jengibre hasta obtener un líquido homogéneo." },
            { titulo: "Cuela y añade limón", detalle: "Pasa por colador fino si prefieres textura más ligera, agrega el jugo de limón, mezcla y sirve." }
        ]
    },
    {
        id: 24,
        titulo: "Agua fresca de pepino, menta y limón",
        categoria: "Bebidas",
        subcategoria: "Agua fresca · Hidratación",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 52,
        porcionesBase: 4,
        unidadPorciones: "vasos",
        descripcion: "Agua fresca cristalina de tono verde suave con pepino, hojas de menta fresca, jugo de limón y endulzante al gusto.",
        imagen: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Agua fresca verde con pepino, limón y hojas de menta.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "No licúes las hojas de menta durante demasiado tiempo para que no amarguen; incorpóralas al final o en infusión fría.",
        ingredientes: [
            { cantidad: 1.5, unidad: "pzas", nombre: "de pepinos en trozos" },
            { cantidad: 4, unidad: "tazas", nombre: "de agua fría" },
            { cantidad: 2, unidad: "cdas", nombre: "de jugo de limón fresco" },
            { cantidad: 12, unidad: "hojas", nombre: "de menta fresca" },
            { cantidad: 2, unidad: "cdas", nombre: "de endulzante al gusto + hielo" }
        ],
        pasos: [
            { titulo: "Licúa pepino y agua", detalle: "Licúa los trozos de pepino con dos tazas de agua y el endulzante hasta que quede bien triturado." },
            { titulo: "Cuela y completa el agua", detalle: "Cuela en una jarra, añade el resto del agua fría, el jugo de limón y mezcla." },
            { titulo: "Aromatiza con menta y hielos", detalle: "Agrega las hojas de menta fresca y abundante hielo justo antes de servir." }
        ]
    },
    {
        id: 25,
        titulo: "Batido cremoso de aguacate y menta",
        categoria: "Bebidas",
        subcategoria: "Bebida especial · Postre líquido",
        alimentacion: ["Sin gluten", "Sin soja"],
        tiempoMin: 5,
        tiempoTexto: "5 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 43,
        porcionesBase: 2,
        unidadPorciones: "vasos",
        descripcion: "Bebida especial espesa y cremosa con aguacate, bebida de almendra, menta fresca, vainilla y endulzante suave.",
        imagen: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Batido verde cremoso con menta fresca y bebida vegetal.",
        alergenos: "Contiene frutos secos (bebida de almendra).",
        claveCocina: "Usa aguacate bien frío del refrigerador para que el batido quede espeso y refrescante sin tener que diluirlo con demasiado hielo.",
        ingredientes: [
            { cantidad: 0.5, unidad: "pza", nombre: "de aguacate maduro" },
            { cantidad: 1.5, unidad: "tazas", nombre: "de bebida de almendra fría" },
            { cantidad: 8, unidad: "hojas", nombre: "de menta fresca" },
            { cantidad: 1.5, unidad: "cdas", nombre: "de jarabe de agave o miel de maple" },
            { cantidad: 1, unidad: "cdita", nombre: "de extracto de vainilla" }
        ],
        pasos: [
            { titulo: "Licúa hasta cremar", detalle: "Pon en la licuadora el aguacate, la bebida de almendra, las hojas de menta, el jarabe de agave y la vainilla." },
            { titulo: "Procesa a velocidad media-alta", detalle: "Bate durante 1 minuto hasta conseguir una bebida verde tersa y espumosa." },
            { titulo: "Sirve bien frío", detalle: "Vierte en dos vasos y decora con una hojita de menta fresca." }
        ]
    },
    /* --- 25 RECETAS NUEVAS (ID 26 AL 50) --- */
    {
        id: 26,
        titulo: "Budín de chía con mango y coco",
        categoria: "Desayunos",
        subcategoria: "Desayuno frío · Sin cocción",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min + 2 h frío",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 48,
        porcionesBase: 2,
        unidadPorciones: "vasos",
        descripcion: "Budín cremoso de semillas de chía hidratadas en leche de coco con vainilla, coronado con mango fresco y coco rallado.",
        imagen: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Budín de chía cremoso con trozos de mango fresco.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Revuelve bien a los 10 minutos de haber mezclado para evitar que las semillas de chía se apelmacen en el fondo.",
        ingredientes: [
            { cantidad: 4, unidad: "cdas", nombre: "de semillas de chía" },
            { cantidad: 1, unidad: "taza", nombre: "de leche de coco" },
            { cantidad: 1, unidad: "cda", nombre: "de jarabe de agave" },
            { cantidad: 0.5, unidad: "cdita", nombre: "de extracto de vainilla" },
            { cantidad: 1, unidad: "taza", nombre: "de mango maduro en cubos" }
        ],
        pasos: [
            { titulo: "Mezcla la base", detalle: "Combina en un tazón la leche de coco, el jarabe de agave, la vainilla y las semillas de chía." },
            { titulo: "Refrigera hasta espesar", detalle: "Deja reposar 10 minutos, remueve de nuevo y refrigera al menos 2 horas hasta lograr consistencia de budín." },
            { titulo: "Sirve con mango", detalle: "Reparte en vasos y corona con los cubos de mango fresco." }
        ]
    },
    {
        id: 27,
        titulo: "Tostadas francesas de avena y canela",
        categoria: "Desayunos",
        subcategoria: "Sartén · Clásico dulce",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 41,
        porcionesBase: 3,
        unidadPorciones: "rebanadas",
        descripcion: "Rebanadas de pan doradas en sartén con mezcla aromática de bebida vegetal, harina de avena, canela y vainilla.",
        imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Tostadas francesas doradas con canela y fruta fresca.",
        alergenos: "Contiene gluten (pan).",
        claveCocina: "Pasa el pan por la mezcla sin remojarlo demasiado para que no se deshaga al pasarlo a la sartén.",
        ingredientes: [
            { cantidad: 3, unidad: "rebanadas", nombre: "de pan grueso" },
            { cantidad: 0.5, unidad: "taza", nombre: "de bebida de avena" },
            { cantidad: 1, unidad: "cda", nombre: "de harina de avena" },
            { cantidad: 1, unidad: "cdita", nombre: "de canela molida + 0.5 cdita de vainilla" },
            { cantidad: 1, unidad: "cda", nombre: "de margarina vegetal para dorar" }
        ],
        pasos: [
            { titulo: "Prepara el batido", detalle: "Mezcla la bebida de avena, la harina de avena, la canela y la vainilla en un plato hondo." },
            { titulo: "Remoja brevemente", detalle: "Sumerge cada rebanada de pan unos segundos por ambos lados hasta que absorba líquido sin romperse." },
            { titulo: "Dora y sirve", detalle: "Cocina en sartén con margarina a fuego medio 2-3 minutos por lado hasta dorar." }
        ]
    },
    {
        id: 28,
        titulo: "Bowl salado de tofu revuelto con cúrcuma",
        categoria: "Desayunos",
        subcategoria: "Sartén · Proteína vegetal",
        alimentacion: ["Sin gluten", "Sin frutos secos"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 55,
        porcionesBase: 2,
        unidadPorciones: "porciones",
        descripcion: "Tofu firme desmenuzado y sazonado con cúrcuma, ajo en polvo, espinacas frescas y jitomate cherry para un desayuno salado.",
        imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Tofu revuelto dorado con cúrcuma y verduras.",
        alergenos: "Contiene soja (tofu).",
        claveCocina: "Presiona el tofu con un paño limpio unos minutos antes de desmenuzarlo para retirar el exceso de agua y que dore mejor.",
        ingredientes: [
            { cantidad: 250, unidad: "g", nombre: "de tofu firme escurrido" },
            { cantidad: 0.5, unidad: "cdita", nombre: "de cúrcuma en polvo + pizca de sal" },
            { cantidad: 1, unidad: "taza", nombre: "de espinacas frescas" },
            { cantidad: 0.5, unidad: "taza", nombre: "de jitomates cherry partidos" },
            { cantidad: 1, unidad: "cda", nombre: "de aceite de oliva" }
        ],
        pasos: [
            { titulo: "Desmenuza y sazona", detalle: "Desmorona el tofu con las manos y mézclalo con la cúrcuma, sal y ajo en polvo." },
            { titulo: "Saltea en sartén", detalle: "Calienta el aceite y cocina el tofu 6 minutos moviendo hasta que tome color dorado." },
            { titulo: "Integra vegetales", detalle: "Añade los jitomates cherry y las espinacas, cocina 2 minutos más y sirve." }
        ]
    },
    {
        id: 29,
        titulo: "Avena cocida con manzana, nuez y canela",
        categoria: "Desayunos",
        subcategoria: "Desayuno caliente · Olla",
        alimentacion: ["Sin soja"],
        tiempoMin: 12,
        tiempoTexto: "12 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 37,
        porcionesBase: 2,
        unidadPorciones: "tazones",
        descripcion: "Avena cremosa cocinada con cubos de manzana, canela en polvo y nueces picadas para empezar el día con energía.",
        imagen: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Avena caliente con trozos de manzana y nueces.",
        alergenos: "Contiene frutos secos (nueces).",
        claveCocina: "Cocina la avena a fuego suave removiendo de vez en cuando para que espese de forma pareja sin pegarse.",
        ingredientes: [
            { cantidad: 1, unidad: "taza", nombre: "de copos de avena" },
            { cantidad: 2, unidad: "tazas", nombre: "de agua o bebida vegetal" },
            { cantidad: 1, unidad: "pza", nombre: "de manzana en cubos pequeños" },
            { cantidad: 0.5, unidad: "cdita", nombre: "de canela molida" },
            { cantidad: 3, unidad: "cdas", nombre: "de nueces picadas" }
        ],
        pasos: [
            { titulo: "Hierve base y manzana", detalle: "Lleva a hervor suave el líquido con la manzana en cubos y la canela." },
            { titulo: "Incorpora la avena", detalle: "Agrega los copos de avena y cocina 6-7 minutos removiendo hasta que espese." },
            { titulo: "Sirve con nueces", detalle: "Reparte en tazones y espolvorea las nueces picadas encima." }
        ]
    },
    {
        id: 30,
        titulo: "Molletes integrales con frijoles y pico de gallo",
        categoria: "Desayunos",
        subcategoria: "Horno o comal · Clásico",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 46,
        porcionesBase: 2,
        unidadPorciones: "porciones",
        descripcion: "Pan bolillo o integral tostado con frijoles negros refritos, queso vegano gratinado y pico de gallo fresco encima.",
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Molletes dorados con frijoles y salsa fresca.",
        alergenos: "Contiene gluten (pan).",
        claveCocina: "Tuesta ligeramente las mitades de pan antes de untar los frijoles para que mantengan una base firme y crujiente.",
        ingredientes: [
            { cantidad: 2, unidad: "pzas", nombre: "de panes partidos por la mitad" },
            { cantidad: 0.75, unidad: "taza", nombre: "de frijoles negros refritos" },
            { cantidad: 0.5, unidad: "taza", nombre: "de queso vegano rallado" },
            { cantidad: 0.5, unidad: "taza", nombre: "de pico de gallo (jitomate, cebolla y cilantro)" }
        ],
        pasos: [
            { titulo: "Unta los frijoles", detalle: "Distribuye los frijoles refritos sobre cada mitad de pan." },
            { titulo: "Gratina", detalle: "Agrega el queso vegano rallado y gratina en horno o sartén tapado hasta que se funda." },
            { titulo: "Corona con pico de gallo", detalle: "Sirve calientes con el pico de gallo fresco por encima." }
        ]
    },
    {
        id: 31,
        titulo: "Fajitas de pimientos y portobello al comal",
        categoria: "Almuerzos",
        subcategoria: "Sartén o comal · Tortillas",
        alimentacion: ["Sin frutos secos"],
        tiempoMin: 20,
        tiempoTexto: "20 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 58,
        porcionesBase: 3,
        unidadPorciones: "porciones",
        descripcion: "Tiras jugosas de hongos portobello, pimientos de colores y cebolla salteadas con comino y pimentón para acompañar con tortillas.",
        imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Fajitas vegetales salteadas con pimientos y hongos.",
        alergenos: "Puede contener gluten (según las tortillas).",
        claveCocina: "Corta los pimientos y hongos en tiras de tamaño similar para que se cocinen de forma uniforme.",
        ingredientes: [
            { cantidad: 2, unidad: "pzas", nombre: "de hongos portobello en tiras" },
            { cantidad: 1.5, unidad: "pzas", nombre: "de pimientos morrones en tiras" },
            { cantidad: 0.5, unidad: "pza", nombre: "de cebolla en juliana" },
            { cantidad: 1, unidad: "cdita", nombre: "de comino + 1 cdita de pimentón" },
            { cantidad: 6, unidad: "pzas", nombre: "de tortillas calientes" }
        ],
        pasos: [
            { titulo: "Saltea cebolla y pimientos", detalle: "Cocina la cebolla y los pimientos en un sartén con aceite durante 5 minutos." },
            { titulo: "Incorpora portobello y especias", detalle: "Añade las tiras de portobello, el comino, el pimentón y sal; saltea 6 minutos más." },
            { titulo: "Sirve con tortillas", detalle: "Acompaña con las tortillas calientes y aguacate al gusto." }
        ]
    },
    {
        id: 32,
        titulo: "Ensalada tibia de lentejas, espinaca y nuez",
        categoria: "Almuerzos",
        subcategoria: "Ensalada completa · Templada",
        alimentacion: ["Sin gluten", "Sin soja"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 44,
        porcionesBase: 2,
        unidadPorciones: "platos",
        descripcion: "Ensalada sustanciosa con lentejas tibias, hojas de espinaca, jitomate cherry, nueces troceadas y vinagreta de mostaza y limón.",
        imagen: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Ensalada de lentejas con espinacas y vinagreta cítrica.",
        alergenos: "Contiene frutos secos (nueces).",
        claveCocina: "Mezcla las lentejas aún tibias con la vinagreta para que absorban mejor el sabor antes de añadir las espinacas.",
        ingredientes: [
            { cantidad: 1.5, unidad: "tazas", nombre: "de lentejas cocidas" },
            { cantidad: 2, unidad: "tazas", nombre: "de espinacas frescas" },
            { cantidad: 1, unidad: "taza", nombre: "de jitomates cherry" },
            { cantidad: 0.25, unidad: "taza", nombre: "de nueces troceadas" },
            { cantidad: 2, unidad: "cdas", nombre: "de aceite de oliva + 1 cda de jugo de limón" }
        ],
        pasos: [
            { titulo: "Prepara la vinagreta", detalle: "Mezcla el aceite de oliva, el jugo de limón, una pizca de sal y pimienta." },
            { titulo: "Integra lentejas y verduras", detalle: "Combina las lentejas con los jitomates cherry, las espinacas y la vinagreta." },
            { titulo: "Termina con nueces", detalle: "Espolvorea las nueces troceadas justo antes de servir." }
        ]
    },
    {
        id: 33,
        titulo: "Arroz frito con verduras y edamames",
        categoria: "Almuerzos",
        subcategoria: "Wok o sartén · Estilo oriental",
        alimentacion: ["Sin frutos secos"],
        tiempoMin: 20,
        tiempoTexto: "20 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 52,
        porcionesBase: 3,
        unidadPorciones: "porciones",
        descripcion: "Arroz salteado en sartén con edamames pelados, zanahoria en cubitos, chícharos, cebollín y salsa de soja o tamari.",
        imagen: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Arroz salteado con verduras y edamames.",
        alergenos: "Contiene soja (edamames y salsa de soja).",
        claveCocina: "Usa arroz cocido y frío del día anterior para que los granos queden sueltos y no se apelmacen al saltear.",
        ingredientes: [
            { cantidad: 2, unidad: "tazas", nombre: "de arroz cocido frío" },
            { cantidad: 0.75, unidad: "taza", nombre: "de edamames pelados" },
            { cantidad: 0.5, unidad: "taza", nombre: "de zanahoria en cubos pequeños + chícharos" },
            { cantidad: 2, unidad: "cdas", nombre: "de salsa de soja o tamari" },
            { cantidad: 1, unidad: "cda", nombre: "de aceite vegetal + cebollín picado" }
        ],
        pasos: [
            { titulo: "Saltea las verduras", detalle: "Calienta el aceite en sartén y saltea la zanahoria, los chícharos y los edamames por 4 minutos." },
            { titulo: "Agrega el arroz", detalle: "Incorpora el arroz frío deshaciendo grumos y cocina 4 minutos a fuego medio-alto." },
            { titulo: "Sazona y sirve", detalle: "Añade la salsa de soja y el cebollín picado, mezcla bien y sirve." }
        ]
    },
    {
        id: 34,
        titulo: "Burritos de frijoles negros, arroz y aguacate",
        categoria: "Almuerzos",
        subcategoria: "Enrollado caliente · Tortillas",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 20,
        tiempoTexto: "20 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 63,
        porcionesBase: 3,
        unidadPorciones: "burritos",
        descripcion: "Burritos abundantes rellenos de frijoles negros sazonados, arroz condimentado, granos de elote, aguacate y salsa fresca.",
        imagen: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Burritos vegetales rellenos de frijoles, arroz y aguacate.",
        alergenos: "Contiene gluten (tortilla de trigo).",
        claveCocina: "Entibia las tortillas unos segundos antes de rellenarlas para enrollarlas sin que se agrieten.",
        ingredientes: [
            { cantidad: 3, unidad: "pzas", nombre: "de tortillas grandes de harina" },
            { cantidad: 1, unidad: "taza", nombre: "de frijoles negros cocidos" },
            { cantidad: 1, unidad: "taza", nombre: "de arroz cocido" },
            { cantidad: 0.5, unidad: "taza", nombre: "de granos de elote" },
            { cantidad: 1, unidad: "pza", nombre: "de aguacate en rebanadas" }
        ],
        pasos: [
            { titulo: "Calienta el relleno", detalle: "Mezcla y calienta los frijoles negros, el arroz y los granos de elote con una pizca de sal y comino." },
            { titulo: "Arma los burritos", detalle: "Coloca el relleno y las rebanadas de aguacate en el centro de cada tortilla entibiada." },
            { titulo: "Enrolla y dora", detalle: "Dobla los extremos y enrolla firmemente; opcionalmente dóralos 1 minuto por lado en sartén." }
        ]
    },
    {
        id: 35,
        titulo: "Pasta con salsa cremosa de calabacita y ajo",
        categoria: "Almuerzos",
        subcategoria: "Pasta · Sartén",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 25,
        tiempoTexto: "25 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 49,
        porcionesBase: 3,
        unidadPorciones: "platos",
        descripcion: "Pasta corta en salsa suave preparada con calabacita licuada, ajo, aceite de oliva y un toque de pimienta negra.",
        imagen: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Pasta con salsa verde suave de calabacita.",
        alergenos: "Contiene gluten (pasta).",
        claveCocina: "Licúa la calabacita cocida con un poco de agua de cocción de la pasta para obtener una crema ligera sin necesidad de crema láctea.",
        ingredientes: [
            { cantidad: 250, unidad: "g", nombre: "de pasta corta" },
            { cantidad: 2, unidad: "pzas", nombre: "de calabacitas en rodajas" },
            { cantidad: 2, unidad: "dientes", nombre: "de ajo" },
            { cantidad: 1.5, unidad: "cdas", nombre: "de aceite de oliva" },
            { cantidad: 0.25, unidad: "taza", nombre: "de agua de cocción de la pasta + sal y pimienta" }
        ],
        pasos: [
            { titulo: "Cuece la pasta y la calabacita", detalle: "Hierve la pasta con sal; en los últimos 5 minutos agrega las rodajas de calabacita y el ajo." },
            { titulo: "Licúa la salsa", detalle: "Escurre reservando un poco de agua de cocción y licúa la calabacita, el ajo, el aceite de oliva y sal." },
            { titulo: "Mezcla y sirve", detalle: "Une la pasta con la crema de calabacita a fuego suave y sirve con pimienta negra." }
        ]
    },
    {
        id: 36,
        titulo: "Tacos dorados de papa con lechuga y salsa",
        categoria: "Cenas",
        subcategoria: "Cocina mexicana · Comal o sartén",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 30,
        tiempoTexto: "30 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 66,
        porcionesBase: 3,
        unidadPorciones: "porciones",
        descripcion: "Tacos de maíz rellenos de puré de papa sazonado, dorados al gusto y servidos con lechuga fresca, jitomate y salsa.",
        imagen: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Tacos dorados de papa con lechuga y salsa.",
        alergenos: "Libre de gluten (con tortillas 100% maíz), soja y frutos secos.",
        claveCocina: "Suaviza las tortillas en el comal o microondas antes de enrollarlas para que no se quiebren al formar los tacos.",
        ingredientes: [
            { cantidad: 3, unidad: "pzas", nombre: "de papas cocidas y machacadas" },
            { cantidad: 6, unidad: "pzas", nombre: "de tortillas de maíz" },
            { cantidad: 1, unidad: "taza", nombre: "de lechuga finamente picada" },
            { cantidad: 0.5, unidad: "taza", nombre: "de salsa roja o verde" },
            { cantidad: 1, unidad: "cda", nombre: "de aceite vegetal + sal al gusto" }
        ],
        pasos: [
            { titulo: "Sazona el puré", detalle: "Mezcla la papa machacada con sal y una pizca de comino o pimienta." },
            { titulo: "Enrolla y dora", detalle: "Rellena cada tortilla, enróllala y dórala en sartén con un poco de aceite hasta que esté crujiente." },
            { titulo: "Acompaña", detalle: "Escurre sobre papel absorbente y sirve con lechuga y salsa." }
        ]
    },
    {
        id: 37,
        titulo: "Ensalada fresca de pepino, jitomate y garbanzos",
        categoria: "Cenas",
        subcategoria: "Cena ligera · Sin cocción",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 35,
        porcionesBase: 2,
        unidadPorciones: "platos",
        descripcion: "Ensalada refrescante y ligera con pepino, jitomate, garbanzos cocidos, cebolla morada, limón y aceite de oliva.",
        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Ensalada fresca con garbanzos, pepino y jitomate.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Pica los ingredientes en cubos pequeños para que cada bocado combine las verduras y los garbanzos.",
        ingredientes: [
            { cantidad: 1, unidad: "taza", nombre: "de garbanzos cocidos" },
            { cantidad: 1, unidad: "pza", nombre: "de pepino en cubos" },
            { cantidad: 2, unidad: "pzas", nombre: "de jitomates en cubos" },
            { cantidad: 0.25, unidad: "taza", nombre: "de cebolla morada picada" },
            { cantidad: 1.5, unidad: "cdas", nombre: "de aceite de oliva + jugo de 1 limón" }
        ],
        pasos: [
            { titulo: "Mezcla las verduras y garbanzos", detalle: "Coloca en un tazón los garbanzos, el pepino, el jitomate y la cebolla morada." },
            { titulo: "Aliña", detalle: "Agrega el aceite de oliva, el jugo de limón, sal y orégano al gusto." },
            { titulo: "Sirve", detalle: "Revuelve suavemente y disfruta fresca." }
        ]
    },
    {
        id: 38,
        titulo: "Sopa de elote con calabacita y epazote",
        categoria: "Cenas",
        subcategoria: "Sopa casera · Olla",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 25,
        tiempoTexto: "25 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 45,
        porcionesBase: 4,
        unidadPorciones: "platos",
        descripcion: "Sopa reconfortante de granos de elote, calabacita en cubos y hojas de epazote en caldo ligero de verduras.",
        imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Sopa caliente de elote y calabacita.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Añade el epazote en los últimos 3 minutos de cocción para conservar su aroma fresco.",
        ingredientes: [
            { cantidad: 1.5, unidad: "tazas", nombre: "de granos de elote" },
            { cantidad: 1.5, unidad: "pzas", nombre: "de calabacitas en cubos" },
            { cantidad: 3.5, unidad: "tazas", nombre: "de caldo de verduras" },
            { cantidad: 0.5, unidad: "pza", nombre: "de cebolla picada + 1 diente de ajo" },
            { cantidad: 1, unidad: "ramita", nombre: "de epazote fresco + 1 cda de aceite" }
        ],
        pasos: [
            { titulo: "Sofríe base y elote", detalle: "Acitrona la cebolla y el ajo en aceite; agrega los granos de elote y cocina 4 minutos." },
            { titulo: "Cuece con caldo y calabacita", detalle: "Vierte el caldo de verduras y suma la calabacita; cocina 12 minutos a fuego medio." },
            { titulo: "Aromatiza y sirve", detalle: "Agrega el epazote y rectifica sal antes de servir." }
        ]
    },
    {
        id: 39,
        titulo: "Pita rellena de falafel horneado y ensalada",
        categoria: "Cenas",
        subcategoria: "Pan pita · Horneado",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 30,
        tiempoTexto: "30 min",
        dificultadNivel: 3,
        dificultadTexto: "Intermedia",
        likesBase: 53,
        porcionesBase: 3,
        unidadPorciones: "porciones",
        descripcion: "Bolitas de garbanzo especiadas horneadas hasta dorar, servidas dentro de pan pita con pepino, jitomate y aderezo de tahini.",
        imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Pan pita relleno de falafel y verduras frescas.",
        alergenos: "Contiene gluten (pan pita) y sésamo.",
        claveCocina: "Escurre muy bien la mezcla de garbanzos antes de formar las bolitas para que no se desarmen en el horno.",
        ingredientes: [
            { cantidad: 1.5, unidad: "tazas", nombre: "de garbanzos cocidos y bien escurridos" },
            { cantidad: 3, unidad: "cdas", nombre: "de harina de garbanzo o avena" },
            { cantidad: 1, unidad: "cdita", nombre: "de comino + ajo picado + cilantro" },
            { cantidad: 3, unidad: "pzas", nombre: "de panes pita" },
            { cantidad: 1, unidad: "taza", nombre: "de pepino y jitomate picados" }
        ],
        pasos: [
            { titulo: "Forma las bolitas", detalle: "Tritura parcialmente los garbanzos con las especias, cilantro y harina hasta formar una masa moldeable; haz bolitas." },
            { titulo: "Hornea", detalle: "Hornea a 190 °C durante 18-20 minutos volteando a la mitad hasta que doren." },
            { titulo: "Rellena el pan pita", detalle: "Abre los panes pita y rellénalos con el falafel y las verduras picadas." }
        ]
    },
    {
        id: 40,
        titulo: "Verduras asadas al romero con camote",
        categoria: "Cenas",
        subcategoria: "Horno · Reconfortante",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 35,
        tiempoTexto: "35 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 47,
        porcionesBase: 3,
        unidadPorciones: "porciones",
        descripcion: "Cubos de camote, zanahoria, brócoli y cebolla morada horneados con aceite de oliva, romero y sal.",
        imagen: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Verduras y camote asados al horno con romero.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "No encimes las verduras en la charola para que se tuesten en lugar de cocerse al vapor.",
        ingredientes: [
            { cantidad: 1.5, unidad: "tazas", nombre: "de camote en cubos" },
            { cantidad: 1.5, unidad: "tazas", nombre: "de floretes de brócoli" },
            { cantidad: 1, unidad: "pza", nombre: "de zanahoria en rodajas" },
            { cantidad: 2, unidad: "cdas", nombre: "de aceite de oliva" },
            { cantidad: 1, unidad: "cdita", nombre: "de romero picado + sal al gusto" }
        ],
        pasos: [
            { titulo: "Condimenta las verduras", detalle: "Mezcla el camote, el brócoli y la zanahoria con el aceite de oliva, el romero y la sal." },
            { titulo: "Hornea", detalle: "Distribuye en una charola y hornea a 200 °C durante 25-30 minutos hasta que estén tiernos y dorados." },
            { titulo: "Sirve", detalle: "Saca del horno y sirve caliente." }
        ]
    },
    {
        id: 41,
        titulo: "Brownies de cacao y plátano maduro",
        categoria: "Postres",
        subcategoria: "Repostería · Horno",
        alimentacion: ["Sin frutos secos", "Sin soja"],
        tiempoMin: 30,
        tiempoTexto: "30 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 60,
        porcionesBase: 8,
        unidadPorciones: "cuadros",
        descripcion: "Brownies suaves y chocolatudos endulzados con plátano maduro, cacao puro y harina de avena o trigo.",
        imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Cuadros de brownie de cacao y plátano.",
        alergenos: "Puede contener gluten según la harina elegida.",
        claveCocina: "Usa plátanos bien maduros con motas oscuras para aportar dulzor natural y humedad.",
        ingredientes: [
            { cantidad: 2, unidad: "pzas", nombre: "de plátanos maduros machacados" },
            { cantidad: 0.33, unidad: "taza", nombre: "de cacao puro en polvo" },
            { cantidad: 0.75, unidad: "taza", nombre: "de harina de avena o trigo" },
            { cantidad: 2, unidad: "cdas", nombre: "de aceite vegetal o derretido" },
            { cantidad: 0.5, unidad: "cdita", nombre: "de polvo para hornear" }
        ],
        pasos: [
            { titulo: "Mezcla la masa", detalle: "Integra el plátano machacado, el aceite, el cacao, la harina y el polvo para hornear hasta obtener una masa espesa." },
            { titulo: "Hornea", detalle: "Vierte en un molde pequeño engrasado y hornea a 180 °C durante 18-22 minutos." },
            { titulo: "Enfría y corta", detalle: "Deja enfriar antes de cortar en cuadros." }
        ]
    },
    {
        id: 42,
        titulo: "Compota tibia de pera y canela",
        categoria: "Postres",
        subcategoria: "Postre casero · Sartén",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 34,
        porcionesBase: 3,
        unidadPorciones: "porciones",
        descripcion: "Peras troceadas cocinadas suavemente con canela, un toque de limón y endulzante natural, ideales solas o sobre avena.",
        imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Compota de pera especiada con canela.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Cocina a fuego bajo para que las peras se ablanden sin deshacerse por completo.",
        ingredientes: [
            { cantidad: 3, unidad: "pzas", nombre: "de peras maduras en cubos" },
            { cantidad: 0.25, unidad: "taza", nombre: "de agua" },
            { cantidad: 1, unidad: "cda", nombre: "de jarabe de maple o azúcar mascabado" },
            { cantidad: 0.5, unidad: "cdita", nombre: "de canela molida + chorrito de limón" }
        ],
        pasos: [
            { titulo: "Cocina las peras", detalle: "Pon en un cazo las peras, el agua, el endulzante, la canela y el limón a fuego medio-bajo." },
            { titulo: "Reduce ligeramente", detalle: "Cocina unos 10-12 minutos removiendo suavemente hasta que la fruta esté tierna." },
            { titulo: "Sirve", detalle: "Sirve tibia o fría al gusto." }
        ]
    },
    {
        id: 43,
        titulo: "Trufas de dátil, cacao y coco rallado",
        categoria: "Postres",
        subcategoria: "Bocadillo dulce · Sin horno",
        alimentacion: ["Sin gluten", "Sin soja"],
        tiempoMin: 15,
        tiempoTexto: "15 min + frío",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 50,
        porcionesBase: 12,
        unidadPorciones: "trufas",
        descripcion: "Bolitas dulces y energéticas hechas con dátiles suaves, cacao puro, nueces o almendras molidas y coco rallado.",
        imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Trufas de cacao y coco listas para refrigerar.",
        alergenos: "Contiene frutos secos (almendras o nueces).",
        claveCocina: "Si los dátiles están algo firmes, remójalos 10 minutos en agua tibia y escúrrelos bien antes de triturar.",
        ingredientes: [
            { cantidad: 12, unidad: "pzas", nombre: "de dátiles sin hueso" },
            { cantidad: 0.5, unidad: "taza", nombre: "de almendras o nueces molidas" },
            { cantidad: 2, unidad: "cdas", nombre: "de cacao puro en polvo" },
            { cantidad: 0.25, unidad: "taza", nombre: "de coco rallado para cubrir" }
        ],
        pasos: [
            { titulo: "Tritura la mezcla", detalle: "Procesa los dátiles, las almendras molidas y el cacao hasta formar una masa cohesiva." },
            { titulo: "Forma las trufas", detalle: "Toma pequeñas porciones y fórmalas con las manos." },
            { titulo: "Reboza y refrigera", detalle: "Pásalas por el coco rallado y refrigera 20 minutos antes de servir." }
        ]
    },
    {
        id: 44,
        titulo: "Gelatina de fresa con agar-agar",
        categoria: "Postres",
        subcategoria: "Postre frío · Sin gelatina animal",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 15,
        tiempoTexto: "15 min + 2 h frío",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 39,
        porcionesBase: 4,
        unidadPorciones: "vasos",
        descripcion: "Gelatina firme y frutal preparada con jugo o puré de fresa natural y agar-agar de origen vegetal.",
        imagen: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Gelatina frutal de fresa en vasos.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "El agar-agar necesita hervir suavemente 1-2 minutos para activarse y cuajar al enfriarse.",
        ingredientes: [
            { cantidad: 2, unidad: "tazas", nombre: "de licuado colado de fresas con agua" },
            { cantidad: 1.5, unidad: "cditas", nombre: "de agar-agar en polvo" },
            { cantidad: 2, unidad: "cdas", nombre: "de endulzante al gusto" }
        ],
        pasos: [
            { titulo: "Disuelve y hierve", detalle: "Mezcla el líquido de fresa con el agar-agar y el endulzante; lleva a hervor suave 2 minutos moviendo." },
            { titulo: "Vierte en moldes", detalle: "Reparte en vasos o moldes individuales." },
            { titulo: "Refrigera hasta cuajar", detalle: "Deja enfriar a temperatura ambiente y refrigera al menos 2 horas." }
        ]
    },
    {
        id: 45,
        titulo: "Galletas de avena, chispas de chocolate y canela",
        categoria: "Postres",
        subcategoria: "Repostería · Horno",
        alimentacion: ["Sin soja"],
        tiempoMin: 25,
        tiempoTexto: "25 min",
        dificultadNivel: 2,
        dificultadTexto: "Sencilla",
        likesBase: 58,
        porcionesBase: 14,
        unidadPorciones: "galletas",
        descripcion: "Galletas caseras de avena con chispas de chocolate oscuro y un toque de canela, doradas por fuera y suaves por dentro.",
        imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Galletas de avena con chispas de chocolate.",
        alergenos: "Puede contener trazas de gluten según la avena.",
        claveCocina: "Aplasta ligeramente cada porción antes de hornear ya que la masa de avena no se extiende tanto como la de mantequilla tradicional.",
        ingredientes: [
            { cantidad: 1.5, unidad: "tazas", nombre: "de copos de avena" },
            { cantidad: 0.5, unidad: "taza", nombre: "de harina de trigo o avena" },
            { cantidad: 0.33, unidad: "taza", nombre: "de azúcar mascabado" },
            { cantidad: 3, unidad: "cdas", nombre: "de aceite vegetal + 2 cdas de bebida vegetal" },
            { cantidad: 0.5, unidad: "taza", nombre: "de chispas de chocolate vegano + 0.5 cdita de canela" }
        ],
        pasos: [
            { titulo: "Prepara la masa", detalle: "Mezcla los ingredientes secos con el aceite y la bebida vegetal; incorpora las chispas de chocolate." },
            { titulo: "Forma en charola", detalle: "Haz bolitas, colócalas en una charola con papel encerado y aplástalas ligeramente." },
            { titulo: "Hornea y enfría", detalle: "Hornea a 180 °C durante 12-15 minutos hasta dorar los bordes y deja enfriar." }
        ]
    },
    {
        id: 46,
        titulo: "Agua fresca de jamaica con jengibre y limón",
        categoria: "Bebidas",
        subcategoria: "Agua fresca · Refrescante",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 15,
        tiempoTexto: "15 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 49,
        porcionesBase: 4,
        unidadPorciones: "vasos",
        descripcion: "Infusión fría de flor de jamaica con un toque vibrante de jengibre fresco y jugo de limón.",
        imagen: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Agua fresca de jamaica con hielo y limón.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "No hiervas la jamaica demasiado tiempo para evitar que el sabor se vuelva excesivamente astringente.",
        ingredientes: [
            { cantidad: 0.5, unidad: "taza", nombre: "de flor de jamaica seca" },
            { cantidad: 4, unidad: "tazas", nombre: "de agua" },
            { cantidad: 1, unidad: "cdita", nombre: "de jengibre fresco rallado" },
            { cantidad: 2, unidad: "cdas", nombre: "de jugo de limón" },
            { cantidad: 2, unidad: "cdas", nombre: "de endulzante al gusto + hielo" }
        ],
        pasos: [
            { titulo: "Infusiona", detalle: "Hierve 1 taza de agua con la jamaica y el jengibre durante 6 minutos; apaga y reposa 5 minutos." },
            { titulo: "Cuela y mezcla", detalle: "Cuela en una jarra, agrega el resto del agua fría, el jugo de limón y el endulzante." },
            { titulo: "Sirve con hielo", detalle: "Sirve bien fría con hielo al gusto." }
        ]
    },
    {
        id: 47,
        titulo: "Batido verde de pera, espinaca y limón",
        categoria: "Bebidas",
        subcategoria: "Batido verde · Ligero",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 5,
        tiempoTexto: "5 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 38,
        porcionesBase: 2,
        unidadPorciones: "vasos",
        descripcion: "Batido suave y fresco que combina la dulzura natural de la pera con espinaca fresca, limón y agua fría.",
        imagen: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Batido verde de pera y espinaca.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Elige una pera madura y jugosa para dar textura cremosa sin necesidad de añadir plátano.",
        ingredientes: [
            { cantidad: 1.5, unidad: "pzas", nombre: "de peras maduras en trozos" },
            { cantidad: 1.5, unidad: "tazas", nombre: "de espinacas frescas" },
            { cantidad: 1, unidad: "taza", nombre: "de agua fría o bebida vegetal" },
            { cantidad: 1, unidad: "cda", nombre: "de jugo de limón" }
        ],
        pasos: [
            { titulo: "Licúa espinaca y líquido", detalle: "Mezcla en la licuadora las espinacas con el agua y el jugo de limón." },
            { titulo: "Añade la pera", detalle: "Incorpora los trozos de pera y licúa hasta obtener una bebida homogénea." },
            { titulo: "Sirve", detalle: "Vierte en vasos y consume al momento." }
        ]
    },
    {
        id: 48,
        titulo: "Golden milk vegetal con cúrcuma y canela",
        categoria: "Bebidas",
        subcategoria: "Bebida caliente · Especiada",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 44,
        porcionesBase: 2,
        unidadPorciones: "tazas",
        descripcion: "Bebida caliente y reconfortante de bebida vegetal con cúrcuma, canela, una pizca de pimienta negra y vainilla.",
        imagen: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Bebida dorada tibia especiada con cúrcuma y canela.",
        alergenos: "Libre de gluten, soja y frutos secos (con bebida de avena o coco).",
        claveCocina: "Añade una pizca mínima de pimienta negra para favorecer la biodisponibilidad de la curcumina.",
        ingredientes: [
            { cantidad: 2, unidad: "tazas", nombre: "de bebida vegetal (avena o coco)" },
            { cantidad: 1, unidad: "cdita", nombre: "de cúrcuma en polvo" },
            { cantidad: 0.5, unidad: "cdita", nombre: "de canela molida" },
            { cantidad: 1, unidad: "pizca", nombre: "de pimienta negra + 1 cda de endulzante" }
        ],
        pasos: [
            { titulo: "Calienta con especias", detalle: "Mezcla en un cazo la bebida vegetal, la cúrcuma, la canela y la pimienta negra a fuego suave." },
            { titulo: "Integra aromas", detalle: "Calienta sin que hierva a borbotones durante 4-5 minutos removiendo." },
            { titulo: "Endulza y sirve", detalle: "Retira del fuego, añade el endulzante al gusto y sirve caliente." }
        ]
    },
    {
        id: 49,
        titulo: "Limonada verde con pepino y hierbabuena",
        categoria: "Bebidas",
        subcategoria: "Bebida fría · Cítrica",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 10,
        tiempoTexto: "10 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 51,
        porcionesBase: 4,
        unidadPorciones: "vasos",
        descripcion: "Limonada fresca y aromática con jugo de limón, pepino licuado, hierbabuena y abundantes hielos.",
        imagen: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Limonada verde fría con hierbabuena.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Cuela la mezcla de pepino y limón si prefieres una bebida más ligera y cristalina.",
        ingredientes: [
            { cantidad: 0.5, unidad: "taza", nombre: "de jugo de limón fresco" },
            { cantidad: 1, unidad: "pza", nombre: "de pepino en trozos" },
            { cantidad: 4, unidad: "tazas", nombre: "de agua fría" },
            { cantidad: 10, unidad: "hojas", nombre: "de hierbabuena" },
            { cantidad: 3, unidad: "cdas", nombre: "de endulzante al gusto + hielo" }
        ],
        pasos: [
            { titulo: "Licúa pepino con agua", detalle: "Licúa el pepino con 1 taza de agua y cuela si lo deseas." },
            { titulo: "Mezcla en jarra", detalle: "Combina en una jarra el jugo de pepino, el jugo de limón, el resto del agua y el endulzante." },
            { titulo: "Sirve con hierbabuena", detalle: "Agrega hielo y hojas de hierbabuena fresca al servir." }
        ]
    },
    {
        id: 50,
        titulo: "Smoothie verde de kiwi, espinaca y plátano",
        categoria: "Bebidas",
        subcategoria: "Batido verde · Frutal",
        alimentacion: ["Sin gluten", "Sin frutos secos", "Sin soja"],
        tiempoMin: 5,
        tiempoTexto: "5 min",
        dificultadNivel: 1,
        dificultadTexto: "Muy fácil",
        likesBase: 42,
        porcionesBase: 2,
        unidadPorciones: "vasos",
        descripcion: "Batido cremoso y ácido-dulce con kiwi maduro, espinaca fresca, plátano y bebida vegetal o agua fría.",
        imagen: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&w=1000&q=80",
        pieFoto: "Smoothie verde con kiwi y espinacas.",
        alergenos: "Libre de gluten, soja y frutos secos.",
        claveCocina: "Usa plátano ligeramente maduro o congelado para equilibrar la acidez natural del kiwi.",
        ingredientes: [
            { cantidad: 2, unidad: "pzas", nombre: "de kiwis pelados en trozos" },
            { cantidad: 1, unidad: "taza", nombre: "de espinacas frescas" },
            { cantidad: 1, unidad: "pza", nombre: "de plátano" },
            { cantidad: 1, unidad: "taza", nombre: "de agua fría o bebida vegetal" }
        ],
        pasos: [
            { titulo: "Agrega ingredientes", detalle: "Coloca en la licuadora los kiwis, las espinacas, el plátano y el líquido." },
            { titulo: "Licúa hasta integrar", detalle: "Bate durante 40-60 segundos hasta lograr una textura uniforme." },
            { titulo: "Sirve frío", detalle: "Reparte en dos vasos y sirve de inmediato." }
        ]
    }
];

const TOTAL_ESTRELLAS = 5;

let guardadas = JSON.parse(localStorage.getItem("vkombu_guardadas") || "[]");
let likesUsuario = JSON.parse(localStorage.getItem("vkombu_likes_usuario") || "[]");
let comentariosPorReceta = JSON.parse(localStorage.getItem("vkombu_comentarios") || "{}");

let filtroTiempo = "todos";
let filtroAlimentacion = "Todas";
let filtroCategoria = "Todos";
let filtroDificultad = "Todas";
let textoBusqueda = "";
let ordenActual = "relevancia";
let recetaActiva = null;
let porcionesActuales = 1;
let vistaActual = "catalogo";

const vistaCatalogo = document.getElementById("vista-catalogo");
const vistaGuardadas = document.getElementById("vista-guardadas");
const vistaDetalle = document.getElementById("vista-detalle");

const gridRecetas = document.getElementById("grid-recetas");
const gridGuardadas = document.getElementById("grid-guardadas");
const contadorTitulo = document.getElementById("contador-titulo");
const contadorGuardadasVista = document.getElementById("contador-guardadas-vista");
const subtituloGuardadas = document.getElementById("subtitulo-guardadas");
const chipsActivos = document.getElementById("chips-activos");
const contadorGuardadasNav = document.getElementById("contador-guardadas-nav");
const filtrosTitulo = document.getElementById("filtros-titulo");
const pieResultados = document.getElementById("pie-resultados");
const navUsuario = document.getElementById("nav-usuario");
const inputPorciones = document.getElementById("input-porciones");
const unidadPorcionesTexto = document.getElementById("unidad-porciones-texto");

const selectTiempo = document.getElementById("filtro-tiempo");
const selectAlimentacion = document.getElementById("filtro-alimentacion");
const selectCategoria = document.getElementById("filtro-categoria");
const selectDificultad = document.getElementById("filtro-dificultad");
const btnLimpiarFiltros = document.getElementById("btn-limpiar-filtros");
const btnVaciarGuardadas = document.getElementById("btn-vaciar-guardadas");
const inputBuscador = document.getElementById("input-buscador");
const btnBuscar = document.getElementById("btn-buscar");
const selectOrden = document.getElementById("select-orden");

const usuarioActivo = sessionStorage.getItem("vkombu_usuario");
const nombreUsuarioLimpio = usuarioActivo
    ? (usuarioActivo.includes("@") ? usuarioActivo.split("@")[0] : usuarioActivo)
    : "";

if (navUsuario) {
    navUsuario.textContent = nombreUsuarioLimpio ? `Hola, ${nombreUsuarioLimpio}` : "ACCESO";
}

function formatearEstrellas(nivel) {
    const clamped = Math.max(1, Math.min(TOTAL_ESTRELLAS, Number(nivel) || 1));
    return "★".repeat(clamped) + "☆".repeat(TOTAL_ESTRELLAS - clamped);
}

function obtenerTotalLikes(receta) {
    const dioLike = likesUsuario.includes(receta.id) ? 1 : 0;
    return (receta.likesBase || 0) + dioLike;
}

function guardarEnStorage() {
    localStorage.setItem("vkombu_guardadas", JSON.stringify(guardadas));
    if (contadorGuardadasNav) {
        contadorGuardadasNav.textContent = guardadas.length;
    }
}

function guardarLikesEnStorage() {
    localStorage.setItem("vkombu_likes_usuario", JSON.stringify(likesUsuario));
}

function guardarComentariosEnStorage() {
    localStorage.setItem("vkombu_comentarios", JSON.stringify(comentariosPorReceta));
}

function mostrarVista(nombreVista) {
    vistaActual = nombreVista;
    vistaCatalogo.hidden = nombreVista !== "catalogo";
    vistaGuardadas.hidden = nombreVista !== "guardadas";
    vistaDetalle.hidden = nombreVista !== "detalle";

    if (nombreVista === "guardadas") {
        renderizarVistaGuardadas();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function alternarGuardada(id) {
    const numId = Number(id);
    if (guardadas.includes(numId)) {
        guardadas = guardadas.filter((item) => item !== numId);
    } else {
        guardadas.push(numId);
    }
    guardarEnStorage();
    renderizarCatalogo();
    if (vistaActual === "guardadas") {
        renderizarVistaGuardadas();
    }
    if (recetaActiva && recetaActiva.id === numId) {
        actualizarBotonGuardarDetalle();
    }
}

function alternarLike(id) {
    const numId = Number(id);
    if (likesUsuario.includes(numId)) {
        likesUsuario = likesUsuario.filter((item) => item !== numId);
    } else {
        likesUsuario.push(numId);
    }
    guardarLikesEnStorage();
    renderizarCatalogo();
    if (vistaActual === "guardadas") {
        renderizarVistaGuardadas();
    }
    if (recetaActiva && recetaActiva.id === numId) {
        actualizarBotonLikeDetalle();
    }
}

function actualizarBotonLikeDetalle() {
    const btnLike = document.getElementById("detalle-btn-like");
    const countSpan = document.getElementById("detalle-likes-count");
    if (!btnLike || !recetaActiva) return;
    const activo = likesUsuario.includes(recetaActiva.id);
    btnLike.classList.toggle("activo", activo);
    btnLike.setAttribute("aria-pressed", String(activo));
    if (countSpan) {
        countSpan.textContent = obtenerTotalLikes(recetaActiva);
    }
}

function formatearCantidad(valor) {
    if (Number.isInteger(valor)) return valor;
    if (Math.abs(valor - 0.25) < 0.01) return "1/4";
    if (Math.abs(valor - 0.5) < 0.01) return "1/2";
    if (Math.abs(valor - 0.75) < 0.01) return "3/4";
    return Number(valor.toFixed(1));
}

function renderizarChips() {
    if (!chipsActivos) return;
    const chips = [];

    if (filtroTiempo !== "todos") {
        chips.push({ tipo: "tiempo", texto: `Hasta ${filtroTiempo} min` });
    }
    if (filtroAlimentacion !== "Todas") {
        chips.push({ tipo: "alimentacion", texto: filtroAlimentacion });
    }
    if (filtroCategoria !== "Todos") {
        chips.push({ tipo: "categoria", texto: filtroCategoria });
    }
    if (filtroDificultad !== "Todas") {
        chips.push({ tipo: "dificultad", texto: `${formatearEstrellas(filtroDificultad)} (${filtroDificultad}★)` });
    }
    if (textoBusqueda.trim()) {
        chips.push({ tipo: "busqueda", texto: `"${textoBusqueda.trim()}"` });
    }

    if (filtrosTitulo) {
        filtrosTitulo.textContent = chips.length > 0 ? `Filtros · ${chips.length}` : "Filtros";
    }

    chipsActivos.innerHTML = chips
        .map(
            (chip) => `
            <span class="chip-filtro">
                ${chip.texto}
                <button type="button" data-quitar="${chip.tipo}" aria-label="Quitar filtro">×</button>
            </span>
        `
        )
        .join("");
}

function crearTarjetaRecetaHTML(r) {
    const esGuardada = guardadas.includes(r.id);
    const totalLikes = obtenerTotalLikes(r);
    const etiquetaExtra = r.alimentacion[0] ? ` · ${r.alimentacion[0]}` : "";
    const estrellas = formatearEstrellas(r.dificultadNivel);

    return `
        <article class="card-receta" data-abrir="${r.id}">
            <div class="card-img-box">
                <img src="${r.imagen}" alt="${r.titulo}" loading="lazy">
                <button type="button" class="btn-fav-card ${esGuardada ? "activa" : ""}" data-fav="${r.id}" title="${esGuardada ? "Quitar de guardadas" : "Guardar receta"}">
                    ${esGuardada ? "♥" : "♡"}
                </button>
            </div>
            <div class="card-info">
                <span class="card-cat">${r.categoria.toUpperCase()}</span>
                <h3>${r.titulo}</h3>
                <div class="card-meta-fila">
                    <span>◷ ${r.tiempoMin} min</span>
                    <span class="estrellas-dificultad" title="Dificultad ${r.dificultadNivel} de 5 (${r.dificultadTexto})">${estrellas}</span>
                    <span class="card-likes-mini">👍 ${totalLikes}</span>
                </div>
                <div class="card-pie">
                    <span>100% vegetal${etiquetaExtra}</span>
                    <span class="flecha-abrir">↗</span>
                </div>
            </div>
        </article>
    `;
}

function renderizarCatalogo() {
    if (!gridRecetas) return;

    const termino = textoBusqueda.toLowerCase().trim();

    let lista = recetas.filter((r) => {
        const pasaTiempo =
            filtroTiempo === "todos" || r.tiempoMin <= Number(filtroTiempo);
        const pasaAlimentacion =
            filtroAlimentacion === "Todas" || r.alimentacion.includes(filtroAlimentacion);
        const pasaCategoria =
            filtroCategoria === "Todos" || r.categoria === filtroCategoria;
        const pasaDificultad =
            filtroDificultad === "Todas" || r.dificultadNivel === Number(filtroDificultad);
        const pasaTexto =
            !termino ||
            r.titulo.toLowerCase().includes(termino) ||
            r.descripcion.toLowerCase().includes(termino) ||
            r.subcategoria.toLowerCase().includes(termino) ||
            r.ingredientes.some((i) => i.nombre.toLowerCase().includes(termino));

        return (
            pasaTiempo &&
            pasaAlimentacion &&
            pasaCategoria &&
            pasaDificultad &&
            pasaTexto
        );
    });

    if (ordenActual === "likes") {
        lista = [...lista].sort((a, b) => obtenerTotalLikes(b) - obtenerTotalLikes(a));
    } else if (ordenActual === "tiempo") {
        lista = [...lista].sort((a, b) => a.tiempoMin - b.tiempoMin);
    } else if (ordenActual === "dificultad") {
        lista = [...lista].sort((a, b) => a.dificultadNivel - b.dificultadNivel);
    } else if (ordenActual === "nombre") {
        lista = [...lista].sort((a, b) => a.titulo.localeCompare(b.titulo));
    }

    if (contadorTitulo) {
        contadorTitulo.textContent = termino
            ? `${lista.length} receta${lista.length === 1 ? "" : "s"} con "${textoBusqueda.trim()}"`
            : `${lista.length} receta${lista.length === 1 ? "" : "s"} disponibles`;
    }

    if (pieResultados) {
        pieResultados.textContent =
            lista.length > 0
                ? `Has visto las ${lista.length} receta${lista.length === 1 ? "" : "s"} de esta búsqueda.`
                : "";
    }

    renderizarChips();

    if (lista.length === 0) {
        gridRecetas.innerHTML = `
            <div class="vacio-box">
                <h3>No hay recetas con esos filtros</h3>
                <p>Prueba quitando algún filtro o busca otro ingrediente como avena, cacao o aguacate.</p>
            </div>
        `;
        return;
    }

    gridRecetas.innerHTML = lista.map(crearTarjetaRecetaHTML).join("");
}

function renderizarVistaGuardadas() {
    if (!gridGuardadas) return;

    const recetasGuardadas = recetas.filter((r) => guardadas.includes(r.id));

    if (contadorGuardadasVista) {
        contadorGuardadasVista.textContent = `${recetasGuardadas.length} receta${recetasGuardadas.length === 1 ? "" : "s"} guardada${recetasGuardadas.length === 1 ? "" : "s"}`;
    }
    if (subtituloGuardadas) {
        subtituloGuardadas.textContent = recetasGuardadas.length > 0
            ? "Tienes estas recetas listas para cocinar o consultar cuando quieras."
            : "Aún no has guardado recetas en tu colección.";
    }
    if (btnVaciarGuardadas) {
        btnVaciarGuardadas.hidden = recetasGuardadas.length === 0;
    }

    if (recetasGuardadas.length === 0) {
        gridGuardadas.innerHTML = `
            <div class="estado-vacio-guardadas">
                <h3>Tu lista de guardadas está vacía</h3>
                <p>Pulsa el corazón (♡) en cualquier receta del catálogo para reunir tus favoritas aquí.</p>
                <button type="button" class="btn-dorado" id="btn-ir-explorar-vacio">Explorar recetario</button>
            </div>
        `;
        return;
    }

    gridGuardadas.innerHTML = recetasGuardadas.map(crearTarjetaRecetaHTML).join("");
}

function escaparHTML(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}

function renderizarComentarios(idReceta) {
    const listaEl = document.getElementById("lista-comentarios");
    const contadorEl = document.getElementById("contador-comentarios");
    if (!listaEl) return;

    const lista = comentariosPorReceta[String(idReceta)] || [];
    if (contadorEl) {
        contadorEl.textContent = `${lista.length} comentario${lista.length === 1 ? "" : "s"}`;
    }

    if (lista.length === 0) {
        listaEl.innerHTML = `<p class="sin-comentarios">Aún no hay comentarios en esta receta. ¡Sé la primera en compartir cómo te quedó!</p>`;
        return;
    }

    listaEl.innerHTML = lista
        .map(
            (c) => `
            <article class="comentario-card">
                <div class="comentario-top">
                    <span class="comentario-autor">${escaparHTML(c.autor)}</span>
                    <div>
                        <span class="comentario-fecha">${escaparHTML(c.fecha)}</span>
                        <button type="button" class="btn-borrar-comentario" data-borrar-comentario="${escaparHTML(c.id)}" title="Eliminar comentario">Eliminar</button>
                    </div>
                </div>
                <p class="comentario-texto">${escaparHTML(c.texto)}</p>
            </article>
        `
        )
        .join("");
}

function sincronizarPorcionesUI(actualizarInput = true) {
    const listaIng = document.getElementById("detalle-ingredientes");
    const resumenPorciones = document.getElementById("detalle-porciones");
    if (!recetaActiva || !listaIng) return;

    const factor = porcionesActuales / recetaActiva.porcionesBase;

    if (actualizarInput && inputPorciones) {
        inputPorciones.value = porcionesActuales;
    }
    if (unidadPorcionesTexto) {
        unidadPorcionesTexto.textContent = recetaActiva.unidadPorciones;
    }
    if (resumenPorciones) {
        resumenPorciones.textContent = `${porcionesActuales} ${recetaActiva.unidadPorciones}`;
    }

    listaIng.innerHTML = recetaActiva.ingredientes
        .map((ing) => {
            const cantCalculada = formatearCantidad(ing.cantidad * factor);
            return `
            <li>
                <label class="ing-check">
                    <input type="checkbox">
                    <span><strong>${cantCalculada} ${ing.unidad}</strong> ${ing.nombre}</span>
                </label>
            </li>
        `;
        })
        .join("");
}

function actualizarBotonGuardarDetalle() {
    const btnGuardar = document.getElementById("detalle-btn-guardar");
    if (!btnGuardar || !recetaActiva) return;
    const esGuardada = guardadas.includes(recetaActiva.id);
    btnGuardar.textContent = esGuardada ? "♥ Receta guardada" : "♡ Guardar receta";
    btnGuardar.classList.toggle("guardada", esGuardada);
}

function abrirDetalle(idReceta) {
    const receta = recetas.find((r) => r.id === Number(idReceta));
    if (!receta) return;

    recetaActiva = receta;
    porcionesActuales = receta.porcionesBase;

    document.getElementById("breadcrumb-categoria").textContent = receta.categoria;
    document.getElementById("breadcrumb-actual").textContent = receta.titulo;
    document.getElementById("detalle-imagen").src = receta.imagen;
    document.getElementById("detalle-imagen").alt = receta.titulo;
    document.getElementById("detalle-pie-foto").textContent = receta.pieFoto;
    document.getElementById("detalle-subcat").textContent = `${receta.categoria.toUpperCase()} / ${receta.subcategoria.toUpperCase()}`;
    document.getElementById("detalle-titulo").textContent = receta.titulo;
    document.getElementById("detalle-desc").textContent = receta.descripcion;
    document.getElementById("detalle-tiempo").textContent = receta.tiempoTexto;
    document.getElementById("detalle-dificultad").textContent = formatearEstrellas(receta.dificultadNivel);
    document.getElementById("detalle-dificultad-etiqueta").textContent = `Dificultad (${receta.dificultadNivel}/5 · ${receta.dificultadTexto})`;
    document.getElementById("detalle-alergenos").textContent = receta.alergenos;
    document.getElementById("detalle-clave").textContent = receta.claveCocina;
    document.getElementById("detalle-resumen-pasos").textContent = `${receta.pasos.length} pasos, de principio a plato`;

    const inputAutor = document.getElementById("input-autor-comentario");
    if (inputAutor && nombreUsuarioLimpio && !inputAutor.value) {
        inputAutor.value = nombreUsuarioLimpio;
    }

    const badgesContenedor = document.getElementById("detalle-badges");
    if (badgesContenedor) {
        const etiquetas = ["100% vegetal", ...receta.alimentacion];
        badgesContenedor.innerHTML = etiquetas.map((et) => `<span>${et}</span>`).join("");
    }

    sincronizarPorcionesUI(true);
    actualizarBotonGuardarDetalle();
    actualizarBotonLikeDetalle();
    renderizarComentarios(receta.id);

    const listaPasos = document.getElementById("detalle-pasos");
    listaPasos.innerHTML = receta.pasos
        .map(
            (paso, idx) => `
            <div class="paso-item">
                <span class="paso-num">${String(idx + 1).padStart(2, "0")}</span>
                <div>
                    <h4>${paso.titulo}</h4>
                    <p>${paso.detalle}</p>
                </div>
            </div>
        `
        )
        .join("");

    const relacionadas = recetas
        .filter((r) => r.categoria === receta.categoria && r.id !== receta.id)
        .slice(0, 2);

    document.getElementById("detalle-relacionadas").innerHTML = relacionadas
        .map(
            (rel) => `
            <article class="card-rel" data-abrir="${rel.id}">
                <img src="${rel.imagen}" alt="${rel.titulo}">
                <div>
                    <span>${rel.categoria.toUpperCase()}</span>
                    <h4>${rel.titulo}</h4>
                    <p>◷ ${rel.tiempoMin} min · <span class="estrellas-dificultad">${formatearEstrellas(rel.dificultadNivel)}</span></p>
                </div>
            </article>
        `
        )
        .join("");

    mostrarVista("detalle");
}

function volverAlCatalogo() {
    recetaActiva = null;
    mostrarVista("catalogo");
}

if (selectTiempo) {
    selectTiempo.addEventListener("change", (e) => {
        filtroTiempo = e.target.value;
        renderizarCatalogo();
    });
}

if (selectAlimentacion) {
    selectAlimentacion.addEventListener("change", (e) => {
        filtroAlimentacion = e.target.value;
        renderizarCatalogo();
    });
}

if (selectCategoria) {
    selectCategoria.addEventListener("change", (e) => {
        filtroCategoria = e.target.value;
        renderizarCatalogo();
    });
}

if (selectDificultad) {
    selectDificultad.addEventListener("change", (e) => {
        filtroDificultad = e.target.value;
        renderizarCatalogo();
    });
}

if (btnLimpiarFiltros) {
    btnLimpiarFiltros.addEventListener("click", () => {
        filtroTiempo = "todos";
        filtroAlimentacion = "Todas";
        filtroCategoria = "Todos";
        filtroDificultad = "Todas";
        textoBusqueda = "";

        selectTiempo.value = "todos";
        selectAlimentacion.value = "Todas";
        selectCategoria.value = "Todos";
        selectDificultad.value = "Todas";
        inputBuscador.value = "";
        renderizarCatalogo();
    });
}

if (btnVaciarGuardadas) {
    btnVaciarGuardadas.addEventListener("click", () => {
        guardadas = [];
        guardarEnStorage();
        renderizarCatalogo();
        renderizarVistaGuardadas();
    });
}

if (inputBuscador) {
    inputBuscador.addEventListener("input", (e) => {
        textoBusqueda = e.target.value;
        renderizarCatalogo();
    });
}

if (btnBuscar) {
    btnBuscar.addEventListener("click", () => {
        textoBusqueda = inputBuscador.value;
        renderizarCatalogo();
    });
}

if (selectOrden) {
    selectOrden.addEventListener("change", (e) => {
        ordenActual = e.target.value;
        renderizarCatalogo();
    });
}

if (chipsActivos) {
    chipsActivos.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-quitar]");
        if (!btn) return;
        const tipo = btn.dataset.quitar;
        if (tipo === "tiempo") {
            filtroTiempo = "todos";
            selectTiempo.value = "todos";
        } else if (tipo === "alimentacion") {
            filtroAlimentacion = "Todas";
            selectAlimentacion.value = "Todas";
        } else if (tipo === "categoria") {
            filtroCategoria = "Todos";
            selectCategoria.value = "Todos";
        } else if (tipo === "dificultad") {
            filtroDificultad = "Todas";
            selectDificultad.value = "Todas";
        } else if (tipo === "busqueda") {
            textoBusqueda = "";
            inputBuscador.value = "";
        }
        renderizarCatalogo();
    });
}

document.getElementById("form-comentario")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!recetaActiva) return;

    const inputAutor = document.getElementById("input-autor-comentario");
    const inputTexto = document.getElementById("input-texto-comentario");
    const autor = inputAutor.value.trim();
    const texto = inputTexto.value.trim();
    if (!autor || !texto) return;

    const clave = String(recetaActiva.id);
    if (!comentariosPorReceta[clave]) {
        comentariosPorReceta[clave] = [];
    }

    comentariosPorReceta[clave].unshift({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        autor,
        texto,
        fecha: new Date().toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })
    });

    guardarComentariosEnStorage();
    inputTexto.value = "";
    renderizarComentarios(recetaActiva.id);
});

document.getElementById("lista-comentarios")?.addEventListener("click", (e) => {
    const btnBorrar = e.target.closest("[data-borrar-comentario]");
    if (!btnBorrar || !recetaActiva) return;

    const clave = String(recetaActiva.id);
    const idComentario = btnBorrar.dataset.borrarComentario;
    comentariosPorReceta[clave] = (comentariosPorReceta[clave] || []).filter((c) => c.id !== idComentario);
    guardarComentariosEnStorage();
    renderizarComentarios(recetaActiva.id);
});

document.addEventListener("click", (e) => {
    if (e.target.closest("#btn-ir-explorar-vacio")) {
        volverAlCatalogo();
        return;
    }

    const btnFav = e.target.closest("[data-fav]");
    if (btnFav) {
        e.stopPropagation();
        alternarGuardada(btnFav.dataset.fav);
        return;
    }

    const cardAbrir = e.target.closest("[data-abrir]");
    if (cardAbrir) {
        abrirDetalle(cardAbrir.dataset.abrir);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && vistaActual !== "catalogo" && document.activeElement !== inputPorciones) {
        volverAlCatalogo();
    }
});

document.getElementById("btn-volver-recetario")?.addEventListener("click", volverAlCatalogo);
document.getElementById("btn-volver-desde-guardadas")?.addEventListener("click", volverAlCatalogo);

document.getElementById("nav-recetario")?.addEventListener("click", (e) => {
    e.preventDefault();
    volverAlCatalogo();
});

document.getElementById("nav-guardadas")?.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarVista("guardadas");
});

document.getElementById("detalle-btn-like")?.addEventListener("click", () => {
    if (recetaActiva) alternarLike(recetaActiva.id);
});

document.getElementById("detalle-btn-guardar")?.addEventListener("click", () => {
    if (recetaActiva) alternarGuardada(recetaActiva.id);
});

document.getElementById("detalle-btn-imprimir")?.addEventListener("click", () => {
    window.print();
});

document.getElementById("detalle-btn-copiar")?.addEventListener("click", async (e) => {
    if (!recetaActiva || !navigator.clipboard) return;
    const factor = porcionesActuales / recetaActiva.porcionesBase;
    const texto = [
        `${recetaActiva.titulo} (${porcionesActuales} ${recetaActiva.unidadPorciones})`,
        "",
        ...recetaActiva.ingredientes.map(
            (i) => `- ${formatearCantidad(i.cantidad * factor)} ${i.unidad} ${i.nombre}`
        )
    ].join("\n");

    await navigator.clipboard.writeText(texto);
    const btn = e.currentTarget;
    const original = btn.textContent;
    btn.textContent = "✓ Lista copiada";
    setTimeout(() => {
        btn.textContent = original;
    }, 1800);
});

document.getElementById("menos-porciones")?.addEventListener("click", () => {
    if (porcionesActuales > 1) {
        porcionesActuales -= 1;
        sincronizarPorcionesUI(true);
    }
});

document.getElementById("mas-porciones")?.addEventListener("click", () => {
    porcionesActuales += 1;
    sincronizarPorcionesUI(true);
});

inputPorciones?.addEventListener("input", (e) => {
    const valor = Number(e.target.value);
    if (!Number.isNaN(valor) && valor >= 1) {
        porcionesActuales = Math.min(Math.floor(valor), 500);
        sincronizarPorcionesUI(false);
    }
});

inputPorciones?.addEventListener("blur", () => {
    if (!inputPorciones.value || Number(inputPorciones.value) < 1) {
        porcionesActuales = 1;
    }
    sincronizarPorcionesUI(true);
});

guardarEnStorage();
renderizarCatalogo();