const RAJA_KB = {
  name: "Raja Sahu",
  role: "aspiring Software / Web Developer",
  summary: "Software developer with hands-on Python, SQL, and PL/SQL experience gained during an Oracle Database internship at MSME Tool Room, Kolkata. Cut manual data-retrieval time by 30% there. Strong foundation in Data Structures, OOP, and independent Python data projects. Final-year BCA student, open to relocating anywhere in India.",
  skills: {
    languages: ["C", "C++", "Python", "Java", "JavaScript"],
    web: ["HTML", "CSS", "JavaScript (DOM)", "Fetch/AJAX"],
    databases: ["MongoDB", "SQL", "PL/SQL", "Oracle Database"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Oracle SQL Developer", "Linux"],
    concepts: ["Data Structures & Algorithms", "OOP", "Query Optimization"]
  },
  experience: "Two key experiences:\n• SQL & PL/SQL Developer Intern, MSME Tool Room, Kolkata (Nov–Dec 2025) — Oracle SQL optimization and database automation with PL/SQL procedures, functions, cursors and triggers; cut query time and manual effort by 30%.\n• IBM SkillsBuild — Machine Learning with Python and Scikit-learn: built and evaluated 5+ ML models and automated data-preprocessing pipelines with Pandas and NumPy.",
  projects: [
    "IPL Player Performance Analysis — 10,000+ rows across 5 seasons processed with Pandas and NumPy, 5 Matplotlib visualizations, owned solo end to end.",
    "Weather.db — SQL-terminal-styled weather dashboard using the Open-Meteo, Geolocation and Fetch APIs.",
    "ATS Resume Analyzer — browser-based React tool scoring resume–job alignment with actionable insights.",
    "Job Tracker App — drag-and-drop hiring pipeline, Recharts analytics, follow-up alerts, Excel export.",
    "Employee Management System — React roster with search/filtering, live stats and CSV export.",
    "Distributed File System — fault-tolerant storage simulator with replication, load balancing and live node monitoring.",
    "Marlowe Reyes Photography — responsive photography site with galleries, lightbox and a full booking flow.",
    "Career Platform — full-stack React + Express + SQLite job platform with TF-IDF job matching and recruiter features.",
    "Expense Platform — Next.js, TypeScript, PostgreSQL & Prisma with duplicate-safe CSV imports and idempotent recurring expenses."
  ].map((p, i) => `${i + 1}. ${p}`).join("\n"),
  education: "Final-year BCA (Honours) at Kingston College of Science, West Bengal State University — expected graduation May 2027, CGPA 7.0.",
  certifications: "Machine Learning (IBM SkillsBuild) and SQL & PL/SQL (MSME Tool Room, Kolkata), 2025–2026.",
  achievements: "Campus Ambassador for IBM's SkillsBuild Program — grew student turnout 30% across 5 campus tech events (200+ attendees) by running event logistics.",
  personality: "Problem solver who digs into root causes rather than patching symptoms. Self-starter who owns projects end to end. Comfortable leading and organizing people, not just writing code. Detail-oriented — automates repetitive work rather than repeating it. A continuous learner, stacking certifications alongside a full course load.",
  interests: "Web development and competitive coding.",
  aboutraja: "I'm a passionate coder and web developer who enjoys turning ideas into modern, interactive and user-friendly digital experiences. I work with Python, C++, HTML, CSS, JavaScript, SQL and web development tools while continuously improving my problem-solving skills.\nBeyond coding, I'm passionate about fitness and gaming — the gym keeps me disciplined, focused and consistent, while gaming feeds my creativity, strategy and interest in interactive experiences.\nMy goal is to combine technology, creativity and continuous learning to build projects that are both functional and impressive.",
  languages_spoken: "English and Hindi.",
  contact: {
    email: "kcsrajasahu@gmail.com",
    phone: "+91 6290806243",
    github: "github.com/RajaSahu89",
    linkedin: "linkedin.com/in/raja-sahu-05137a410",
    location: "Open to relocation anywhere in India."
  }
};

const INTENTS = [
  {
    keywords: ["hi", "hello", "hey", "yo", "greetings"],
    reply: () => `Hey there 👋 I'm a small assistant trained on ${RAJA_KB.name}'s resume. Ask me anything — skills, projects, experience, or why he'd be a great hire.`
  },
  {
    keywords: ["skill", "tech stack", "technology", "technologies", "language", "programming", "programming language",
      "database", "tool", "stack", "framework", "frameworks", "coding", "code", "proficient", "familiar with",
      "know how to", "what can you do", "capable of"],
    reply: () => `Raja's stack:\n• Languages: ${RAJA_KB.skills.languages.join(", ")}\n• Web: ${RAJA_KB.skills.web.join(", ")}\n• Databases: ${RAJA_KB.skills.databases.join(", ")}\n• Tools: ${RAJA_KB.skills.tools.join(", ")}\n• Concepts: ${RAJA_KB.skills.concepts.join(", ")}`
  },
  {
    keywords: ["experience", "internship", "intern", "job", "work history", "worked", "company", "employer",
      "professional experience", "role", "position", "years of experience", "prior work"],
    reply: () => RAJA_KB.experience
  },
  {
    keywords: ["about raja", "about yourself", "about him", "about himself", "yourself", "who is raja"],
    reply: () => RAJA_KB.aboutraja
  },
  {
    keywords: ["project", "ipl", "built", "build", "portfolio site", "github project", "made", "created",
      "developed", "repo", "repository","github", "app", "application", "what have you made", "side project"],
    reply: () => RAJA_KB.projects
  },
  {
    keywords: ["education", "degree", "college", "university", "bca", "cgpa", "gpa", "school", "study", "studying",
      "graduate", "graduation", "semester", "academic", "qualification"],
    reply: () => RAJA_KB.education
  },
  {
    keywords: ["certificate", "certification", "certified", "ibm", "course","training", "skillsbuild"],
    reply: () => RAJA_KB.certifications
  },
  {
    keywords: ["achievement", "leadership", "ambassador", "award", "accomplishment", "campus", "organize", "organizer", "event"],
    reply: () => RAJA_KB.achievements
  },
  {
    keywords: ["personality", "character", "strength", "weakness", "work style", "soft skill", "trait",
      "like as a person", "what is he like", "team player", "collaborate", "communication", "attitude"],
    reply: () => RAJA_KB.personality
  },
  {
    keywords: ["interest", "hobby", "hobbies", "free time", "outside work", "passion", "enjoy", "like to do"],
    reply: () => RAJA_KB.interests
  },
  {
    keywords: ["speak", "fluent", "language spoken", "hindi", "english", "mother tongue"],
    reply: () => RAJA_KB.languages_spoken
  },
  {
    keywords: ["relocate", "relocation", "location", "based", "where is he", "willing to move", "remote", "onsite", "which city", "which state"],
    reply: () => RAJA_KB.contact.location
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "linkedin", "github profile", "get in touch",
      "connect", "message", "resume", "cv", "apply", "number"],
    reply: () => `You can reach Raja at ${RAJA_KB.contact.email} or ${RAJA_KB.contact.phone}. LinkedIn: ${RAJA_KB.contact.linkedin} — GitHub: ${RAJA_KB.contact.github}.`
  },
  {
    keywords: ["summary", "about you", "who are you", "tell me about him", "introduce", "overview", "background", "profile"],
    reply: () => RAJA_KB.summary
  },
  {
    keywords: ["why should we hire", "why hire", "why should i hire", "what makes you", "stand out", "unique", "different from other candidates"],
    reply: () => `${RAJA_KB.summary} ${RAJA_KB.personality}`
  },
  {
    keywords: ["available", "availability", "notice period", "join", "start date", "when can you start"],
    reply: () => "As a final-year student open to opportunities, Raja can typically start quickly or align with a standard notice period — best to confirm exact timing directly at " + RAJA_KB.contact.email + "."
  },
  {
    keywords: ["salary", "compensation", "ctc", "pay", "expected salary", "stipend"],
    reply: () => "Raja is a fresher open to discussing compensation based on the role and market standards — reach out at " + RAJA_KB.contact.email + " to talk specifics."
  },
  {
    keywords: ["thank", "thanks", "cool", "nice", "great", "awesome"],
    reply: () => "Anytime! Anything else you'd like to know — skills, projects, or how to get in touch?"
  }
];

