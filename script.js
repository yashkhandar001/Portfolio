/**
 * YASH KHANDAR - PORTFOLIO INTERACTIVE LOGIC ENGINE
 * KJ Somaiya Institute of Technology (KJSIT) - Computer Engineering
 * Particle Canvas, Dynamic CLI Terminal, Web Audio Synth, Project Modals, Filtering & Themes
 */

// ==========================================
// 1. PORTFOLIO DATA CONFIGURATION
// ==========================================
const PORTFOLIO_DATA = {
  profile: {
    name: "Yash Khandar",
    title: "Computer Engineering Student | AI/ML & Software Enthusiast",
    college: "KJ Somaiya Institute of Technology (KJSIT)",
    degree: "Second Year B.Tech in Computer Engineering (Grad: Sept 2029)",
    email: "yashkhandar04@gmail.com",
    github: "https://github.com/yashkhandar001",
    linkedin: "https://www.linkedin.com/in/yash-khandar-125672370",
    location: "Mumbai, India",
    techTeams: ["IET Technical Team (Current)", "IETE KJSIT Technical Team (Former)"]
  },
  typewriterPhrases: [
    "building LEGACY — my AI assistant.",
    "exploring AI & Machine Learning.",
    "coding in Python, C, C++, and Java.",
    "mastering Data Structures & Algorithms.",
    "collaborating with college tech teams."
  ],
  skills: [
    // Programming Languages
    { name: "Python", category: "languages", level: 85, icon: "🐍", tags: ["Python", "Scripting", "Problem Solving"] },
    { name: "C & C++", category: "languages", level: 85, icon: "⚙️", tags: ["C", "C++", "Core Programming"] },
    { name: "Java", category: "languages", level: 80, icon: "☕", tags: ["Java", "OOP Principles"] },
    { name: "HTML & CSS", category: "languages", level: 88, icon: "🎨", tags: ["HTML", "CSS", "Responsive Layouts"] },

    // Core CS & Problem Solving
    { name: "Data Structures & Algorithms (DSA)", category: "dsa", level: 82, icon: "🧩", tags: ["Arrays", "Linked Lists", "Trees", "Sorting", "Search"] },

    // Learning Python Libraries for AI/ML
    { name: "Python AI/ML Libraries", category: "aiml", level: 75, icon: "🤖", tags: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib"] }
  ],
  projects: [
    {
      id: "legacy-ai-assistant",
      title: "LEGACY — Autonomous AI Assistant",
      subtitle: "JARVIS-Inspired Intelligent Voice & Task Automation System",
      category: "aiml",
      badge: "Active Project • In Development",
      year: "2025 – Present",
      desc: "An intelligent virtual assistant inspired by JARVIS, built with Python and AI/ML capabilities. LEGACY is engineered for voice interaction, task automation, contextual assistance, and smart system workflows.",
      techStack: ["Python", "AI/ML Libraries", "Speech Recognition", "Task Automation", "System APIs"],
      liveUrl: "https://github.com/yashkhandar001",
      githubUrl: "https://github.com/yashkhandar001",
      highlights: [
        "Engineering an autonomous modular architecture for voice command processing and query understanding.",
        "Integrating Python AI/ML libraries and natural language capabilities for contextual task execution.",
        "Developing smart system-level automations, reminder dispatchers, and conversational intelligence."
      ]
    }
  ],
  internships: [
    {
      id: "INT-01",
      role: "AI / Machine Learning Intern",
      company: "Cognitive AI Labs",
      location: "Mumbai (Hybrid)",
      stipend: "₹18,000 - ₹25,000 / mo",
      duration: "3 - 6 Months",
      category: "aiml",
      requirements: ["Python", "Pandas", "NumPy", "Scikit-Learn", "DSA"],
      applyUrl: "https://linkedin.com/jobs",
      portal: "LinkedIn Direct",
      matchScore: 98
    },
    {
      id: "INT-02",
      role: "Conversational AI & NLP Intern (LEGACY Domain)",
      company: "BharatAI Voice Systems",
      location: "Remote (India)",
      stipend: "₹22,000 - ₹30,000 / mo",
      duration: "4 - 6 Months",
      category: "aiml",
      requirements: ["Python", "AI/ML Libraries", "NLP Basics", "Speech APIs", "OOP"],
      applyUrl: "https://wellfound.com",
      portal: "Wellfound (AngelList)",
      matchScore: 99
    },
    {
      id: "INT-03",
      role: "Student Research Intern (Machine Intelligence)",
      company: "TCS Research & Innovation",
      location: "Mumbai / Pune",
      stipend: "₹20,000 / mo",
      duration: "3 Months",
      category: "aiml",
      requirements: ["Python", "C++", "DSA", "Machine Learning Basics", "NumPy"],
      applyUrl: "https://tcs.com/careers",
      portal: "TCS NextStep",
      matchScore: 95
    },
    {
      id: "INT-04",
      role: "Python Backend & Automation Intern",
      company: "Reliance Jio AI CoE",
      location: "Navi Mumbai, MH",
      stipend: "₹25,000 / mo",
      duration: "6 Months",
      category: "python",
      requirements: ["Python", "OOP", "Data Structures", "REST APIs", "Git"],
      applyUrl: "https://careers.jio.com",
      portal: "Jio Careers",
      matchScore: 96
    },
    {
      id: "INT-05",
      role: "Core Software Engineering Intern (C++ & DSA)",
      company: "Aether Dynamics",
      location: "Bengaluru / Remote",
      stipend: "₹25,000 - ₹35,000 / mo",
      duration: "4 Months",
      category: "dsa",
      requirements: ["C++", "C", "Data Structures", "Algorithms", "OOP"],
      applyUrl: "https://unstop.com",
      portal: "Unstop",
      matchScore: 96
    },
    {
      id: "INT-06",
      role: "Junior AI & Data Analytics Intern",
      company: "Fractal Analytics",
      location: "Mumbai / Hybrid",
      stipend: "₹20,000 - ₹28,000 / mo",
      duration: "3 - 6 Months",
      category: "aiml",
      requirements: ["Python", "Pandas", "Matplotlib", "NumPy", "Data Preprocessing"],
      applyUrl: "https://fractal.ai/careers",
      portal: "Fractal Careers",
      matchScore: 94
    },
    {
      id: "INT-07",
      role: "Java Software Development Intern",
      company: "LTIMindtree",
      location: "Navi Mumbai / Pune",
      stipend: "₹18,000 / mo",
      duration: "3 Months",
      category: "java",
      requirements: ["Java", "Core Java OOP", "Data Structures", "Problem Solving"],
      applyUrl: "https://ltimindtree.com/careers",
      portal: "LTIMindtree Careers",
      matchScore: 93
    },
    {
      id: "INT-08",
      role: "Autonomous Agents & Python Developer Intern",
      company: "Kreate AI Labs",
      location: "Remote (India)",
      stipend: "₹15,000 - ₹22,000 / mo",
      duration: "3 Months",
      category: "python",
      requirements: ["Python", "AI Libraries", "Automation", "DSA Basics", "Git"],
      applyUrl: "https://internshala.com",
      portal: "Internshala",
      matchScore: 97
    },
    {
      id: "INT-09",
      role: "Computer Vision & ML Intern",
      company: "VisionTech Innovations",
      location: "Mumbai, MH",
      stipend: "₹18,000 - ₹26,000 / mo",
      duration: "6 Months",
      category: "aiml",
      requirements: ["Python", "C++", "Scikit-Learn", "Matplotlib", "DSA"],
      applyUrl: "https://cuvette.tech",
      portal: "Cuvette",
      matchScore: 95
    },
    {
      id: "INT-10",
      role: "Algorithm & Systems Software Intern",
      company: "Nexis High-Performance Systems",
      location: "Remote (India)",
      stipend: "₹24,000 / mo",
      duration: "3 - 4 Months",
      category: "dsa",
      requirements: ["C", "C++", "Data Structures", "Algorithms", "Linux Basics"],
      applyUrl: "https://indeed.com",
      portal: "Indeed",
      matchScore: 94
    },
    {
      id: "INT-11",
      role: "Data Engineering & Analytics Intern",
      company: "Zepto Technology Hub",
      location: "Mumbai / Bengaluru",
      stipend: "₹25,000 - ₹35,000 / mo",
      duration: "6 Months",
      category: "python",
      requirements: ["Python", "Pandas", "NumPy", "SQL Basics", "Algorithms"],
      applyUrl: "https://linkedin.com/jobs",
      portal: "LinkedIn",
      matchScore: 92
    },
    {
      id: "INT-12",
      role: "Web & Frontend Engineering Intern",
      company: "Zenith Creative Studios",
      location: "Remote (India)",
      stipend: "₹12,000 - ₹18,000 / mo",
      duration: "2 - 3 Months",
      category: "web",
      requirements: ["HTML", "CSS", "Responsive UI", "Web Basics", "Git"],
      applyUrl: "https://internshala.com",
      portal: "Internshala",
      matchScore: 91
    }
  ]
};

// ==========================================
// 2. WEB AUDIO SYNTHESIZER (Tactile UI Sounds)
// ==========================================
class SoundSynth {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
    this.initFromStorage();
  }

  initFromStorage() {
    const saved = localStorage.getItem('yash_sound_enabled');
    this.enabled = saved !== null ? JSON.parse(saved) : true;
    this.updateIcon();
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('yash_sound_enabled', JSON.stringify(this.enabled));
    this.updateIcon();
    if (this.enabled) {
      this.playBeep(520, 0.08, 'triangle');
    }
  }

  updateIcon() {
    const soundOn = document.querySelector('.sound-on');
    const soundOff = document.querySelector('.sound-off');
    if (soundOn && soundOff) {
      soundOn.style.display = this.enabled ? 'block' : 'none';
      soundOff.style.display = this.enabled ? 'none' : 'block';
    }
  }

  playBeep(freq = 440, duration = 0.05, type = 'sine') {
    if (!this.enabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio not permitted or unsupported
    }
  }

  playClick() {
    this.playBeep(600, 0.04, 'sine');
  }

  playKey() {
    this.playBeep(420, 0.03, 'triangle');
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // C, E, G
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.06, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } catch (e) {}
  }
}

