const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;

// run cb(el) once per element when it scrolls into view
function onSee(els, cb, opts) {
  if (!('IntersectionObserver' in window)) return els.forEach(cb);
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { io.unobserve(e.target); cb(e.target); }
  }), opts);
  els.forEach(el => io.observe(el));
}

/* ---------- theme ---------- */
const themeBtn = $('#themeBtn');
const themeMeta = $('meta[name="theme-color"]');
function setTheme(t) {
  root.dataset.theme = t;
  themeBtn.setAttribute('aria-pressed', t === 'dark');
  themeMeta.content = t === 'dark' ? '#0B1514' : '#F3EEE8';
  dispatchEvent(new Event('themechange'));
}
setTheme('light');
themeBtn.addEventListener('click', () => {
  root.classList.add('theme-swap');
  setTimeout(() => root.classList.remove('theme-swap'), 450);
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

/* ---------- nav ---------- */
const navLinks = $('#navLinks');
const navToggle = $('#navToggle');
const navIndicator = $('#navIndicator');
navToggle.addEventListener('click', () => {
  navToggle.setAttribute('aria-expanded', navLinks.classList.toggle('open'));
});
navLinks.addEventListener('click', e => {
  if (e.target.closest('a')) { navLinks.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }
});

function moveIndicator(link) {
  navIndicator.style.width = `${link.offsetWidth}px`;
  navIndicator.style.transform = `translateX(${link.offsetLeft}px)`;
  navIndicator.classList.add('active');
}
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$('.nav-links a').forEach(a => {
      const on = a.getAttribute('href') === `#${entry.target.id}`;
      a.classList.toggle('is-active', on);
      if (on) moveIndicator(a);
    });
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('section[id]').forEach(s => navObserver.observe(s));
}
addEventListener('resize', () => {
  const active = $('.nav-links a.is-active');
  if (active) moveIndicator(active);
});

$('#year').textContent = new Date().getFullYear();

/* ---------- text splitting ---------- */
function splitChars(el) {
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.innerHTML = [...text].map((c, i) => c === ' ' ? ' '
    : `<span class="ch" aria-hidden="true"><i style="transition-delay:${0.08 * i}s">${c}</i></span>`).join('');
}
function splitWords(el) {
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.innerHTML = text.split(/\s+/).map((w, i) =>
    `<span class="w" aria-hidden="true"><i style="transition-delay:${0.07 * i}s">${w}</i></span>`).join('');
}
splitChars($('.hero h1'));
$$('.section-head h2').forEach(splitWords);

/* ---------- terminal typing ---------- */
const query = "SELECT name, role, focus FROM developers WHERE name = 'Raja Sahu';";
function typeQuery() {
  const typed = $('#typedQuery'), result = $('#queryResult');
  if (reduce) { typed.textContent = query; result.hidden = false; return; }
  let i = 0;
  (function step() {
    typed.textContent = query.slice(0, ++i);
    if (i < query.length) setTimeout(step, 28);
    else setTimeout(() => { result.hidden = false; }, 300);
  })();
}

/* ---------- page-load sequence ---------- */
const hero = $('#top');
const loader = $('#loader');
function enter() {
  document.body.classList.remove('preload');
  loader.classList.add('done');
  setTimeout(() => {
    hero.classList.add('go');
    onSee([$('.terminal')], typeQuery, { threshold: 0.3 });
  }, reduce ? 0 : 450);
  setTimeout(() => loader.remove(), 1000);
}
if (reduce) enter();
else {
  const loaded = document.readyState === 'complete' ? Promise.resolve() : new Promise(r => addEventListener('load', r, { once: true }));
  const t0 = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / 1300, 1);
    $('#loaderN').textContent = Math.round(p * 100);
    if (p < 1) requestAnimationFrame(tick);
    else Promise.race([loaded, new Promise(r => setTimeout(r, 3000))]).then(enter);
  })(t0);
}