const FALLBACK = "I don't have a direct answer for that one — try asking about skills, experience, projects, education, or personality. Or email Raja directly at " + RAJA_KB.contact.email + ".";

function stem(word) {
  if (word.length > 5 && word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.length > 5 && word.endsWith("ing")) return word.slice(0, -3);
  if (word.length > 4 && word.endsWith("es")) return word.slice(0, -2);
  if (word.length > 4 && word.endsWith("ed")) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s")) return word.slice(0, -1);
  return word;
}

function normalize(text) {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

function includesPhrase(text, phrase) {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("\\b" + escaped.replace(/ /g, "\\s+") + "\\b").test(text);
}

function isCloseTypo(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a === b) return true;
  const [shorter, longer] = a.length <= b.length ? [a, b] : [b, a];
  let i = 0, j = 0, edits = 0;
  while (i < shorter.length && j < longer.length) {
    if (shorter[i] === longer[j]) { i++; j++; continue; }
    edits++;
    if (edits > 1) return false;
    if (shorter.length === longer.length) { i++; j++; } else { j++; }
  }
  return true;
}

function getAnswer(question) {
  const q = normalize(question);
  const tokens = q.split(" ").filter(Boolean);
  const stemmedTokens = tokens.map(stem);

  let best = null;
  let bestScore = 0;

  for (const intent of INTENTS) {
    let score = 0;
    for (const k of intent.keywords) {
      if (k.includes(" ")) {

        if (includesPhrase(q, k)) score += 3;
        continue;
      }

      if (k.length <= 3) {
        if (tokens.includes(k)) score += 2;
        continue;
      }
      const kStem = stem(k);
      if (stemmedTokens.includes(kStem)) {
        score += 2;
      } else if (k.length >= 5 && tokens.some(t => t.length >= 5 && isCloseTypo(t, k))) {

        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  return best ? best.reply() : FALLBACK;
}

(function () {
  const fab = document.getElementById('aiFab');
  const panel = document.getElementById('aiPanel');
  const closeBtn = document.getElementById('aiClose');
  const messages = document.getElementById('aiMessages');
  const form = document.getElementById('aiForm');
  const input = document.getElementById('aiInput');
  const chips = document.getElementById('aiChips');

  if (!fab || !panel || !form) return;

  let greeted = false;

  const botIcon = document.querySelector('.ai-avatar').innerHTML;

  function addRow(from, content, cls = '') {
    const wrap = document.createElement('div');
    wrap.className = `ai-row ai-row-${from}`;
    if (from === 'bot') {
      const av = document.createElement('span');
      av.className = 'ai-msg-avatar';
      av.setAttribute('aria-hidden', 'true');
      av.innerHTML = botIcon;
      wrap.appendChild(av);
    }
    const msg = document.createElement('div');
    msg.className = `ai-msg ai-msg-${from} ${cls}`;
    if (content) msg.textContent = content; else msg.innerHTML = '<span></span><span></span><span></span>';
    wrap.appendChild(msg);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
    return wrap;
  }

  function ask(question) {
    question = question.trim();
    if (!question) return;
    addRow('user', question);
    input.value = '';
    const typing = addRow('bot', '', 'ai-typing');
    setTimeout(() => {
      typing.remove();
      addRow('bot', getAnswer(question));
    }, 380 + Math.random() * 380);
  }

  function openPanel() {
    panel.hidden = false;
    fab.setAttribute('aria-expanded', 'true');
    if (!greeted) {
      greeted = true;
      addRow('bot', "Hi, I'm Raja's AI assistant ⚡ — trained on his resume, projects, and skills. Ask me anything, or tap a suggestion below to get started.");
    }
    setTimeout(() => input && input.focus(), 50);
  }

  function closePanel() {
    panel.hidden = true;
    fab.setAttribute('aria-expanded', 'false');
    fab.focus();
  }

  fab.addEventListener('click', () => {
    if (panel.hidden) openPanel(); else closePanel();
  });
  closeBtn.addEventListener('click', closePanel);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) closePanel();
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    ask(input.value);
  });

  chips.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip-btn');
    if (!btn) return;
    ask(btn.getAttribute('data-q'));
  });
})();
