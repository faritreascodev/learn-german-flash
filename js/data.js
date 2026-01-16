window.CourseData = [
    // --- NIVEL 1: BASES ---
    {
        id: "basics_1",
        title: "1. Primeros Pasos",
        icon: "flag",
        description: "Pronunciación, alfabeto completo y saludos esenciales.",
        lessons: [
            {
                type: "info",
                title: "Willkommen!",
                content: "El alemán es la lengua más hablada en la Unión Europea. Aunque tiene fama de difícil, es muy lógica. Hoy sentarás las bases de tu éxito.",
                tip: "En alemán, los sustantivos (Cosas, Personas) SIEMPRE se escriben con Mayúscula."
            },
            {
                type: "grid",
                title: "Alfabeto (A - M)",
                instruction: "Toca cada tarjeta para escuchar la pronunciación.",
                items: [
                    { de: "A", sub: "a" }, { de: "B", sub: "be" }, { de: "C", sub: "tse" },
                    { de: "D", sub: "de" }, { de: "E", sub: "e" }, { de: "F", sub: "ef" },
                    { de: "G", sub: "gue" }, { de: "H", sub: "ja" }, { de: "I", sub: "i" },
                    { de: "J", sub: "yot" }, { de: "K", sub: "ka" }, { de: "L", sub: "el" },
                    { de: "M", sub: "em" }
                ]
            },
            {
                type: "grid",
                title: "Alfabeto (N - Z)",
                instruction: "Ojo con la V (suena F) y la W (suena V vibrante).",
                items: [
                    { de: "N", sub: "en" }, { de: "O", sub: "o" }, { de: "P", sub: "pe" },
                    { de: "Q", sub: "ku" }, { de: "R", sub: "ea" }, { de: "S", sub: "es" },
                    { de: "T", sub: "te" }, { de: "U", sub: "u" }, { de: "V", sub: "fao (F)" },
                    { de: "W", sub: "ve (V)" }, { de: "X", sub: "iks" }, { de: "Y", sub: "üpsilon" },
                    { de: "Z", sub: "tset" }
                ]
            },
            {
                type: "special",
                title: "Caracteres Especiales",
                instruction: "Los 'Umlaut' y la Eszett.",
                items: [
                    { char: "Ä", sound: "ae (E abierta)", ex: "Käse" },
                    { char: "Ö", sound: "oe (Boca de O, di E)", ex: "Löffel" },
                    { char: "Ü", sound: "ue (Boca de U, di I)", ex: "Müll" },
                    { char: "ß", sound: "ss (Eszett)", ex: "Straße" }
                ]
            },
            {
                type: "vocab",
                title: "Saludos y Despedidas",
                items: [
                    { de: "Hallo", es: "Hola" },
                    { de: "Guten Morgen", es: "Buenos días (mañana)" },
                    { de: "Guten Tag", es: "Buenas tardes / Buen día" },
                    { de: "Guten Abend", es: "Buenas noches (llegada)" },
                    { de: "Gute Nacht", es: "Buenas noches (al dormir)" },
                    { de: "Tschüss", es: "Chau (informal)" },
                    { de: "Auf Wiedersehen", es: "Adiós (formal)" },
                    { de: "Bis bald", es: "Hasta pronto" }
                ]
            }
        ]
    },

    // --- NIVEL 2: SUPERVIVENCIA ---
    {
        id: "basics_2",
        title: "2. Kit de Supervivencia",
        icon: "life-buoy",
        description: "Frases para cuando no entiendes nada.",
        lessons: [
            {
                type: "vocab",
                title: "Frases de Emergencia",
                items: [
                    { de: "Ich verstehe nicht", es: "No entiendo" },
                    { de: "Wie bitte?", es: "¿Cómo? / ¿Perdón?" },
                    { de: "Sprechen Sie Spanisch?", es: "¿Habla usted español?" },
                    { de: "Sprechen Sie Englisch?", es: "¿Habla usted inglés?" },
                    { de: "Einen Moment, bitte", es: "Un momento, por favor" },
                    { de: "Hilfe!", es: "¡Ayuda!" }
                ]
            },
            {
                type: "vocab",
                title: "Cortesía Alemana",
                items: [
                    { de: "Danke", es: "Gracias" },
                    { de: "Vielen Dank", es: "Muchas gracias" },
                    { de: "Bitte", es: "Por favor / De nada" },
                    { de: "Entschuldigung", es: "Disculpe / Perdón" },
                    { de: "Kein Problem", es: "No hay problema" },
                    { de: "Genau", es: "Exacto (muy usado)" }
                ]
            }
        ]
    },

    // --- NIVEL 3: PERSONAS Y VERBOS ---
    {
        id: "people",
        title: "3. Yo y Tú (Verbos)",
        icon: "user",
        description: "Pronombres y el verbo más importante: Sein.",
        lessons: [
            {
                type: "grammar_box",
                title: "Pronombres Personales",
                content: [
                    { l: "Ich", r: "Yo" }, { l: "Wir", r: "Nosotros" },
                    { l: "Du", r: "Tú (informal)" }, { l: "Ihr", r: "Vosotros" },
                    { l: "Er/Sie/Es", r: "Él/Ella/Neutro" }, { l: "sie/Sie", r: "ellos / Usted" }
                ]
            },
            {
                type: "verb",
                title: "Verbo Sein (Ser/Estar)",
                instruction: "Es irregular. ¡Memorízalo!",
                conjugation: [
                    { p: "Ich", v: "bin", ex: "Ich bin glücklich (Soy feliz)" },
                    { p: "Du", v: "bist", ex: "Du bist hier (Estás aquí)" },
                    { p: "Er/Sie", v: "ist", ex: "Er ist Arzt (Él es médico)" },
                    { p: "Wir", v: "sind", ex: "Wir sind Freunde (Somos amigos)" },
                    { p: "Ihr", v: "seid", ex: "Ihr seid nett (Sois amables)" },
                    { p: "Sie", v: "sind", ex: "Sie sind Herr Müller (Usted es...)" }
                ]
            },
            {
                type: "input_practice",
                title: "Practica: Presentarse",
                placeholder: "Tu nombre...",
                prefix: "Ich bin",
                feedback: "Bien. También puedes decir 'Ich heiße...'"
            }
        ]
    },

    // --- NIVEL 4: NÚMEROS Y TIEMPO ---
    {
        id: "numbers",
        title: "4. Números y Dinero",
        icon: "hash",
        description: "Contar, precios y la lógica alemana de números.",
        lessons: [
            {
                type: "grid",
                title: "Zahlen 0-12",
                instruction: "Los básicos.",
                items: [
                    { de: "0", sub: "null" }, { de: "1", sub: "eins" }, { de: "2", sub: "zwei" },
                    { de: "3", sub: "drei" }, { de: "4", sub: "vier" }, { de: "5", sub: "fünf" },
                    { de: "6", sub: "sechs" }, { de: "7", sub: "sieben" }, { de: "8", sub: "acht" },
                    { de: "9", sub: "neun" }, { de: "10", sub: "zehn" }, { de: "11", sub: "elf" }, { de: "12", sub: "zwölf" }
                ]
            },
            {
                type: "info",
                title: "La Lógica del Revés",
                content: "Del 21 al 99, los alemanes dicen la unidad PRIMERO y luego la decena. Ejemplo: 21 es 'Uno y veinte' (Einundzwanzig).",
                tip: "Es al revés que en español. ¡Acostúmbrate!"
            },
            {
                type: "vocab",
                title: "Números Grandes",
                items: [
                    { de: "20", es: "zwanzig" },
                    { de: "21", es: "ein-und-zwanzig" },
                    { de: "30", es: "dreißig (ojo con la ß)" },
                    { de: "40", es: "vierzig" },
                    { de: "50", es: "fünfzig" },
                    { de: "100", es: "hundert" },
                    { de: "1000", es: "tausend" }
                ]
            }
        ]
    },

    // --- NIVEL 5: GRAMÁTICA BÁSICA ---
    {
        id: "grammar_1",
        title: "5. El Género (Der, Die, Das)",
        icon: "award",
        description: "El reto más grande: Los artículos.",
        lessons: [
            {
                type: "info",
                title: "Tres Géneros",
                content: "En alemán hay 3 géneros: Masculino (Der), Femenino (Die) y Neutro (Das). ¡No siempre coinciden con el español!",
                tip: "Apréndete cada palabra nueva con su artículo. Es vital."
            },
            {
                type: "grid",
                title: "Ejemplos Comunes",
                instruction: "Fíjate que 'Niña' es neutro.",
                items: [
                    { de: "Der Mann", sub: "El hombre" },
                    { de: "Die Frau", sub: "La mujer" },
                    { de: "Das Kind", sub: "El niño/a (Neutro)" },
                    { de: "Das Auto", sub: "El auto" },
                    { de: "Der Apfel", sub: "La manzana" },
                    { de: "Die Sonne", sub: "El sol" }
                ]
            },
            {
                type: "grammar_box",
                title: "Artículos Indefinidos (Un/Una)",
                content: [
                    { l: "Ein Mann", r: "Un hombre (Masc)" },
                    { l: "Eine Frau", r: "Una mujer (Fem)" },
                    { l: "Ein Kind", r: "Un niño (Neutro)" }
                ]
            }
        ]
    },

    // --- NIVEL 6: CONVERSACIONES ---
    {
        id: "conv_cafe",
        title: "6. En el Café / Restaurante",
        icon: "volume-2",
        description: "Pedir comida y pagar.",
        lessons: [
            {
                type: "vocab",
                title: "Vocabulario Clave",
                items: [
                    { de: "Das Wasser", es: "El agua" },
                    { de: "Das Bier", es: "La cerveza" },
                    { de: "Der Kaffee", es: "El café" },
                    { de: "Die Rechnung", es: "La cuenta" },
                    { de: "Ich möchte...", es: "Me gustaría / Quisiera..." }
                ]
            },
            {
                type: "dialogue",
                title: "Pidiendo la orden",
                lines: [
                    { speaker: "A", de: "Hallo, was möchten Sie?", es: "Hola, ¿qué desea?" },
                    { speaker: "B", de: "Ich möchte einen Kaffee, bitte.", es: "Quisiera un café, por favor." },
                    { speaker: "A", de: "Mit Milch und Zucker?", es: "¿Con leche y azúcar?" },
                    { speaker: "B", de: "Nur mit Milch, danke.", es: "Solo con leche, gracias." }
                ]
            },
            {
                type: "dialogue",
                title: "Pagando la cuenta",
                lines: [
                    { speaker: "B", de: "Die Rechnung, bitte.", es: "La cuenta, por favor." },
                    { speaker: "A", de: "Zusammen oder getrennt?", es: "¿Juntos o separado?" },
                    { speaker: "B", de: "Zusammen, bitte.", es: "Juntos, por favor." },
                    { speaker: "A", de: "Das macht 10 Euro.", es: "Son 10 euros." }
                ]
            }
        ]
    },

    // --- NIVEL 7: FAMILIA Y POSESIVOS ---
    {
        id: "family",
        title: "7. Mi Familia",
        icon: "user",
        description: "Hablar de padres, hermanos y posesivos.",
        lessons: [
            {
                type: "vocab",
                title: "Miembros de la familia",
                items: [
                    { de: "Der Vater / Die Mutter", es: "El padre / La madre" },
                    { de: "Die Eltern", es: "Los padres" },
                    { de: "Der Bruder / Die Schwester", es: "Hermano / Hermana" },
                    { de: "Der Sohn / Die Tochter", es: "Hijo / Hija" },
                    { de: "Oma / Opa", es: "Abuela / Abuelo" }
                ]
            },
            {
                type: "grammar_box",
                title: "Posesivos (Mi...)",
                content: [
                    { l: "Mein Vater", r: "Mi padre (Masc)" },
                    { l: "Meine Mutter", r: "Mi madre (Fem - añade 'e')" },
                    { l: "Dein Vater", r: "Tu padre" },
                    { l: "Deine Mutter", r: "Tu madre" }
                ]
            },
            {
                type: "input_practice",
                title: "Práctica Posesivos",
                placeholder: "Meine...",
                prefix: "Das ist",
                feedback: "¡Bien! Recuerda: Meine para femenino, Mein para masculino."
            }
        ]
    },

    // --- NIVEL 8: PRÁCTICA GAMIFICADA ---
    {
        id: "practice_game",
        title: "8. Práctica Intensiva",
        icon: "check",
        description: "Ejercicios rápidos para afianzar todo.",
        lessons: [
            {
                type: "quiz",
                title: "Quiz Rápido 1",
                questions: [
                    { q: "¿Cómo se dice 'Gracias'?", options: ["Bitte", "Danke", "Hallo"], ans: 1 },
                    { q: "'Die Frau' es...", options: ["Masculino", "Femenino", "Neutro"], ans: 1 },
                    { q: "¿Qué número es 'Fünf'?", options: ["15", "5", "50"], ans: 1 },
                    { q: "El plural de 'Ich' es...", options: ["Du", "Wir", "Ihr"], ans: 1 }
                ]
            },
            {
                type: "quiz",
                title: "Quiz de Supervivencia",
                questions: [
                    { q: "Traduce: 'No entiendo'", options: ["Ich weiß nicht", "Ich verstehe nicht", "Keine Ahnung"], ans: 1 },
                    { q: "¿Cómo pides la cuenta?", options: ["Das Geld", "Die Rechnung, bitte", "Bezahlen"], ans: 1 },
                    { q: "'Entschuldigung' significa...", options: ["Adiós", "Perdón", "Salud"], ans: 1 }
                ]
            }
        ]
    },

    // --- EVALUACIÓN FINAL ---
    {
        id: "final_exam",
        title: "Examen Final A1.1",
        icon: "award",
        description: "Demuestra que estás listo para A1.2",
        lessons: [
            {
                type: "info",
                title: "Instrucciones",
                content: "Este examen cubre todo lo visto. Si fallas, revisa las lecciones anteriores. ¡Viel Glück! (¡Buena suerte!)",
                tip: "Tómate tu tiempo."
            },
            {
                type: "quiz",
                title: "Examen Final",
                questions: [
                    { q: "¿Cuál es el artículo de 'Auto'?", options: ["Der", "Die", "Das"], ans: 2 },
                    { q: "Conjugación correcta: Du ___", options: ["bin", "bist", "ist"], ans: 1 },
                    { q: "¿Qué significa 'Guten Abend'?", options: ["Buenos días", "Buenas tardes", "Buenas noches"], ans: 2 },
                    { q: "Traduce: 'Me gustaría una cerveza'", options: ["Ich möchte ein Bier", "Ich will Bier", "Ein Bier"], ans: 0 },
                    { q: "Número 90 en alemán:", options: ["Neun", "Neunzig", "Neunzehn"], ans: 1 },
                    { q: "¿Cómo se pronuncia la 'V' en 'Vater'?", options: ["Como V inglesa", "Como F", "Como B"], ans: 1 },
                    { q: "El plural formal de 'Usted' es...", options: ["du", "ihr", "Sie"], ans: 2 },
                    { q: "'Mi madre' en alemán es:", options: ["Mein Mutter", "Meine Mutter", "Meinen Mutter"], ans: 1 }
                ]
            }
        ]
    }
];