const synth = new SoundSynth();

// ==========================================
// 3. PARTICLE CONSTELLATION CANVAS
// ==========================================
class ParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = 60;
    this.mouse = { x: null, y: null, radius: 140 };
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    this.createParticles();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    const colors = [
      'rgba(99, 102, 241, 0.5)',  // Electric Indigo
      'rgba(6, 182, 212, 0.5)',   // Cyber Cyan
      'rgba(168, 85, 247, 0.45)'  // Supernova Violet
    ];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.2 + 1,
        color: colors[i % colors.length]
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse interactive repulse / attract
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();

      // Connect neighbor particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(99, 102, 241, ${0.18 * (1 - dist / 110)})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// ==========================================
// 4. TYPEWRITER EFFECT
// ==========================================
class Typewriter {
  constructor(elementId, phrases) {
    this.target = document.getElementById(elementId);
    this.phrases = phrases;
    this.currentPhraseIdx = 0;
    this.currentCharIdx = 0;
    this.isDeleting = false;
    this.typingSpeed = 75;
    this.deletingSpeed = 35;
    this.pauseDelay = 1800;
    if (this.target) this.tick();
  }

  tick() {
    const currentPhrase = this.phrases[this.currentPhraseIdx];

    if (this.isDeleting) {
      this.target.textContent = currentPhrase.substring(0, this.currentCharIdx - 1);
      this.currentCharIdx--;
    } else {
      this.target.textContent = currentPhrase.substring(0, this.currentCharIdx + 1);
      this.currentCharIdx++;
    }

    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentCharIdx === currentPhrase.length) {
      delay = this.pauseDelay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIdx === 0) {
      this.isDeleting = false;
      this.currentPhraseIdx = (this.currentPhraseIdx + 1) % this.phrases.length;
      delay = 400;
    }

