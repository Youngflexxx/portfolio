/* Datos curados de proyectos y habilidades — ver skill github-projects antes de editar */
const PROJECTS = [
  {
    id: "pokemmo-bot",
    repo: "prototipo-de-bot-pokemmo",
    url: "https://github.com/Youngflexxx/prototipo-de-bot-pokemmo",
    language: "Python",
    stars: 0,
    pushed: "2026-11-20",
    arcana: { roman: "II", es: "El Mago", en: "The Magician" },
    desc: {
      es: "Prototipo de bot de automatización para PokéMMO: patrulla el mapa, detecta combates por visión artificial y los gestiona de forma autónoma con lógica anti-detección basada en timings humanos.",
      en: "PokéMMO automation bot prototype: it patrols the map, detects battles through computer vision and handles them autonomously with human-like anti-detection timing logic."
    },
    features: {
      es: [
        "Máquina de estados PATROL → COMBAT → LOW_PP → STOPPED",
        "Detección del menú de combate con OpenCV (template matching)",
        "Anti-detección: pausas gaussianas, micro-movimientos y jitter",
        "Kill-switch con la tecla Q y control automático de PP",
        "Configuración en YAML y suite de tests con pytest"
      ],
      en: [
        "State machine: PATROL → COMBAT → LOW_PP → STOPPED",
        "Battle menu detection with OpenCV template matching",
        "Anti-detection: gaussian pauses, micro-movements and jitter",
        "Q-key kill-switch and automatic PP management",
        "YAML configuration and a pytest test suite"
      ]
    },
    stack: ["Python", "OpenCV", "PyYAML", "pydirectinput", "pytest"],
    note: {
      es: "Usar bots puede violar los Términos de Servicio de PokéMMO. Proyecto de estudio; úsalo bajo tu responsabilidad y solo en entornos de prueba.",
      en: "Using bots may violate PokéMMO's Terms of Service. Study project; use at your own risk and only in test environments."
    }
  },
  {
    id: "sagaflex",
    repo: "SAGAFLEX",
    url: "https://github.com/Youngflexxx/SAGAFLEX",
    language: "PHP",
    stars: 1,
    pushed: "2026-11-20",
    arcana: { roman: "V", es: "El Hierofante", en: "The Hierophant" },
    desc: {
      es: "Red social tipo tablón de mensajes (proyecto académico): registro e inicio de sesión, CRUD de posts con categorías y privacidad, likes, perfiles con bio y foto, regla anti-spam y diseño retro.",
      en: "Message-board style social network (academic project): sign up and log in, post CRUD with categories and privacy, likes, profiles with bio and photo, anti-spam rule and a retro design."
    },
    features: {
      es: [
        "Auth con bcrypt, regeneración de sesión y cookies httponly",
        "CSRF en toda acción POST y salida escapada contra XSS",
        "CRUD de posts paginado (20/página) con categorías y privacidad",
        "Perfiles con bio y foto, likes y regla de negocio anti-spam",
        "SQLite autogestionado + router que bloquea archivos sensibles"
      ],
      en: [
        "Auth with bcrypt, session regeneration and httponly cookies",
        "CSRF on every POST action and escaped output against XSS",
        "Paginated post CRUD (20/page) with categories and privacy",
        "Profiles with bio and photo, likes and an anti-spam business rule",
        "Self-managed SQLite + router that blocks sensitive files"
      ]
    },
    stack: ["PHP 8", "SQLite", "Tailwind CSS", "Petite-Vue"],
    note: null
  }
];

const SKILLS = [
  {
    title: { es: "Lenguajes", en: "Languages" },
    items: [
      { es: "Python", en: "Python" },
      { es: "PHP 8", en: "PHP 8" },
      { es: "JavaScript", en: "JavaScript" },
      { es: "SQL", en: "SQL" },
      { es: "HTML5 · CSS3", en: "HTML5 · CSS3" }
    ]
  },
  {
    title: { es: "Frontend", en: "Frontend" },
    items: [
      { es: "Tailwind CSS", en: "Tailwind CSS" },
      { es: "Petite-Vue", en: "Petite-Vue" },
      { es: "Diseño responsive", en: "Responsive design" },
      { es: "Interfaces accesibles", en: "Accessible interfaces" }
    ]
  },
  {
    title: { es: "Backend y herramientas", en: "Backend & tools" },
    items: [
      { es: "SQLite", en: "SQLite" },
      { es: "Git · GitHub", en: "Git · GitHub" },
      { es: "pytest", en: "pytest" },
      { es: "Windows · Linux", en: "Windows · Linux" }
    ]
  },
  {
    title: { es: "Áreas", en: "Fields" },
    items: [
      { es: "Visión artificial", en: "Computer vision" },
      { es: "Automatización", en: "Automation" },
      { es: "Seguridad web", en: "Web security" },
      { es: "CSRF · XSS · bcrypt", en: "CSRF · XSS · bcrypt" }
    ]
  }
];
