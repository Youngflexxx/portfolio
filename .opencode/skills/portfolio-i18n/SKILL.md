---
name: Portfolio i18n ES/EN
description: Sistema de doble idioma (es/en) del portfolio: diccionario, atributos data-i18n, render de proyectos y persistencia. Usar al añadir textos o cambiar idiomas.
---

# i18n ES/EN

Regla de oro: NINGÚN texto visible se escribe hardcodeado en HTML. Todo pasa por el diccionario.

## Archivos

- `js/i18n.js` → `I18N = { es: {...}, en: {...} }` con claves planas (`nav.home`, `hero.tagline`, ...). Ambos idiomas se cargan en RAM.
- `js/data.js` → proyectos con campos `{ es, en }` (`arcana`, `desc`, `features`, `note`).
- `js/main.js` → `applyLang(lang)`: recorre `[data-i18n]` (textContent) y `[data-i18n-html]` (innerHTML, para marcas como `<span class="hl">`), actualiza `<html lang>`, re-renderiza `#projects-grid` y `#skills-groups`, y guarda `localStorage["p4-lang"]`.

## Atributos en HTML

```html
<span data-i18n="hero.tagline"></span>
<h2 data-i18n-html="projects.title"></h2>
<span data-i18n-aria="nav.menu"></span>
```

- El contenido literal dentro del tag se ignora (se sobreescribe al cargar); sirve como placeholder.
- Claves nuevas: añadir SIEMPRE en `es` y `en` (si falta, queda vacío; no se mezcla idioma).

## Interruptor

- En el nav: dos botones `.lang-btn` (ES|EN), el activo en amarillo. Atributo `data-lang="es|en"`.
- Al cambiar: `applyLang` + clase `p4-flicker` en `<body>` por ~300ms (transición tipo TV).
- Idioma inicial: `localStorage` → `navigator.language.startsWith("es")` → `es`.

## Añadir un texto nuevo

1. Crear la clave en AMBOS mapas de `I18N` (es y en).
2. Añadir `data-i18n="clave"` al elemento en `index.html`.
3. Probar el interruptor: no debe quedar clave sin traducir ni texto visible en un solo idioma.