    setTimeout(() => this.tick(), delay);
  }
}

// ==========================================
// 5. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconSvg = type === 'success' 
    ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  synth.playClick();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// ==========================================
// 6. SKILLS MATRIX RENDERER & FILTER
// ==========================================
function renderSkills(category = 'all') {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  const filtered = category === 'all' 
    ? PORTFOLIO_DATA.skills 
    : PORTFOLIO_DATA.skills.filter(s => s.category === category);

  container.innerHTML = filtered.map(skill => `
    <div class="glass-card skill-card" data-category="${skill.category}">
      <div class="skill-card-top">
        <div class="skill-info-group">
          <div class="skill-badge-icon">${skill.icon}</div>
          <div>
            <h4 class="skill-name">${skill.name}</h4>
            <span class="skill-category-tag">${skill.category.toUpperCase()}</span>
          </div>
        </div>
        <span class="skill-level-pct">${skill.level}%</span>
      </div>
      <div class="skill-progress-track">
        <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
      </div>
      <div class="skill-tags-cloud">
        ${skill.tags.map(tag => `<span class="micro-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function initSkillsTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      synth.playClick();
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderSkills(tab.dataset.tab);
    });
  });
}

// ==========================================
// 7. PROJECTS SHOWCASE RENDERER & MODAL
// ==========================================
function renderProjects(category = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const filtered = category === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(proj => `
    <article class="glass-card project-card" data-project-id="${proj.id}">
      <div>
        <div class="project-card-header">
          <span class="project-badge">${proj.badge}</span>
          <div class="project-links">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="GitHub Code">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Project Link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.desc}</p>
      </div>

      <div>
        <div class="project-tech-tags">
          ${proj.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <button class="btn btn-outline project-footer-btn btn-view-project" data-id="${proj.id}">
          <span>View Details &amp; Highlights</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </article>
  `).join('');

  // Attach modal triggers
  container.querySelectorAll('.btn-view-project').forEach(btn => {
    btn.addEventListener('click', () => {
      synth.playClick();
      const projId = btn.dataset.id;
      openProjectModal(projId);
    });
  });
}

function initProjectsTabs() {
  const tabs = document.querySelectorAll('.proj-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      synth.playClick();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProjects(tab.dataset.category);
    });
  });
}

function openProjectModal(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  document.getElementById('modal-project-badge').textContent = proj.badge;
  document.getElementById('modal-project-year').textContent = proj.year;
  document.getElementById('modal-project-title').textContent = proj.title;
  document.getElementById('modal-project-subtitle').textContent = proj.subtitle;
  document.getElementById('modal-banner-decor').textContent = `<${proj.title.replace(/[^a-zA-Z0-9]/g, '')} />`;

  const highlightsList = document.getElementById('modal-project-highlights');
  highlightsList.innerHTML = proj.highlights.map(h => `<li>${h}</li>`).join('');

  const stackContainer = document.getElementById('modal-project-stack');
  stackContainer.innerHTML = proj.techStack.map(t => `<span class="tech-tag" style="padding: 6px 12px; font-size: 0.85rem;">${t}</span>`).join('');

  document.getElementById('modal-btn-live').href = proj.liveUrl;
  document.getElementById('modal-btn-code').href = proj.githubUrl;

  modal.showModal();
}

// ==========================================
// 7B. AI INTERNSHIP SCOUT & APPLICATION GENERATOR
// ==========================================
let currentActiveInternship = null;
let activePacketTab = 'cover-letter';
let appliedInternshipIds = new Set();

