# 🎴 Youngflexxx — Portfolio

Portafolio personal con estética de **Persona 4 Golden**: tarot cards que giran, Midnight Channel (TV static) y un interruptor ES/EN.

**En vivo:** [Pronto en Vercel]()

## Proyectos incluidos

| Arcano | Repo | Stack |
|--------|------|-------|
| II · El Mago | [prototipo-de-bot-pokemmo](https://github.com/Youngflexxx/prototipo-de-bot-pokemmo) | Python, OpenCV, pytest |
| V · El Hierofante | [SAGAFLEX](https://github.com/Youngflexxx/SAGAFLEX) | PHP 8, SQLite, Tailwind CSS |

## Stack

- HTML + CSS + JavaScript (sin frameworks)
- [Tailwind CSS v4](https://tailwindcss.com) compilado a `css/style.css`
- Google Fonts: Anton, Barlow, Noto Sans JP
- Diccionario bilingüe ES/EN en `js/i18n.js`

## Desarrollo local

```bash
npm install        # solo la primera vez
npm run build      # compilar src/input.css → css/style.css
npm run dev        # modo watch
```

Luego abre `index.html` en el navegador (no requiere servidor).

## Estructura

```
├── index.html            # Única página
├── src/input.css         # Fuente de verdad del CSS (Tailwind + tema P4G)
├── css/style.css         # CSS compilado (no editar a mano)
├── js/
│   ├── i18n.js           # Diccionario ES/EN
│   ├── data.js           # Proyectos y skills (curado, bilingüe)
│   └── main.js           # Render, flip de tarjetas, TV static, idioma
├── assets/favicon.svg
└── .opencode/skills/     # Skills de OpenCode (tema, GitHub, i18n)
```

## Añadir un proyecto

Añade una entrada en `PROJECTS` (`js/data.js`) con todos los campos en ES y EN. Ver skill `github-projects`.

## Nota legal

Diseño original inspirado en la estética de Persona 4 Golden (Atlus). No se usan assets del juego.
