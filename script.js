window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});


const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


const query = "SELECT name, role, focus FROM developers WHERE name = 'Raja Sahu';";
const typedEl = document.getElementById('typedQuery');
const resultEl = document.getElementById('queryResult');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeQuery() {
  if (!typedEl) return;
  if (reduceMotion) {
    typedEl.textContent = query;
    if (resultEl) resultEl.hidden = false;
    return;
  }
  let i = 0;
  const speed = 28;
  function step() {
    if (i <= query.length) {
      typedEl.textContent = query.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else if (resultEl) {
      setTimeout(() => { resultEl.hidden = false; }, 300);
    }
  }
  step();
}


if ('IntersectionObserver' in window && document.querySelector('.terminal')) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeQuery();
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(document.querySelector('.terminal'));
} else {
  typeQuery();
}


const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const navLinksEl = document.getElementById('navLinks');
const navIndicator = document.getElementById('navIndicator');

function moveIndicator(link) {
  if (!navIndicator || !navLinksEl || !link) return;
  const linkRect = link.getBoundingClientRect();
  const parentRect = navLinksEl.getBoundingClientRect();
  navIndicator.style.width = `${linkRect.width}px`;
  navIndicator.style.transform = `translateX(${linkRect.left - parentRect.left}px)`;
  navIndicator.classList.add('active');
}

if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          const active = a.getAttribute('href') === `#${id}`;
          a.classList.toggle('is-active', active);
          if (active) moveIndicator(a);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => navObserver.observe(s));
}
window.addEventListener('resize', () => {
  const activeLink = document.querySelector('.nav-links a.is-active');
  if (activeLink) moveIndicator(activeLink);
});


const revealGroups = [
  { selector: '.section-head', stagger: false },
  { selector: '.about-card', stagger: false },
  { selector: '.schema-row:not(.schema-head)', stagger: true },
  { selector: '.log-entry', stagger: true },
  { selector: '.project-card', stagger: true },
  { selector: '.edu-card', stagger: true },
  { selector: '.trait-card', stagger: true },
  { selector: '.lang-row', stagger: false },
  { selector: '.insert-block', stagger: false },
  { selector: '.contact-actions', stagger: false },
  { selector: '.social-row-lg', stagger: false },
  { selector: '.stat', stagger: true },
];

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealGroups.forEach(({ selector, stagger }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (stagger) el.style.transitionDelay = `${Math.min(i * 90, 360)}ms`;
      revealObserver.observe(el);
    });
  });
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}


const statEls = document.querySelectorAll('.stat-num');
function animateCount(el) {
  const target = parseInt(el.getAttribute('data-count'), 10) || 0;
  const suffix = el.getAttribute('data-suffix') || '';
  if (reduceMotion) {
    el.textContent = `${target}${suffix}`;
    return;
  }
  const duration = 1100;
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = `${current}${suffix}`;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
if (statEls.length && 'IntersectionObserver' in window) {
  const statObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statObserver.observe(el));
}