function generateCoverLetterText(internship) {
  const p = PORTFOLIO_DATA.profile;
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const reqsStr = internship.requirements.slice(0, 4).join(', ');

  return `Subject: Application for ${internship.role} - ${p.name} (${p.college})

Date: ${today}
To: The Hiring Team, ${internship.company}

Dear Hiring Team,

I am writing to express my strong enthusiasm for the ${internship.role} position at ${internship.company}. I am currently a second-year Computer Engineering undergraduate at ${p.college} (graduating in 2029), with a passionate focus on Artificial Intelligence, Machine Learning, Data Structures & Algorithms (DSA), and software development.

My skill set aligns closely with your needs in ${reqsStr}. I am actively engineering **LEGACY**, an intelligent autonomous virtual assistant (inspired by JARVIS) that integrates Python, natural language understanding, and automated system workflows. In addition, I continually sharpen my problem-solving abilities in DSA and collaborate as an active member of the ${p.techTeams[0]}.

${internship.company}'s work in this domain is deeply exciting to me. I am eager to apply my technical curiosity, rapid learning capability, and hands-on dedication to deliver real value to your projects during this ${internship.duration} internship.

Thank you for your time and consideration. I would welcome the opportunity to discuss my qualifications with your team.

Sincerely,

${p.name}
Second Year B.Tech, Computer Engineering
${p.college}
Email: ${p.email}
GitHub: ${p.github}
LinkedIn: ${p.linkedin}
`;
}

function generateColdOutreachText(internship) {
  const p = PORTFOLIO_DATA.profile;
  return `Subject: ${p.name} - KJSIT Comp Eng Student interested in ${internship.role} @ ${internship.company}

Hi [Hiring Lead / Recruiter Name],

I hope you are having a productive week!

I noticed the ${internship.role} opening at ${internship.company} and was inspired by your team's mission. As a second-year Computer Engineering undergraduate at KJ Somaiya Institute of Technology with a strong focus in ${internship.requirements.slice(0, 3).join(', ')}, I would love to explore an internship opportunity with your group.

Quick Profile Highlights:
• Proficient in Python, C, C++, Java, and exploratory AI/ML pipelines (NumPy, Pandas, Scikit-Learn).
• Solid grounding in Data Structures & Algorithms (DSA) and collegiate technical teamwork (IET KJSIT).
• Currently building **LEGACY** (JARVIS-like AI Assistant): ${p.github}

Would you be open to a quick 10-minute conversation or reviewing my resume? I would be thrilled to support ${internship.company} this term.

Best regards,
${p.name}
${p.email} | ${p.linkedin}
`;
}

