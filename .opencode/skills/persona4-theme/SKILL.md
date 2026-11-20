---
name: Persona 4 Golden Theme
description: Sistema de diseño Persona 4 Golden del portfolio (colores, tipografía, patrones, componentes y efectos). Usar al crear o modificar cualquier parte visual del sitio para mantener la estética.
---

# Tema Persona 4 Golden

Estética del sitio: menús de Persona 4 Golden — alto contraste, diagonales, tiras de halftone, recortes angulares y acentos rojos muy puntuales. Nada de esquinas redondeadas salvo que se indique.

## Paleta

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-p4-yellow` | `#FFC900` | Color primario: títulos, botones, sección Skills |
| `--color-p4-yellow-deep` | `#E6B400` | Hover/sombra del amarillo |
| `--color-p4-black` | `#111111` | Fondos oscuros, texto sobre amarillo |
| `--color-p4-ink` | `#1A1A1A` | Superficie oscura secundaria (About) |
| `--color-p4-white` | `#FFFFFF` | Texto sobre oscuro |
| `--color-p4-red` | `#E60012` | Acento único y escaso: sombras de ataque, alertas |

Reglas: el rojo solo como sombra/acento fino; sobre amarillo siempre texto negro; sobre negro texto blanco o amarillo.

## Tipografía (Google Fonts)

- **Display**: `Anton` → `font-display` — títulos, nav, cifras romanas. SIEMPRE mayúsculas.
- **Cuerpo**: `Barlow` → `font-body` — párrafos y UI.
- **Decorativa JP**: `Noto Sans JP` → `font-jp` — solo textos decorativos en japonés (subtítulos de sección), nunca información crítica.

Título hero: color amarillo + `-webkit-text-stroke: 2px #111` + `text-shadow: 6px 6px 0 #E60012`.

## Patrones

- **Halftone**: `radial-gradient(#111 1.5px, transparent 1.5px)` con `background-size: 14px 14px` — sección Skills (negro sobre amarillo) y detalles.
- **Tiras diagonales**: `repeating-linear-gradient(-45deg, #FFC900 0 20px, #111 20px 40px)` — separadores de 16–24px entre secciones.
- **Recortes angulares**: `clip-path` o `transform: skewX(-12deg)` (texto interior con `skewX(12deg)`). Botones, nav y chips.
- **Scanlines**: líneas horizontales semitransparentes sobre el hero.

## Componentes

- **Nav**: barra negra, items en paralelogramo, activo = amarillo con texto negro. Marca = icono de gafas (SVG line-art, original).
- **Botón `.btn-p4`**: amarillo/negro con corte diagonal; hover = invertir colores + sombra roja desplazada.
- **Tarot card**: flip 3D en click (`perspective` + `preserve-3d` + `backface-visibility`). Frente = numeral romano + nombre del arcano; dorso = ficha del proyecto con scroll si hace falta.
- **Chips de skill**: negro con texto amarillo, corte en esquina, agrupados por categoría.

## Efectos

- **TV static**: canvas `#tv-static` con ruido generado a baja frecuencia (~12 fps), `image-rendering: pixelated`, cubre el hero. Pausar si `prefers-reduced-motion`.
- **Entradas**: IntersectionObserver → `.in` (fade + slide-up 30px).
- **Cambio de idioma**: parpadeo rápido tipo TV (clase `p4-flicker` 300ms).

## Prohibido

- Esquinas redondeadas (excepto iconos internos), degradados suaves, sombras difusas grises, fuentes serif.
- Usar assets gráficos del juego (copyright): TODO el arte es CSS/SVG original inspirado en la estética.
- Texto pequeño en amarillo sobre blanco o amarillo sobre negro sin contraste suficiente.

## Verificación

Al terminar un cambio visual: `npm run build` (regenera `css/style.css` con Tailwind) y recargar el sitio. Las clases nuevas se declaran en `src/input.css`, no se inlinean en el HTML salvo utilidades Tailwind estándar.
