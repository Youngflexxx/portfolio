---
name: GitHub Projects Data
description: Consultar y actualizar los proyectos de GitHub (Youngflexxx) que alimentan el portfolio. Usar cuando se agreguen, eliminen o actualicen proyectos.
---

# Datos de proyectos (GitHub)

Fuente de verdad de lo que se muestra: `js/data.js` (contenido bilingüe curado). La GitHub API solo sirve para metadata viva (stars, fecha, lenguaje).

## Entorno

- NO hay CLI `gh` instalado en esta máquina. Usar la GitHub REST API por HTTPS (`fetch` desde el tool `execute`, o `webfetch`).
- Sin token: límite de 60 peticiones/hora por IP.

## Endpoints

| Qué | URL |
|-----|-----|
| Repos del usuario | `https://api.github.com/users/Youngflexxx/repos?per_page=100&sort=updated` |
| README crudo | `https://api.github.com/repos/Youngflexxx/<repo>/readme` con header `Accept: application/vnd.github.raw+json` |
| Metadata de un repo | `https://api.github.com/repos/Youngflexxx/<repo>` |

## Actualizar metadata

1. Llamar al endpoint de repos.
2. En `js/data.js`, por cada proyecto actualizar solo: `language`, `stars`, `pushed` (fecha ISO). NO tocar `desc`, `features`, `stack`, `arcana` (son curados bilingües).
3. Las cards se re-renderizan desde `data.js`; el HTML de la sección Projects es solo el contenedor `#projects-grid`. No editar las cards a mano.

## Añadir un proyecto

1. Obtener README + metadata del repo nuevo.
2. Añadir entrada al array `PROJECTS` en `js/data.js` con todos los campos bilingües (`es`/`en` en `arcana`, `desc`, `features`, `note` si aplica).
3. Asignar un arcano del Tarot mayor libre (numeral romano único entre las cards).
4. Verificar que la card entra en `grid md:grid-cols-2` (si hay 3+, cambiar el grid en `index.html`).
5. Si el repo tiene advertencias importantes (TOS, etc.), reflejarlas en `note`.

## Datos actuales (2026-11-20)

- `prototipo-de-bot-pokemmo` — Python — bot PokéMMO con visión artificial (arcano II, El Mago)
- `SAGAFLEX` — PHP — red social tipo tablón con seguridad (arcano V, El Hierofante)