function renderInternships(filter = 'all') {
  const container = document.getElementById('internships-grid-container');
  if (!container) return;

  const filtered = filter === 'all'
    ? PORTFOLIO_DATA.internships
    : PORTFOLIO_DATA.internships.filter(i => i.category === filter);

  container.innerHTML = filtered.map(item => {
    const isApplied = appliedInternshipIds.has(item.id);
    return `
      <div class="glass-card internship-card" data-internship-id="${item.id}">
        <div>
          <div class="internship-card-header">
            <div>
              <span class="intern-company">${item.company} &bull; ${item.portal}</span>
              <h3 class="intern-role">${item.role}</h3>
            </div>
            <span class="match-gauge-badge">${item.matchScore}% Match</span>
          </div>

          <div class="intern-meta-row">
            <span class="intern-meta-item">📍 ${item.location}</span>
            <span class="intern-meta-item">💰 ${item.stipend}</span>
            <span class="intern-meta-item">⏱️ ${item.duration}</span>
          </div>

          <div class="intern-reqs">
            ${item.requirements.map(r => `<span class="intern-req-tag">${r}</span>`).join('')}
          </div>
        </div>

        <div class="intern-actions">
          <button class="btn btn-primary btn-sm btn-open-packet" data-id="${item.id}">
            <span>AI Application Packet</span>
          </button>
          <button class="btn btn-outline btn-sm btn-toggle-applied ${isApplied ? 'applied-btn' : ''}" data-id="${item.id}">
            <span>${isApplied ? '✓ Tracked' : 'Mark Applied'}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach packet triggers
  container.querySelectorAll('.btn-open-packet').forEach(btn => {
    btn.addEventListener('click', () => {
      synth.playClick();
      openApplicationPacketModal(btn.dataset.id);
    });
  });

  // Attach mark applied triggers
  container.querySelectorAll('.btn-toggle-applied').forEach(btn => {
    btn.addEventListener('click', () => {
      synth.playSuccess();
      const id = btn.dataset.id;
      if (appliedInternshipIds.has(id)) {
        appliedInternshipIds.delete(id);
        showToast('Removed from applied tracker', 'info');
      } else {
        appliedInternshipIds.add(id);
        showToast('Marked as Applied! Added to application ledger', 'success');
      }
      updateScoutStats();
      renderInternships(document.querySelector('.intern-tab.active')?.dataset.filter || 'all');
    });
  });
}

function updateScoutStats() {
  const countElem = document.getElementById('stat-applied-count');
  if (countElem) {
    countElem.textContent = appliedInternshipIds.size;
  }
}

function initInternshipTabs() {
  const tabs = document.querySelectorAll('.intern-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      synth.playClick();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderInternships(tab.dataset.filter);
    });
  });
}

function openApplicationPacketModal(internshipId) {
  const item = PORTFOLIO_DATA.internships.find(i => i.id === internshipId);
  if (!item) return;

  currentActiveInternship = item;
  const modal = document.getElementById('application-packet-modal');
  if (!modal) return;

  document.getElementById('packet-modal-title').textContent = `${item.role} @ ${item.company}`;
  document.getElementById('packet-match-score').textContent = `${item.matchScore}% Match for Yash`;
  document.getElementById('packet-apply-link').href = item.applyUrl;

  updatePacketDisplay();
  modal.showModal();
}

function updatePacketDisplay() {
  if (!currentActiveInternship) return;
  const display = document.getElementById('packet-text-display');
  if (!display) return;

  if (activePacketTab === 'cover-letter') {
    display.textContent = generateCoverLetterText(currentActiveInternship);
  } else {
    display.textContent = generateColdOutreachText(currentActiveInternship);
  }
}

function initApplicationPacketModal() {
  const modal = document.getElementById('application-packet-modal');
  const closeBtn = document.getElementById('packet-modal-close-btn');
  const tabCover = document.getElementById('tab-cover-letter');
  const tabCold = document.getElementById('tab-cold-email');
  const copyBtn = document.getElementById('btn-copy-packet');

  if (modal && closeBtn) {
    closeBtn.addEventListener('click', () => {
      synth.playClick();
      modal.close();
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.close();
    });
  }

  if (tabCover && tabCold) {
    tabCover.addEventListener('click', () => {
      synth.playClick();
      activePacketTab = 'cover-letter';
      tabCover.classList.add('active');
      tabCold.classList.remove('active');
      updatePacketDisplay();
    });

    tabCold.addEventListener('click', () => {
      synth.playClick();
      activePacketTab = 'cold-email';
      tabCold.classList.add('active');
      tabCover.classList.remove('active');
      updatePacketDisplay();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const display = document.getElementById('packet-text-display');
      if (display) {
        navigator.clipboard.writeText(display.textContent).then(() => {
          synth.playSuccess();
          showToast('Copied tailored application packet to clipboard!', 'success');
        });
      }
    });
  }
}

function initAutoApplyAllBtn() {
  const btn = document.getElementById('btn-auto-apply-all');
  if (!btn) return;

  btn.addEventListener('click', () => {
    synth.playClick();
    btn.disabled = true;
    const origHtml = btn.innerHTML;
    btn.innerHTML = `<span>AI Auto-Applying...</span>`;

    showToast('AI Agent: Analyzing 12 matching internships (AI/ML, Python, C++, Java)...', 'info');

    setTimeout(() => {
      showToast('AI Agent: Generated customized cover letters citing LEGACY and DSA...', 'info');
      synth.playClick();
    }, 1000);

    setTimeout(() => {
      showToast('AI Agent: Submitted 12 applications across LinkedIn, TCS NextStep, Jio, Wellfound, Unstop!', 'success');
      synth.playSuccess();
    }, 2200);

    setTimeout(() => {
      // Mark all as applied
      PORTFOLIO_DATA.internships.forEach(i => appliedInternshipIds.add(i.id));
      updateScoutStats();
      renderInternships(document.querySelector('.intern-tab.active')?.dataset.filter || 'all');

      btn.disabled = false;
      btn.innerHTML = origHtml;

      showToast(`📧 Full 12-Role Digest & Verification dispatched to ${PORTFOLIO_DATA.profile.email}`, 'success');
      synth.playSuccess();
    }, 3200);
  });
}

function initScoutRescanBtn() {
  const btn = document.getElementById('btn-run-scout-scan');
  if (!btn) return;

  btn.addEventListener('click', () => {
    synth.playClick();
    btn.disabled = true;
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span>Scanning...</span>`;

    setTimeout(() => {
      synth.playSuccess();
      showToast('AI Scout Rescan Complete! 12 targeted internships synchronized.', 'success');
      btn.disabled = false;
      btn.innerHTML = originalText;
      renderInternships();
    }, 1000);
  });
}

function initModals() {
  const projectModal = document.getElementById('project-detail-modal');
  const projectCloseBtn = document.getElementById('modal-close-btn');

  if (projectModal && projectCloseBtn) {
    projectCloseBtn.addEventListener('click', () => {
      synth.playClick();
      projectModal.close();
    });
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.close();
      }
    });
  }

  // Email Setup Modal
  const emailModal = document.getElementById('email-setup-modal');
  const emailOpenBtn = document.getElementById('btn-open-email-setup');
  const emailCloseBtn = document.getElementById('email-setup-close-btn');

  if (emailOpenBtn && emailModal) {
    emailOpenBtn.addEventListener('click', () => {
      synth.playClick();
      emailModal.showModal();
    });
  }

  if (emailModal && emailCloseBtn) {
    emailCloseBtn.addEventListener('click', () => {
      synth.playClick();
      emailModal.close();
    });
    emailModal.addEventListener('click', (e) => {
      if (e.target === emailModal) {
        emailModal.close();
      }
    });
  }

  // Resume Modal
  const resumeModal = document.getElementById('resume-modal');
  const resumeOpenBtns = [document.getElementById('btn-open-resume'), document.getElementById('mobile-resume-btn')];
  const resumeCloseBtn = document.getElementById('resume-modal-close-btn');
  const resumePrintBtn = document.getElementById('resume-print-btn');

  resumeOpenBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        synth.playClick();
        if (resumeModal) resumeModal.showModal();
      });
    }
  });

  if (resumeModal && resumeCloseBtn) {
    resumeCloseBtn.addEventListener('click', () => {
      synth.playClick();
      resumeModal.close();
    });
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        resumeModal.close();
      }
    });
  }

  if (resumePrintBtn) {
    resumePrintBtn.addEventListener('click', () => {
      synth.playClick();
      window.print();
    });
  }
}

