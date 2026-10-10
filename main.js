// Construit la page à partir de content.js — pas besoin de modifier ce fichier.
(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const flower = '<svg aria-hidden="true"><use href="#tiare"/></svg>';

  document.querySelectorAll("[data-field]").forEach((el) => { el.textContent = S[el.dataset.field] || ""; });

  $("#focus").innerHTML = S.focus.map(esc).reduce((html, word, i) =>
    html + (i === 0 ? "" : i % 2 ? '<span class="sep">•</span>' : "<br>") + word, "");

  const actions = ['<a class="btn solid" href="#projects">View my work</a>'];
  if (S.cv) actions.push(`<a class="btn" href="${esc(S.cv)}" target="_blank" rel="noopener">Download CV</a>`);
  $("#hero-actions").innerHTML = actions.join("");

  $("#about-text").innerHTML = S.about.map((p) => `<p class="reveal">${esc(p)}</p>`).join("");

  $("#experience-list").innerHTML = S.experience.map((job, i) => `
    <li class="job reveal">
      <details${i === 0 ? " open" : ""}>
        <summary>
          <div class="job-when">
            <span class="job-dates">${esc(job.dates)}</span>
            <span class="job-place">${esc(job.place)}</span>
          </div>
          <div>
            <h3>${esc(job.company)}</h3>
            <p class="job-role">${esc(job.role)}</p>
            <p class="job-summary">${esc(job.summary)}</p>
          </div>
          <span class="toggle" aria-hidden="true">+</span>
        </summary>
        <div class="job-details">
          <ul>${job.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
          ${job.image ? `<img src="${esc(job.image)}" alt="${esc(job.company)}" loading="lazy">` : ""}
        </div>
      </details>
    </li>`).join("");

  $("#project-list").innerHTML = S.projects.map((p, i) => `
    <button class="card reveal" type="button" data-project="${i}">
      <div class="card-media">
        ${p.cover
          ? `<img src="${esc(p.cover)}" alt="" loading="lazy">`
          : `<div class="placeholder">${flower}<span>${esc(p.title)}</span></div>`}
      </div>
      <span class="card-tag">${esc(p.tag)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      <span class="card-more">Discover</span>
    </button>`).join("");

  $("#education-list").innerHTML = S.education.map((e) => `
    <div class="school reveal">
      ${e.dates ? `<span class="when">${esc(e.dates)}</span>` : ""}
      <h3>${esc(e.degree)}</h3>
      <p>${esc(e.school)}${e.place ? `<br>${esc(e.place)}` : ""}</p>
      ${e.note ? `<p>${esc(e.note)}</p>` : ""}
    </div>`).join("");

  $("#beyond-list").innerHTML = S.beyond.map((b) => `<dt>${esc(b.label)}</dt><dd>${esc(b.value)}</dd>`).join("");
  $("#beyond-list").classList.add("reveal");

  const contact = [`<a class="btn solid" href="mailto:${esc(S.email)}">${esc(S.email)}</a>`];
  if (S.linkedin) contact.push(`<a class="btn" href="${esc(S.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
  if (S.phone) contact.push(`<a class="btn" href="tel:${esc(S.phone.replace(/\s/g, ""))}">${esc(S.phone)}</a>`);
  if (S.cv) contact.push(`<a class="btn" href="${esc(S.cv)}" target="_blank" rel="noopener">CV</a>`);
  $("#contact-links").innerHTML = contact.join("");

  // Fenêtre de détail d'un projet
  const modal = $("#modal");
  function videoHtml(v) {
    if (!v) return "";
    if (v.youtube) return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtube)}" title="Video" allow="encrypted-media; picture-in-picture; fullscreen" loading="lazy"></iframe></div>`;
    if (v.vimeo) return `<div class="video"><iframe src="https://player.vimeo.com/video/${esc(v.vimeo)}" title="Video" allow="fullscreen; picture-in-picture" loading="lazy"></iframe></div>`;
    if (v.file) return `<div class="video"><video src="${esc(v.file)}" controls playsinline preload="metadata"></video></div>`;
    return "";
  }
  function openProject(i) {
    const p = S.projects[i];
    const gallery = (p.gallery || []).map((g) => {
      const src = typeof g === "string" ? g : g.src;
      const cap = typeof g === "string" ? "" : g.caption;
      return `<figure><img src="${esc(src)}" alt="${esc(cap || p.title)}" loading="lazy">${cap ? `<figcaption>${esc(cap)}</figcaption>` : ""}</figure>`;
    }).join("");
    $("#modal-body").innerHTML = `
      <span class="card-tag">${esc(p.tag)}</span>
      <h3 id="modal-title">${esc(p.title)}</h3>
      <p class="lead">${esc(p.summary)}</p>
      <p class="desc">${esc(p.description)}</p>
      ${p.link ? `<p><a class="btn solid" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || "Visit")} ↗</a></p>` : ""}
      <div class="media">
        ${videoHtml(p.video)}
        ${gallery ? `<div class="gallery">${gallery}</div>` : ""}
      </div>`;
    modal.showModal();
  }
  function closeModal() {
    modal.close();
    $("#modal-body").innerHTML = ""; // arrête la vidéo en cours
  }
  document.querySelectorAll("[data-project]").forEach((btn) =>
    btn.addEventListener("click", () => openProject(+btn.dataset.project)));
  $("#modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  modal.addEventListener("cancel", (e) => { e.preventDefault(); closeModal(); });

  // Barre de navigation qui se pose au scroll
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Apparition douce des éléments
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }
})();
