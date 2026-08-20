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
  experience: "I have completed two key technical experiences... At IBM SkillsBuild I worked on machine learning using Python and Scikit-learn where I built and evaluated 5+ ML models and worked on automated data-processing pipelines... At MSME Tool Room Kolkata I worked as a SQL & PL/SQL Developer Intern focusing on Oracle SQL optimization and database automation I worked with PL/SQL procedures functions cursors and triggers while also optimizing performance bottlenecks in database operations... Together these experiences have given me practical exposure to Machine Learning Python SQL PL/SQL Oracle databases data preprocessing and performance optimization.",
  projects: "1:- IPL Player Performance Analysis — processed 10,000+ rows across 5 IPL seasons with Pandas and NumPy, built 5 Matplotlib visualizations for player comparison, and owned the entire pipeline solo from ingestion to visualization.... 2:- Built a browser-based ATS Resume Analyzer that evaluates resume–job alignment and provides actionable optimization insights through a modern React interface.... 3:- Built a complete job-management dashboard that combines drag-and-drop pipeline workflow, real-time application analytics, and productivity tools such as search/filtering, interview notes, follow-up alerts, persistent storage, and Excel export—turning a basic CRUD app into a practical, SaaS-style job-tracking platform.... 4:- Built a business-ready Employee Management System with employee lifecycle management, real-time search/filtering, roster analytics, and CSV export using React, demonstrating strong state management and practical data handling.... 5:- Built a fault-tolerant distributed file storage simulator with replication, load balancing, live node monitoring, and resilient file retrieval.... 6:- Marlowe Reyes Photography — Built a premium responsive photography platform with interactive galleries, lightbox viewing, and a complete booking system with packages, add-ons, validation, and deposit calculation.",
  education: "Final-year BCA (Honours) at Kingston College of Science, West Bengal State University — expected graduation May 2027, CGPA 7.0.",
  certifications: "Machine Learning (IBM SkillsBuild) and SQL & PL/SQL (MSME Tool Room, Kolkata), 2025–2026.",
  achievements: "Campus Ambassador for IBM's SkillsBuild Program — grew student turnout 30% across 5 campus tech events (200+ attendees) by running event logistics.",
  personality: "Problem solver who digs into root causes rather than patching symptoms. Self-starter who owns projects end to end. Comfortable leading and organizing people, not just writing code. Detail-oriented — automates repetitive work rather than repeating it. A continuous learner, stacking certifications alongside a full course load.",
  interests: "Web development and competitive coding.",
  aboutraja: "passionate Coder and Web Developer who enjoys turning ideas into modern interactive and user-friendly digital experiences... I work with technologies like Python C++ HTML CSS JavaScript SQL and web development tools while continuously improving my problem-solving and development skills... Beyond coding I m passionate about fitness and gaming. Going to the gym helps me stay disciplined... focused and consistent while gaming inspires my creativity, strategy and interest in interactive experiences....I m always curious to learn new technologies build meaningful projects, and challenge myself to become a better developer every day.... My goal is to combine technology creativity and continuous learning to build projects that are both functional and impressive.",
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
    keywords: ["About Raja","about","raja"],
    reply: () => RAJA_KB.aboutraja
  },
  {
    keywords: ["project", "ipl", "built", "build", "portfolio site", "github project", "made", "created",
      "developed", "repo", "repository","projects", "github", "app", "application", "what have you made", "side project"],
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

const FALLBACK_REPLIES = [
  "I don't have a direct answer for that one — try asking about skills, experience, projects, education, or personality. Or email Raja directly at kcsrajasahu@gmail.com.",
];


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

  return best ? best.reply() : FALLBACK_REPLIES[0];
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

  const BOT_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><circle cx="9.5" cy="9.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="14.5" cy="9.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="9.5" cy="14.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="14.5" cy="14.5" r="0.9" fill="currentColor" stroke="none"/><path d="M9.5 9.5h5v5h-5z"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4M4.5 4.5l2.5 2.5M17 17l2.5 2.5M19.5 4.5 17 7M7 17l-2.5 2.5"/></svg>';

  function addMessage(text, from) {
    const wrap = document.createElement('div');
    wrap.className = `ai-row ai-row-${from}`;
    if (from === 'bot') {
      const av = document.createElement('span');
      av.className = 'ai-msg-avatar';
      av.setAttribute('aria-hidden', 'true');
      av.innerHTML = BOT_ICON_SVG;
      wrap.appendChild(av);
    }
    const row = document.createElement('div');
    row.className = `ai-msg ai-msg-${from}`;
    row.textContent = text;
    wrap.appendChild(row);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
  }

  function addTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'ai-row ai-row-bot';
    wrap.id = 'aiTyping';
    const av = document.createElement('span');
    av.className = 'ai-msg-avatar';
    av.setAttribute('aria-hidden', 'true');
    av.innerHTML = BOT_ICON_SVG;
    wrap.appendChild(av);
    const row = document.createElement('div');
    row.className = 'ai-msg ai-msg-bot ai-typing';
    row.innerHTML = '<span></span><span></span><span></span>';
    wrap.appendChild(row);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('aiTyping');
    if (t) t.remove();
  }

  function ask(question) {
    if (!question.trim()) return;
    addMessage(question, 'user');
    input.value = '';
    addTyping();
    const delay = 380 + Math.random() * 380;
    setTimeout(() => {
      removeTyping();
      addMessage(getAnswer(question), 'bot');
    }, delay);
  }

  function openPanel() {
    panel.hidden = false;
    fab.setAttribute('aria-expanded', 'true');
    if (!greeted) {
      greeted = true;
      addMessage(`Hi, I'm Raja's AI assistant ⚡ — trained on his resume, projects, and skills. Ask me anything, or tap a suggestion below to get started.`, 'bot');
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

  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    ask(input.value);
  });

  
  const sendBtn = form.querySelector('.ai-send');
  if (sendBtn) {
    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      ask(input.value);
    });
  }
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      ask(input.value);
    }
  });

  chips.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip-btn');
    if (!btn) return;
    ask(btn.getAttribute('data-q'));
  });
})();