/* ---------- reveal on scroll ---------- */
[['.section-head'], ['.about-card'], ['.schema-row:not(.schema-head)', 1], ['.log-entry', 1], ['.edu-card', 1],
 ['.trait-card', 1], ['.lang-row'], ['.insert-block'], ['.contact-actions'], ['.social-row-lg'], ['.stat', 1]
].forEach(([sel, stagger]) => {
  const els = $$(sel);
  els.forEach((el, i) => {
    el.classList.add('reveal');
    if (stagger) el.style.setProperty('--d', `${Math.min(i * 90, 360)}ms`);
  });
  onSee(els, el => el.classList.add('in'), { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
});

/* ---------- stat counters ---------- */
onSee($$('.stat-num'), el => {
  const target = +el.dataset.count || 0, suffix = el.dataset.suffix || '';
  if (reduce) { el.textContent = target + suffix; return; }
  const t0 = performance.now();
  (function frame(now) {
    const p = Math.min((now - t0) / 1100, 1);
    el.textContent = Math.round(target * (1 - (1 - p) ** 3)) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  })(t0);
}, { threshold: 0.5 });

/* ---------- scroll effects: progress bar, about fill, timeline, project stack ---------- */
const bar = $('#progress');
const aboutP = $('.about-card > p');
aboutP.innerHTML = aboutP.textContent.trim().split(/\s+/).map(w => `<span class="fw">${w}</span>`).join(' ');
const words = $$('.fw');
const log = $('.log');
const cards = $$('.project-card');
cards.forEach((c, i) => c.style.setProperty('--i', i));

// a card taller than the screen can't stay pinned, so let it scroll normally
function checkFlow() { cards.forEach(c => c.classList.toggle('flow', c.offsetHeight > innerHeight - 110)); }
checkFlow();

function onScroll() {
  const vh = innerHeight;
  const max = root.scrollHeight - vh;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;

  const a = aboutP.getBoundingClientRect();
  const lit = Math.round(Math.min(Math.max((vh * 0.85 - a.top) / (a.height + vh * 0.2), 0), 1) * words.length);
  words.forEach((w, i) => w.classList.toggle('lit', i < lit));

  const l = log.getBoundingClientRect();
  log.style.setProperty('--p', Math.min(Math.max((vh * 0.65 - l.top) / l.height, 0), 1));

  cards.forEach((c, i) => {
    const next = cards[i + 1];
    if (reduce || !next || c.classList.contains('flow')) { c.style.transform = c.style.filter = ''; return; }
    const d = Math.min(Math.max(1 - (next.getBoundingClientRect().top - c.getBoundingClientRect().top - c.offsetHeight * 0.1) / vh, 0), 1);
    c.style.transform = `scale(${1 - d * 0.06})`;
    c.style.filter = `brightness(${1 - d * 0.12})`;
  });
}
let ticking = false;
const queueScroll = () => ticking || (ticking = requestAnimationFrame(() => { ticking = false; onScroll(); }));
addEventListener('scroll', queueScroll, { passive: true });
addEventListener('resize', () => { checkFlow(); queueScroll(); });
onScroll();

/* ---------- interactive dot grid (redraws only when something changes) ---------- */
const cv = $('#dots');
const ctx = cv.getContext('2d');
const gap = 30;
let W, H, mouse = { x: -999, y: -999 }, queued = false;
function draw() {
  queued = false;
  const base = getComputedStyle(root).getPropertyValue('--dot');
  ctx.clearRect(0, 0, W, H);
  for (let x = gap / 2; x < W; x += gap) {
    for (let y = gap / 2; y < H; y += gap) {
      const k = Math.max(0, 1 - Math.hypot(x - mouse.x, y - mouse.y) / 170);
      ctx.fillStyle = k > 0.02 ? `rgba(255,104,69,${0.35 + k * 0.65})` : base;
      ctx.beginPath();
      ctx.arc(x, y, 1.6 + k * 4.2, 0, 6.283);
      ctx.fill();
    }
  }
}
const redraw = () => queued || (queued = requestAnimationFrame(draw));
new ResizeObserver(() => {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  W = cv.clientWidth; H = cv.clientHeight;
  cv.width = W * dpr; cv.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  draw();
}).observe(cv);
addEventListener('themechange', redraw);

/* ---------- pointer effects (mouse devices only) ---------- */
if (fine && !reduce) {
  // magnetic buttons
  $$('.btn').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  // hero parallax tilt + dot-grid hover
  const photo = $('.photo-frame');
  const term = $('.terminal');
  hero.addEventListener('mousemove', e => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    photo.style.transform = `translate(${x * -24}px, ${y * -18}px) rotate(${x * 3}deg)`;
    term.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;
    const r = cv.getBoundingClientRect();
    mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    redraw();
  });
  hero.addEventListener('mouseleave', () => {
    photo.style.transform = term.style.transform = '';
    mouse = { x: -999, y: -999 };
    redraw();
  });
}
