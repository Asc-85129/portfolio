(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICON = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.3 21 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.58-2.34 3.22V21H9z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M3 6h18v12H3z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M3 7l9 6 9-6"/></svg>',
    doc: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M6 2h9l5 5v15H6z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M14 2v6h6M9 13h8M9 17h6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ext: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  };

  /* ---------- Hero ---------- */
  function renderHero() {
    const [first, ...rest] = D.name.split(" ");
    const letters = (word, cls) =>
      [...word].map((c, i) => `<span class="ch ${cls}" style="--i:${i + (cls ? first.length + 1 : 0)}">${esc(c)}</span>`).join("");
    $("#hero-name").innerHTML = `${letters(first, "")} ${letters(rest.join(" "), "last")}`;
    $("#hero-name").setAttribute("aria-label", D.name);
    $("#hero-intro").textContent = D.intro;
    $("#hero-cta").innerHTML = `
      <a class="btn btn-primary" href="#projects">See my work ${ICON.arrow}</a>
      <a class="btn" href="${D.links.github}" target="_blank" rel="noopener">${ICON.github} GitHub</a>
      <a class="btn" href="${D.links.linkedin}" target="_blank" rel="noopener">${ICON.linkedin} LinkedIn</a>
      <a class="btn" href="${D.links.resume}" target="_blank" rel="noopener">${ICON.doc} Résumé</a>`;
    $("#nav-resume").href = D.links.resume;
  }

  function typeRoles() {
    const el = $("#role-text");
    if (reduceMotion) { el.textContent = D.roles.join(" · "); return; }
    let r = 0, i = 0, deleting = false;
    (function tick() {
      const word = D.roles[r];
      i += deleting ? -1 : 1;
      el.textContent = word.slice(0, i);
      let wait = deleting ? 28 : 55;
      if (!deleting && i === word.length) { deleting = true; wait = 1800; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % D.roles.length; wait = 300; }
      setTimeout(tick, wait);
    })();
  }

  // Lemniscate of Bernoulli as the rocket's trajectory.
  function drawInfinity() {
    const path = $("#inf-path"), rocket = $("#rocket");
    const cx = 260, cy = 180, a = 175, N = 240, pts = [];
    for (let k = 0; k <= N; k++) {
      const t = (k / N) * Math.PI * 2;
      const d = 1 + Math.sin(t) ** 2;
      pts.push([cx + (a * Math.cos(t)) / d, cy + (a * Math.sin(t) * Math.cos(t)) / d]);
    }
    path.setAttribute("d", "M" + pts.map((p) => p.map((v) => v.toFixed(1)).join(" ")).join(" L"));
    const len = path.getTotalLength();
    if (reduceMotion) { const p = path.getPointAtLength(len * 0.12); rocket.setAttribute("transform", `translate(${p.x} ${p.y})`); return; }
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    const start = performance.now(), drawMs = 2600;
    (function frame(now) {
      const e = now - start;
      const prog = Math.min(1, e / drawMs);
      const eased = 1 - Math.pow(1 - prog, 3);
      path.style.strokeDashoffset = len * (1 - eased);
      const along = prog < 1 ? eased * len : ((e - drawMs) / 9000 * len) % len;
      const p = path.getPointAtLength(along);
      rocket.setAttribute("transform", `translate(${p.x} ${p.y})`);
      requestAnimationFrame(frame);
    })(start);
  }

  /* ---------- Starfield ---------- */
  function starfield() {
    const c = $("#stars"), ctx = c.getContext("2d");
    let w, h, stars = [], shooting = null, mx = 0, my = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
      const n = Math.min(260, Math.floor((innerWidth * innerHeight) / 6000));
      stars = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, z: Math.random() * 0.8 + 0.2, t: Math.random() * 6.28 }));
    }
    resize();
    addEventListener("resize", resize);
    addEventListener("pointermove", (e) => { mx = (e.clientX / innerWidth - 0.5) * 2; my = (e.clientY / innerHeight - 0.5) * 2; });
    const color = () => getComputedStyle(document.documentElement).getPropertyValue("--star").trim() || "#9fbaff";
    let starColor = color();
    new MutationObserver(() => (starColor = color())).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    function draw(time) {
      ctx.clearRect(0, 0, w, h);
      const sy = scrollY * dpr;
      for (const s of stars) {
        const x = (s.x + mx * 14 * s.z * dpr + w) % w;
        const y = (((s.y - sy * s.z * 0.15 + my * 14 * s.z * dpr) % h) + h) % h;
        const tw = reduceMotion ? 0.7 : 0.55 + 0.45 * Math.sin(time / 900 + s.t);
        ctx.globalAlpha = tw * s.z;
        ctx.fillStyle = starColor;
        ctx.beginPath(); ctx.arc(x, y, s.z * 1.3 * dpr, 0, 6.283); ctx.fill();
      }
      if (!reduceMotion) {
        if (!shooting && Math.random() < 0.003) shooting = { x: Math.random() * w * 0.7, y: Math.random() * h * 0.4, l: 0 };
        if (shooting) {
          shooting.l += 14 * dpr;
          const g = ctx.createLinearGradient(shooting.x + shooting.l - 120 * dpr, shooting.y + (shooting.l - 120 * dpr) * 0.45, shooting.x + shooting.l, shooting.y + shooting.l * 0.45);
          g.addColorStop(0, "rgba(242,153,74,0)"); g.addColorStop(1, "rgba(231,194,125,0.9)");
          ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.6 * dpr;
          ctx.beginPath(); ctx.moveTo(shooting.x + shooting.l - 120 * dpr, shooting.y + (shooting.l - 120 * dpr) * 0.45); ctx.lineTo(shooting.x + shooting.l, shooting.y + shooting.l * 0.45); ctx.stroke();
          if (shooting.l > w * 0.6) shooting = null;
        }
      }
      ctx.globalAlpha = 1;
      if (!reduceMotion) requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    if (reduceMotion) addEventListener("resize", () => requestAnimationFrame(draw));
  }

  /* ---------- Sections ---------- */
  function renderStats() {
    $("#stats").innerHTML = D.stats
      .map((s) => `<li class="reveal"><div class="stat-num" data-value="${s.value}" data-decimals="${s.decimals || 0}" data-prefix="${esc(s.prefix || "")}">${esc(s.prefix || "")}0</div><div class="stat-label">${esc(s.label)}</div></li>`)
      .join("");
  }
  function countUp(el) {
    const v = +el.dataset.value, dec = +el.dataset.decimals, pre = el.dataset.prefix;
    if (reduceMotion) { el.textContent = pre + v.toFixed(dec); return; }
    const t0 = performance.now(), dur = 1600;
    (function f(now) {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 4);
      el.textContent = pre + (v * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(f);
    })(t0);
  }

  function renderQuotes() {
    for (const key of ["kalam", "ramanujan"]) {
      const q = D.quotes[key], fig = $("#q-" + key);
      $("blockquote", fig).textContent = q.text;
      $("figcaption", fig).innerHTML = `<strong>${esc(q.by)}</strong><span>${esc(q.role)}</span>`;
    }
    const btn = $("#taxicab"), story = $("#taxicab-story");
    btn.addEventListener("click", () => {
      const open = story.hidden;
      story.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  function renderExperience() {
    $("#experience-list").innerHTML = D.experience
      .map((x) => `
      <li class="tl-item reveal">
        <article class="tl-card">
          <div class="tl-top"><h3 class="tl-org">${esc(x.org)}</h3><span class="tl-period">${esc(x.period)}</span></div>
          <p class="tl-role">${esc(x.role)} <span class="tl-place">· ${esc(x.place)}</span></p>
          <ul class="tl-points">${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <div class="chips">${x.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        </article>
      </li>`).join("");
    $("#education").innerHTML = D.education
      .map((e) => `<li><div class="school">${esc(e.school)}</div><div class="deg">${esc(e.degree)}</div><div class="meta"><span>${esc(e.period)}</span><span>${esc(e.detail)}</span></div></li>`)
      .join("");
  }

  function timelineProgress() {
    const tl = $("#timeline"), fill = $("#timeline-fill"), rocket = $("#timeline-rocket");
    const items = [...tl.querySelectorAll(".tl-item")];
    const r = tl.getBoundingClientRect();
    const mark = innerHeight * 0.6;
    const p = Math.max(0, Math.min(1, (mark - r.top) / r.height));
    fill.style.height = p * 100 + "%";
    rocket.style.top = p * 100 + "%";
    for (const it of items) it.classList.toggle("lit", it.getBoundingClientRect().top + 16 < mark);
  }

  function renderResearch() {
    $("#research-list").innerHTML = D.research
      .map((r, i) => `
      <article class="entry reveal" style="--d:${(i % 3) * 0.08}s">
        <div class="entry-top"><p class="entry-no">Entry ${String(i + 1).padStart(2, "0")}</p><span class="area">${esc(r.area)}</span></div>
        <h3>${esc(r.title)}</h3>
        <p class="subt">${esc(r.subtitle)}</p>
        <p class="txt">${esc(r.text)}</p>
        <p class="venue">${esc(r.venue)}</p>
        ${r.project ? `<button class="entry-link" data-project="${esc(r.project)}">View project ${ICON.arrow}</button>` : ""}
      </article>`).join("");
    $("#research-list").addEventListener("click", (e) => {
      const b = e.target.closest("[data-project]");
      if (b) openProject(b.dataset.project);
    });
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    const cats = ["All", ...new Set(D.projects.map((p) => p.category))];
    $("#filters").innerHTML = cats.map((c, i) => `<button class="filter" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
    $("#project-grid").innerHTML = D.projects
      .map((p, i) => `
      <button class="card reveal" style="--d:${(i % 3) * 0.08}s" data-id="${p.id}" data-cat="${esc(p.category)}" aria-haspopup="dialog">
        <span class="cat">${esc(p.category)}</span>
        <h3>${esc(p.title)}</h3>
        <span class="ctx">${esc(p.context)}</span>
        <p class="desc">${esc(p.short)}</p>
        <span class="chips">${p.stack.slice(0, 5).map((s) => `<span class="chip">${esc(s)}</span>`).join("")}${p.stack.length > 5 ? `<span class="chip">+${p.stack.length - 5}</span>` : ""}</span>
        <span class="more">Objective, stack &amp; results ${ICON.arrow}</span>
      </button>`).join("");

    $("#filters").addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      document.querySelectorAll(".filter").forEach((f) => f.setAttribute("aria-pressed", String(f === b)));
      document.querySelectorAll(".card").forEach((card) => {
        const show = b.dataset.cat === "All" || card.dataset.cat === b.dataset.cat;
        card.classList.toggle("hide", !show);
        if (show) { card.classList.remove("pop-in"); void card.offsetWidth; card.classList.add("pop-in"); }
      });
    });

    const grid = $("#project-grid");
    grid.addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) openProject(c.dataset.id); });
    if (!reduceMotion && matchMedia("(hover: hover)").matches) {
      grid.addEventListener("pointermove", (e) => {
        const c = e.target.closest(".card");
        if (!c) return;
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--ry", (x - 0.5) * 8 + "deg");
        c.style.setProperty("--rx", (0.5 - y) * 8 + "deg");
        c.style.setProperty("--mx", x * 100 + "%");
        c.style.setProperty("--my", y * 100 + "%");
      });
      grid.addEventListener("pointerout", (e) => {
        const c = e.target.closest(".card");
        if (c && !c.contains(e.relatedTarget)) { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); }
      });
    }
  }

  const dlg = $("#project-dialog");
  let lastFocus = null;
  function openProject(id) {
    const p = D.projects.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement && !document.activeElement.closest("#palette") ? document.activeElement : document.querySelector(`.card[data-id="${id}"]`);
    $("#pd-body").innerHTML = `
      <span class="cat">${esc(p.category)}</span>
      <h3 id="pd-title">${esc(p.title)}</h3>
      <p class="ctx">${esc(p.context)}</p>
      <div class="pd-grid">
        <section class="pd-block"><h4>Objective</h4><p>${esc(p.objective)}</p></section>
        <section class="pd-block"><h4>Approach</h4><ol>${p.approach.map((a) => `<li>${esc(a)}</li>`).join("")}</ol></section>
        <section class="pd-block"><h4>Tech stack</h4><div class="chips">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></section>
        <section class="pd-block"><h4>Results</h4><ul class="results">${p.results.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></section>
      </div>
      <div class="pd-links">${p.links.map((l, i) => `<a class="btn ${i === 0 ? "btn-primary" : ""}" href="${l.href}" target="_blank" rel="noopener">${l.label === "GitHub" ? ICON.github : ICON.ext} ${esc(l.label)}</a>`).join("")}</div>`;
    dlg.showModal();
    $(".pd", dlg).scrollTop = 0;
    $("#pd-close").focus();
    if (history.replaceState) history.replaceState(null, "", "#project-" + id);
  }
  function closeProject() { dlg.close(); }
  $("#pd-close").addEventListener("click", closeProject);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeProject(); });
  dlg.addEventListener("close", () => {
    if (history.replaceState) history.replaceState(null, "", "#projects");
    if (lastFocus) lastFocus.focus();
  });

  /* ---------- Honours, volunteering, skills, contact ---------- */
  function renderRest() {
    const glyph = { Space: "✦", Hackathon: "⚑", "Competitive programming": "λ", Olympiad: "∑", Mathematics: "∫", Quant: "σ", Security: "⌘" };
    $("#honours-list").innerHTML = D.achievements
      .map((a, i) => `<li class="honour reveal" style="--d:${(i % 3) * 0.06}s"><span class="badge" aria-hidden="true">${glyph[a.tag] || "★"}</span><div><strong>${esc(a.title)}</strong><span>${esc(a.detail)}</span><br><em>${esc(a.tag)}</em></div></li>`)
      .join("");
    $("#certs").innerHTML = D.certifications.map((c) => `<li>${esc(c)}</li>`).join("");
    $("#vol-list").innerHTML = D.volunteering
      .map((v) => `<article class="vol-card reveal"><p class="period">${esc(v.period)}</p><h3>${esc(v.org)}</h3><p class="role">${esc(v.role)}</p><p>${esc(v.text)}</p>${v.href ? `<a class="vol-link" href="${v.href}" target="_blank" rel="noopener">Visit website ${ICON.arrow}</a>` : ""}</article>`)
      .join("");
    $("#oss-list").innerHTML = D.openSource
      .map((o) => `
      <article class="oss-repo reveal">
        <header class="oss-head">
          <span class="oss-icon">${ICON.github}</span>
          <div><a class="oss-name" href="${o.href}" target="_blank" rel="noopener">${esc(o.repo)}</a><p class="muted">${esc(o.about)}</p></div>
        </header>
        <ul class="oss-prs">${o.prs.map((pr) => `
          <li><a href="${pr.href}" target="_blank" rel="noopener">
            <span class="pr-status ${pr.status === "Merged" ? "merged" : "open"}">${esc(pr.status)}</span>
            <span class="pr-body"><strong>${esc(pr.title)}</strong><span class="muted">${esc(pr.note)}</span></span>
            <span class="pr-meta mono"><span>${esc(pr.stat)}</span><span>${esc(pr.date)}</span></span>
          </a></li>`).join("")}
        </ul>
      </article>`).join("");
    $("#skills-list").innerHTML = D.skills
      .map((g, i) => `<div class="skill-group reveal" style="--d:${i * 0.06}s"><h3>${esc(g.group)}</h3><div class="chips">${g.items.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>`)
      .join("");
    $("#contact-actions").innerHTML = `
      <button class="btn btn-primary" id="copy-email">${ICON.mail} ${esc(D.links.email)}</button>
      <a class="btn" href="${D.links.linkedin}" target="_blank" rel="noopener">${ICON.linkedin} LinkedIn</a>
      <a class="btn" href="${D.links.github}" target="_blank" rel="noopener">${ICON.github} GitHub</a>
      <a class="btn" href="${D.links.resume}" target="_blank" rel="noopener">${ICON.doc} Résumé</a>`;
    $("#copy-email").addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(D.links.email); toast("Email copied to clipboard."); }
      catch (e) { location.href = "mailto:" + D.links.email; }
    });
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Reveal on scroll ---------- */
  function observe() {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("in");
        const num = e.target.querySelector(".stat-num");
        if (num) countUp(num);
        io.unobserve(e.target);
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const links = [...document.querySelectorAll(".nav-links a")];
    const spy = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
  }

  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    $("#progress-bar").style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    $("#nav").classList.toggle("scrolled", scrollY > 20);
    timelineProgress();
  }

  /* ---------- Nav, theme ---------- */
  function navUi() {
    const menu = $("#menu-btn"), links = $("#nav-links");
    menu.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => { if (e.target.closest("a")) { links.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); } });
    $("#theme-btn").addEventListener("click", () => {
      const root = document.documentElement;
      const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
      const next = current === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Command palette ---------- */
  function palette() {
    const pal = $("#palette"), input = $("#palette-input"), list = $("#palette-list");
    const items = [
      ...[...document.querySelectorAll("main section[id]")].filter((s) => s.id !== "top" && $("h2", s)).map((s) => ({ label: $("h2", s).textContent, kind: "Section", go: () => location.hash = s.id })),
      ...D.projects.map((p) => ({ label: p.title, kind: "Project", go: () => { $("#projects").scrollIntoView(); openProject(p.id); } })),
      { label: "Open GitHub", kind: "Link", go: () => open(D.links.github, "_blank", "noopener") },
      { label: "Open LinkedIn", kind: "Link", go: () => open(D.links.linkedin, "_blank", "noopener") },
      { label: "Open résumé", kind: "Link", go: () => open(D.links.resume, "_blank", "noopener") },
      { label: "Toggle theme", kind: "Action", go: () => $("#theme-btn").click() },
    ];
    let shown = items, sel = 0;
    function render() {
      const q = input.value.trim().toLowerCase();
      shown = items.filter((i) => i.label.toLowerCase().includes(q) || i.kind.toLowerCase().includes(q));
      sel = Math.min(sel, Math.max(0, shown.length - 1));
      list.innerHTML = shown.map((i, k) => `<li role="option" aria-selected="${k === sel}" data-k="${k}"><span>${esc(i.label)}</span><small>${i.kind}</small></li>`).join("") || `<li><span class="muted">No matches</span></li>`;
    }
    function run(k) { const it = shown[k]; if (!it) return; pal.close(); setTimeout(it.go, 30); }
    function openPal() { if (pal.open) return; if (dlg.open) dlg.close(); input.value = ""; sel = 0; render(); pal.showModal(); input.focus(); }
    $("#palette-btn").addEventListener("click", openPal);
    input.addEventListener("input", () => { sel = 0; render(); });
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { sel = Math.min(shown.length - 1, sel + 1); render(); e.preventDefault(); }
      else if (e.key === "ArrowUp") { sel = Math.max(0, sel - 1); render(); e.preventDefault(); }
      else if (e.key === "Enter") run(sel);
    });
    list.addEventListener("click", (e) => { const li = e.target.closest("li[data-k]"); if (li) run(+li.dataset.k); });
    pal.addEventListener("click", (e) => { if (e.target === pal) pal.close(); });
    addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.open ? pal.close() : openPal(); }
    });
  }

  /* ---------- 1729 easter egg ---------- */
  let toastTimer;
  function toast(html, ms = 3000) {
    const t = $("#toast");
    t.innerHTML = html;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), ms);
  }
  function easterEgg() {
    let buf = "";
    addEventListener("keydown", (e) => {
      if (e.target.closest && e.target.closest("input, textarea")) return;
      if (!/^\d$/.test(e.key)) return;
      buf = (buf + e.key).slice(-4);
      if (buf === "1729") {
        toast(`<strong>You found the taxicab number.</strong> The smallest number that is a sum of two cubes in two ways. Ramanujan noticed it instantly.<div class="formula">1729 = 1³ + 12³ = 9³ + 10³</div>`, 7000);
        buf = "";
      }
    });
  }

  /* ---------- Boot ---------- */
  renderHero();
  renderStats();
  renderQuotes();
  renderExperience();
  renderResearch();
  renderProjects();
  renderRest();
  navUi();
  palette();
  easterEgg();
  observe();
  typeRoles();
  drawInfinity();
  starfield();
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();
  const m = location.hash.match(/^#project-(.+)$/);
  if (m) openProject(m[1]);
})();