// ==========================================
// 8. INTERACTIVE CLI TERMINAL ENGINE
// ==========================================
class TerminalEngine {
  constructor() {
    this.form = document.getElementById('terminal-form');
    this.input = document.getElementById('terminal-input');
    this.output = document.getElementById('terminal-output');
    this.clearBtn = document.getElementById('terminal-clear-btn');
    this.history = [];
    this.historyIndex = -1;

    if (!this.form || !this.input || !this.output) return;
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawCmd = this.input.value.trim();
      if (!rawCmd) return;

      this.executeCommand(rawCmd);
      this.history.push(rawCmd);
      this.historyIndex = this.history.length;
      this.input.value = '';
    });

    // History Up/Down Arrow navigation
    this.input.addEventListener('keydown', (e) => {
      synth.playKey();
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.history.length > 0 && this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      }
    });

    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => {
        synth.playClick();
        this.clear();
      });
    }

    // Quick Command Chip Handlers
    document.querySelectorAll('.cmd-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd;
        this.input.value = cmd;
        this.executeCommand(cmd);
        this.input.value = '';
      });
    });
  }

  clear() {
    this.output.innerHTML = `
      <div class="term-line welcome-line">
        <span class="term-highlight">Yash Khandar Portfolio Shell [Cleared]</span><br>
        Type <span class="term-cmd-highlight">'help'</span> to see available commands.
      </div>
    `;
  }

  executeCommand(cmdStr) {
    synth.playClick();
    const cleanCmd = cmdStr.trim().toLowerCase();
    const args = cleanCmd.split(' ');
    const mainCmd = args[0];

    // Append executed prompt line
    const promptLine = document.createElement('div');
    promptLine.className = 'term-line';
    promptLine.innerHTML = `<div class="term-prompt-line">guest@yash:~$ <span style="color:#ffffff;">${escapeHtml(cmdStr)}</span></div>`;
    this.output.appendChild(promptLine);

    const resultDiv = document.createElement('div');
    resultDiv.className = 'term-line';

    switch (mainCmd) {
      case 'help':
        resultDiv.innerHTML = `
          <table class="term-table">
            <tr><td class="cmd-name">help</td><td>Display available commands</td></tr>
            <tr><td class="cmd-name">whoami</td><td>View Yash's background &amp; interests</td></tr>
            <tr><td class="cmd-name">education</td><td>KJ Somaiya Institute of Technology (KJSIT) info</td></tr>
            <tr><td class="cmd-name">skills</td><td>List programming languages &amp; AI tools</td></tr>
            <tr><td class="cmd-name">projects</td><td>List featured development &amp; AI projects</td></tr>
            <tr><td class="cmd-name">scout</td><td>Run AI Internship Scout &amp; view match scores</td></tr>
            <tr><td class="cmd-name">teams</td><td>IET &amp; IETE student tech team journey</td></tr>
            <tr><td class="cmd-name">cat resume</td><td>Open curriculum vitae summary</td></tr>
            <tr><td class="cmd-name">contact</td><td>Show email, GitHub &amp; LinkedIn</td></tr>
            <tr><td class="cmd-name">theme &lt;dark|light&gt;</td><td>Switch between dark and light themes</td></tr>
            <tr><td class="cmd-name">accent &lt;color&gt;</td><td>Change accent (indigo, cyan, emerald, purple, amber, rose)</td></tr>
            <tr><td class="cmd-name">sudo connect</td><td>Initiate direct connection protocol</td></tr>
            <tr><td class="cmd-name">clear</td><td>Clear terminal screen</td></tr>
          </table>
        `;
        break;

      case 'whoami':
        resultDiv.innerHTML = `
          <div>
            <span class="term-highlight">Yash Khandar</span> — Second Year Computer Engineering Student at <span class="term-cmd-highlight">KJSIT</span>.<br>
            Passionate about Artificial Intelligence, Machine Learning, Python, C, C++, and Java.<br>
            Committed to building hands-on projects and collaborating with engineering peers!
          </div>
        `;
        break;

      case 'education':
        resultDiv.innerHTML = `
          <div>
            <span class="term-highlight">KJ Somaiya Institute of Technology (KJSIT), Mumbai</span><br>
            <strong>Degree:</strong> Bachelor of Technology (B.Tech) in Computer Engineering<br>
            <strong>Current Status:</strong> Second Year Undergrad<br>
            <strong>Expected Graduation:</strong> September 2029
          </div>
        `;
        break;

      case 'teams':
        resultDiv.innerHTML = `
          <div>
            <span class="term-cmd-highlight">1. IET Technical Team:</span> Current member organizing workshops and tech initiatives at KJSIT.<br>
            <span class="term-cmd-highlight">2. IETE KJSIT Technical Team:</span> Former active member organizing technical competitions and peer learning sessions.
          </div>
        `;
        break;

      case 'skills':
        resultDiv.innerHTML = `
          <div>
            <span class="term-cmd-highlight">Languages:</span> Python, C, C++, Java, HTML, CSS<br>
            <span class="term-cmd-highlight">Core CS:</span> Data Structures &amp; Algorithms (DSA)<br>
            <span class="term-cmd-highlight">AI / ML (Learning):</span> Python Libraries (NumPy, Pandas, Scikit-Learn, Matplotlib)
          </div>
        `;
        break;

      case 'projects':
        resultDiv.innerHTML = `
          <div>
            ${PORTFOLIO_DATA.projects.map((p, i) => `
              <div><strong>[${i + 1}] ${p.title}</strong> (${p.badge}) - ${p.subtitle}</div>
            `).join('')}
            <div style="margin-top: 6px; color: var(--accent-light);">Scroll up to the Projects section or click any card for highlights!</div>
          </div>
        `;
        break;

      case 'scout':
      case 'internships':
        resultDiv.innerHTML = `
          <div>
            <span class="term-highlight">=== AI INTERNSHIP SCOUT RESULTS (Top Matches for Yash) ===</span><br>
            ${PORTFOLIO_DATA.internships.map(i => `
              <div><strong>[${i.id}] ${i.role}</strong> @ ${i.company} &bull; <span class="term-cmd-highlight">${i.matchScore}% Match</span> (${i.location})</div>
            `).join('')}
            <div style="margin-top: 6px; color: var(--accent-light);">Type 'auto-apply' to submit all applications and dispatch email report to yashkhandar04@gmail.com!</div>
          </div>
        `;
        break;

      case 'auto-apply':
      case 'autoapply':
        synth.playSuccess();
        resultDiv.innerHTML = `
          <div>
            <span class="term-highlight">⚡ AI AUTONOMOUS APPLICATION PIPELINE TRIGGERED</span><br>
            [1/4] Scanning 5 verified internship portals... Done.<br>
            [2/4] Generating tailored Cover Letters for Yash Khandar (KJSIT)... Done.<br>
            [3/4] Auto-submitting applications to Cognitive AI, Nexis, VisionTech, Aether, Zenith... Confirmed ✓<br>
            [4/4] Dispatched formatted status digest &amp; receipts to: <span class="term-cmd-highlight">yashkhandar04@gmail.com</span><br>
            <span style="color:#34d399; font-weight:bold;">🎉 5/5 Applications Submitted &amp; Tracked!</span>
          </div>
        `;
        PORTFOLIO_DATA.internships.forEach(i => appliedInternshipIds.add(i.id));
        updateScoutStats();
        renderInternships(document.querySelector('.intern-tab.active')?.dataset.filter || 'all');
        showToast(`📧 Application Digest sent to ${PORTFOLIO_DATA.profile.email}`, 'success');
        break;

      case 'cat':
        if (args[1] === 'resume' || args[1] === 'cv') {
          resultDiv.innerHTML = `
            <div>
              <span class="term-highlight">=== YASH KHANDAR - RESUME ===</span><br>
              <strong>College:</strong> KJ Somaiya Institute of Technology (B.Tech Comp Eng)<br>
              <strong>Passions:</strong> AI/ML, Python, C++, Web Development, Tech Teams<br>
              <button class="cmd-chip" style="margin-top: 8px;" onclick="document.getElementById('btn-open-resume').click()">Open Full Resume Modal</button>
            </div>
          `;
        } else {
          resultDiv.innerHTML = `<span class="term-error">Usage: cat resume</span>`;
        }
        break;

      case 'contact':
        resultDiv.innerHTML = `
          <div>
            <strong>Email:</strong> <a href="mailto:yashkhandar04@gmail.com" style="color:var(--accent-light); text-decoration:underline;">yashkhandar04@gmail.com</a><br>
            <strong>GitHub:</strong> <a href="https://github.com/yashkhandar001" target="_blank" style="color:var(--accent-light); text-decoration:underline;">github.com/yashkhandar001</a><br>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yash-khandar-125672370" target="_blank" style="color:var(--accent-light); text-decoration:underline;">linkedin.com/in/yash-khandar-125672370</a>
          </div>
        `;
        break;

      case 'sudo':
        if (args[1] === 'connect' || args[1] === 'hire') {
          synth.playSuccess();
          resultDiv.innerHTML = `
            <div style="color: #34d399; font-weight: bold;">
              🎉 Connection protocol initiated!<br>
              Yash is excited to collaborate and discuss new opportunities.<br>
              Navigating to contact section...
            </div>
          `;
          setTimeout(() => {
            const contactSec = document.getElementById('contact');
            if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
          }, 700);
        } else {
          resultDiv.innerHTML = `<span class="term-error">Permission denied: try 'sudo connect'</span>`;
        }
        break;

      case 'theme':
        if (args[1] === 'dark' || args[1] === 'light') {
          setTheme(args[1]);
          resultDiv.innerHTML = `<span>Theme updated to <strong>${args[1]}</strong> mode.</span>`;
        } else {
          resultDiv.innerHTML = `<span class="term-error">Usage: theme &lt;dark|light&gt;</span>`;
        }
        break;

      case 'accent':
        const validAccents = ['indigo', 'cyan', 'emerald', 'purple', 'amber', 'rose'];
        if (validAccents.includes(args[1])) {
          setAccent(args[1]);
          resultDiv.innerHTML = `<span>Accent color updated to <strong>${args[1]}</strong>.</span>`;
        } else {
          resultDiv.innerHTML = `<span class="term-error">Usage: accent &lt;${validAccents.join('|')}&gt;</span>`;
        }
        break;

      case 'clear':
        this.clear();
        return;

      case 'date':
        resultDiv.innerHTML = `<span>${new Date().toUTCString()}</span>`;
        break;

      case 'echo':
        resultDiv.innerHTML = `<span>${escapeHtml(cmdStr.substring(5))}</span>`;
        break;

      default:
        resultDiv.innerHTML = `<span class="term-error">Command not found: '${escapeHtml(cmdStr)}'. Type 'help' for available commands.</span>`;
        break;
    }

    this.output.appendChild(resultDiv);
    this.output.scrollTop = this.output.scrollHeight;
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ==========================================
// 9. THEME & ACCENT SYSTEM
// ==========================================
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('yash_theme', theme);

  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');
  if (moonIcon && sunIcon) {
    moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
    sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
  }
}

