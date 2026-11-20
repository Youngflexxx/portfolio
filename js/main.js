/* Lógica del portfolio — ver skills persona4-theme y portfolio-i18n antes de editar */
(function () {
  "use strict";

  const LANG_KEY = "p4-lang";
  let currentLang = "es";

  const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key;

  function detectLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (e) { /* localStorage no disponible */ }
    return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  }

  /* ---------- Render de project cards (tarot) ---------- */
  function projectCard(p) {
    const lang = currentLang;
    const starsChip = p.stars > 0
      ? `<span class="chip-stars"><span>★ ${p.stars}</span></span>`
      : "";
    const note = p.note
      ? `<p class="back-note"><strong>${t("projects.notice")}:</strong> ${p.note[lang]}</p>`
      : "";
    const features = p.features[lang]
      .map((f) => `<li>${f}</li>`)
      .join("");
    const stack = p.stack
      .map((s) => `<span>${s}</span>`)
      .join("");

    return `
      <article class="tarot" data-id="${p.id}" role="button" tabindex="0"
               aria-pressed="false" aria-label="${p.repo} — ${t("projects.flip")}">
        <div class="tarot-inner">
          <div class="tarot-face tarot-front">
            <span class="corner c-tl"></span><span class="corner c-tr"></span>
            <span class="corner c-bl"></span><span class="corner c-br"></span>
            <div class="tarot-frame">
              <span class="tarot-roman">${p.arcana.roman}</span>
              <h3 class="tarot-arcana">${p.arcana[lang]}</h3>
              <div class="tarot-rule" aria-hidden="true"></div>
              <p class="tarot-repo">${p.repo}</p>
              <div class="tarot-meta">
                <span class="chip-lang"><span>${p.language}</span></span>
                ${starsChip}
              </div>
              <span class="tarot-flip-hint">↻ ${t("projects.flip")}</span>
            </div>
          </div>
          <div class="tarot-face tarot-back">
            <div class="tarot-back-scroll">
              <header class="back-head">
                <span class="back-roman">${p.arcana.roman}</span>
                <div>
                  <h3>${p.repo}</h3>
                  <p class="back-arcana">${p.arcana[lang]} · ${p.language}</p>
                </div>
              </header>
              <p class="back-desc">${p.desc[lang]}</p>
              <ul class="back-features">${features}</ul>
              <div class="back-stack">${stack}</div>
              ${note}
              <a class="btn-p4 back-gh" href="${p.url}" target="_blank" rel="noopener">${t("projects.github")} ↗</a>
            </div>
          </div>
        </div>
      </article>`;
  }

  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = PROJECTS.map(projectCard).join("");
    grid.querySelectorAll(".tarot").forEach(bindFlip);
  }

  function bindFlip(card) {
    const toggle = () => {
      const flipped = card.classList.toggle("flipped");
      card.setAttribute("aria-pressed", String(flipped));
    };
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // los enlaces voltean a su destino
      toggle();
    });
    card.addEventListener("keydown", (e) => {
      if (e.target.closest("a")) return; // el foco está en el enlace: no interceptar
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  }

  /* ---------- Render de skills ---------- */
  function renderSkills() {
    const host = document.getElementById("skills-groups");
    if (!host) return;
    host.innerHTML = SKILLS.map((group) => {
      const chips = group.items
        .map((item) => `<span class="skill-chip"><span>${item[currentLang]}</span></span>`)
        .join("");
      return `<div class="skill-group reveal"><h3>${group.title[currentLang]}</h3><div>${chips}</div></div>`;
    }).join("");
  }

  /* ---------- i18n ---------- */
  function applyLang(lang, animate) {
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignorar */ }
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    renderProjects();
    renderSkills();
    observeReveals();

    if (animate) {
      document.body.classList.remove("p4-flicker");
      void document.body.offsetWidth; // reiniciar animación
      document.body.classList.add("p4-flicker");
      setTimeout(() => document.body.classList.remove("p4-flicker"), 400);
    }
  }

  /* ---------- Entradas animadas ---------- */
  let revealObserver = null;

  function observeReveals() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- TV static (Midnight Channel) ---------- */
  function initStatic() {
    const canvas = document.getElementById("tv-static");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = (canvas.width = 180);
    const H = (canvas.height = 100);

    const draw = () => {
      const img = ctx.createImageData(W, H);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        d[i] = d[i + 1] = d[i + 2] = v;
        d[i + 3] = 46;
      }
      ctx.putImageData(img, 0, 0);
    };

    draw();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setInterval(draw, 85); // ~12 fps
  }

  /* ---------- Nav ---------- */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.lang !== currentLang) applyLang(btn.dataset.lang, true);
      });
    });

    // Scroll spy: resaltar la sección visible
    const links = Array.from(document.querySelectorAll(".nav-link"));
    const sections = links
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => {
              l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id);
            });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach((s) => spy.observe(s));
    }
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    applyLang(detectLang(), false);
    initNav();
    initStatic();
    observeReveals();
  });
})();
