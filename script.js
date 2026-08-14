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
    this.maxParticles = window.innerWidth < 768 ? 28 : 60;
    this.mouse = { x: null, y: null, radius: window.innerWidth < 768 ? 90 : 140 };
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });
    
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    // Touch Support for Mobile / Tablet Devices
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        this.mouse.x = e.touches[0].clientX;
        this.mouse.y = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.x = e.touches[0].clientX;
        this.mouse.y = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    }, { passive: true });

    this.createParticles();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.maxParticles = window.innerWidth < 768 ? 28 : 60;
    this.mouse.radius = window.innerWidth < 768 ? 90 : 140;
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
    this.element = document.getElementById(elementId);
    this.phrases = phrases;
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.speed = 80;
    if (this.element) {
      this.type();
    }
  }

  type() {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.element.textContent = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.speed = 40;
    } else {
      this.element.textContent = currentPhrase.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.speed = 80;
    }

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      this.isDeleting = true;
      this.speed = 1800; // Pause at end of phrase
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.speed = 400; // Pause before new phrase
    }

    setTimeout(() => this.type(), this.speed);
  }
}

// ==========================================
// 5. SKILLS MATRIX RENDERING & TABS
// ==========================================
function renderSkills(filter = 'all') {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PORTFOLIO_DATA.skills 
    : PORTFOLIO_DATA.skills.filter(s => s.category === filter);

  container.innerHTML = filtered.map(skill => `
    <div class="glass-card skill-card" data-category="${skill.category}">
      <div class="skill-card-top">
        <div class="skill-info-group">
          <span class="skill-badge-icon">${skill.icon}</span>
          <div>
            <h3 class="skill-name">${skill.name}</h3>
            <span class="skill-category-tag">${getCategoryLabel(skill.category)}</span>
          </div>
        </div>
        <span class="skill-level-pct">${skill.level}%</span>
      </div>
      
      <div class="skill-progress-bar-wrap">
        <div class="skill-progress-bar" style="width: ${skill.level}%;"></div>
      </div>

      <div class="skill-tag-pills">
        ${skill.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(cat) {
  switch (cat) {
    case 'languages': return 'Programming Language';
    case 'dsa': return 'Core CS & DSA';
    case 'aiml': return 'AI / ML Toolkits (Learning)';
    default: return 'Tech Skill';
  }
}

function initSkillsTabs() {
  const tabs = document.querySelectorAll('.skills-filter-bar .filter-tab');
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
// 6. PROJECTS SHOWCASE (FLAGSHIP: LEGACY)
// ==========================================
function renderProjects(category = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const filtered = category === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(project => `
    <div class="glass-card flagship-hud-card" data-project-id="${project.id}">
      <div class="flagship-hud-header">
        <div class="hud-status-badge">
          <span class="hud-status-dot"></span>
          <span class="hud-status-text">FLAGSHIP ACTIVE PROJECT &bull; IN ACTIVE DEVELOPMENT</span>
        </div>
        <span class="hud-year-pill">${project.year}</span>
      </div>

      <div class="flagship-hud-grid">
        <div class="flagship-main-col">
          <div class="flagship-title-wrap">
            <span class="flagship-prefix-tag">// AI VIRTUAL ASSISTANT ARCHITECTURE</span>
            <h3 class="flagship-title gradient-text">${project.title}</h3>
            <p class="flagship-subtitle">${project.subtitle}</p>
          </div>

          <p class="flagship-desc">${project.desc}</p>

          <!-- Waveform Visualizer Decor -->
          <div class="waveform-box">
            <span class="waveform-label">🎙️ Acoustic & NLP Audio Visualizer:</span>
            <div class="waveform-bars">
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
            </div>
          </div>

          <!-- Feature Highlights -->
          <div class="flagship-highlights">
            <span class="highlights-heading">Core Engineering Pillars:</span>
            <ul class="highlights-list">
              ${project.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="flagship-side-col">
          <!-- Live Telemetry Box -->
          <div class="hud-metrics">
            <div class="hud-metric-box">
              <span class="hud-metric-val">Python</span>
              <span class="hud-metric-lbl">Primary Logic Core</span>
            </div>
            <div class="hud-metric-box">
              <span class="hud-metric-val">Voice & NLP</span>
              <span class="hud-metric-lbl">Command Subsystem</span>
            </div>
            <div class="hud-metric-box">
              <span class="hud-metric-val">Automation</span>
              <span class="hud-metric-lbl">Workflow Engine</span>
            </div>
            <div class="hud-metric-box">
              <span class="hud-metric-val">v1.0-dev</span>
              <span class="hud-metric-lbl">Build State</span>
            </div>
          </div>

          <!-- Tech Tags -->
          <div class="flagship-tech-box">
            <span class="tech-box-heading">Technology Matrix:</span>
            <div class="project-tech-tags">
              ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <!-- Actions -->
          <div class="flagship-actions">
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="btn-project-github">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub Repository</span>
            </a>
            <button class="btn btn-outline" onclick="openProjectModal('${project.id}')">
              <span>View Technical Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initProjectsTabs() {
  const tabs = document.querySelectorAll('.projects-filter-bar .proj-tab');
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
// 7. INTERACTIVE CLI TERMINAL ENGINE
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

      case 'cat':
        if (args[1] === 'resume' || args[1] === 'cv') {
          resultDiv.innerHTML = `
            <div>
              <span class="term-highlight">=== YASH KHANDAR - RESUME ===</span><br>
              <strong>College:</strong> KJ Somaiya Institute of Technology (B.Tech Comp Eng)<br>
              <strong>Tech Stack:</strong> Python, C, C++, Java, HTML, CSS, AI/ML Libraries, DSA<br>
              <strong>Teams:</strong> IET Technical Team, IETE KJSIT Technical Team<br>
              <strong>Email:</strong> yashkhandar04@gmail.com | <strong>GitHub:</strong> github.com/yashkhandar001<br>
              <span style="color: var(--accent-light);">Tip: Click the 'Resume' button in the top navbar for full printable PDF viewer.</span>
            </div>
          `;
        } else {
          resultDiv.innerHTML = `<span>cat: ${escapeHtml(args[1] || '')}: No such file or directory</span>`;
        }
        break;

      case 'contact':
        resultDiv.innerHTML = `
          <div>
            <span class="term-highlight">Direct Reach:</span><br>
            📧 Email: <a href="mailto:yashkhandar04@gmail.com" style="color: #38bdf8; text-decoration: underline;">yashkhandar04@gmail.com</a><br>
            🌐 GitHub: <a href="https://github.com/yashkhandar001" target="_blank" style="color: #38bdf8; text-decoration: underline;">github.com/yashkhandar001</a><br>
            🔗 LinkedIn: <a href="https://www.linkedin.com/in/yash-khandar-125672370" target="_blank" style="color: #38bdf8; text-decoration: underline;">linkedin.com/in/yash-khandar-125672370</a>
          </div>
        `;
        break;

      case 'sudo':
        if (args[1] === 'connect') {
          synth.playSuccess();
          resultDiv.innerHTML = `<span class="term-highlight">[AUTH SUCCESS] Access granted. Opening mail dispatch...</span>`;
          window.location.href = "mailto:yashkhandar04@gmail.com?subject=Hello%20Yash%20-%20From%20Portfolio%20Terminal";
        } else {
          resultDiv.innerHTML = `<span>sudo: user 'guest' is not in sudoers file. This incident will be reported to Yash.</span>`;
        }
        break;

      case 'theme':
        if (args[1] === 'dark' || args[1] === 'light') {
          setTheme(args[1]);
          resultDiv.innerHTML = `<span class="term-highlight">Theme updated to '${args[1]}'.</span>`;
        } else {
          resultDiv.innerHTML = `<span>Usage: theme &lt;dark|light&gt;</span>`;
        }
        break;

      case 'accent':
        const validAccents = ['indigo', 'cyan', 'emerald', 'purple', 'amber', 'rose'];
        if (validAccents.includes(args[1])) {
          setAccent(args[1]);
          resultDiv.innerHTML = `<span class="term-highlight">Accent palette set to '${args[1]}'.</span>`;
        } else {
          resultDiv.innerHTML = `<span>Usage: accent &lt;indigo|cyan|emerald|purple|amber|rose&gt;</span>`;
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
// 8. THEME & ACCENT SYSTEM
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
// 9. CONTACT FORM & INTERACTION HANDLERS
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

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      emailInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) {
      synth.playBeep(240, 0.12, 'sawtooth');
      showToast('Please fill in all required fields properly.', 'error');
      return;
    }

    // Submit Simulation
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

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==========================================
// 10. FLOATING TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconSvg = type === 'success'
    ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// ==========================================
// 11. NAVIGATION & SCROLL SPY
// ==========================================
function initNavigation() {
  // Mobile drawer toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileResumeBtn = document.getElementById('mobile-resume-btn');

  const closeMobileNav = () => {
    if (mobileDrawer && mobileToggle) {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      synth.playClick();
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    if (mobileResumeBtn) {
      mobileResumeBtn.addEventListener('click', () => {
        closeMobileNav();
      });
    }

    // Auto-close on click outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains('open')) {
        closeMobileNav();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileNav();
      }
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

  initModals();
  initThemeControls();
  initContactForm();
  initNavigation();

  // Footer Year
  const yearElem = document.getElementById('footer-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();
});