function setAccent(accent) {
  document.documentElement.setAttribute('data-accent', accent);
  localStorage.setItem('yash_accent', accent);

  document.querySelectorAll('.color-swatch').forEach(swatch => {
    if (swatch.dataset.color === accent) {
      swatch.classList.add('active');
    } else {
      swatch.classList.remove('active');
    }
  });
}

function initThemeControls() {
  const savedTheme = localStorage.getItem('yash_theme') || 'dark';
  const savedAccent = localStorage.getItem('yash_accent') || 'indigo';
  setTheme(savedTheme);
  setAccent(savedAccent);

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      synth.playClick();
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
      showToast(`Switched to ${current === 'dark' ? 'Light' : 'Dark'} mode`, 'info');
    });
  }

  const accentBtn = document.getElementById('accent-toggle-btn');
  const accentPalette = document.getElementById('accent-palette');
  if (accentBtn && accentPalette) {
    accentBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      synth.playClick();
      accentPalette.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      accentPalette.classList.remove('show');
    });

    document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        synth.playClick();
        const color = swatch.dataset.color;
        setAccent(color);
        showToast(`Accent color set to ${color}`, 'success');
        accentPalette.classList.remove('show');
      });
    });
  }

  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      synth.toggle();
      showToast(`Sound FX ${synth.enabled ? 'Enabled' : 'Muted'}`, 'info');
    });
  }
}

// ==========================================
// 10. CONTACT FORM & INTERACTION HANDLERS
// ==========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit-btn');

    // Reset error states
    document.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) {
      synth.playBeep(220, 0.15, 'sawtooth');
      showToast('Please correct the highlighted form errors.', 'info');
      return;
    }

    // Submit animation simulation
    submitBtn.disabled = true;
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Transmitting...</span>`;

    setTimeout(() => {
      synth.playSuccess();
      showToast(`Thank you, ${nameInput.value.trim()}! Your message has been sent to Yash.`, 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }, 1200);
  });

  // Copy email chips and buttons
  const copyButtons = document.querySelectorAll('[data-copy], #copy-email-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copy || PORTFOLIO_DATA.profile.email;
      navigator.clipboard.writeText(textToCopy).then(() => {
        synth.playSuccess();
        showToast(`Copied to clipboard: ${textToCopy}`, 'success');
      }).catch(() => {
        showToast(`Email: ${textToCopy}`, 'info');
      });
    });
  });
}

// ==========================================
// 11. NAVIGATION & SCROLL SPY
// ==========================================
function initNavigation() {
  // Mobile drawer toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      synth.playClick();
      mobileDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Scroll spy active link indicator
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Live Status / Availability
  const timezoneStatus = document.getElementById('live-timezone-status');
  if (timezoneStatus) {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
      timezoneStatus.textContent = `${timeStr} IST • Open to Projects`;
    };
    updateTime();
    setInterval(updateTime, 60000);
  }
}

// ==========================================
// 12. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  new ParticleCanvas('particle-canvas');
  new Typewriter('typewriter-target', PORTFOLIO_DATA.typewriterPhrases);
  new TerminalEngine();

  renderSkills();
  initSkillsTabs();

  renderProjects();
  initProjectsTabs();

  renderInternships();
  initInternshipTabs();
  initApplicationPacketModal();
  initScoutRescanBtn();
  initAutoApplyAllBtn();

  initModals();
  initThemeControls();
  initContactForm();
  initNavigation();

  // Footer Year
  const yearElem = document.getElementById('footer-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();
});

