import type { Project, Skill, TerminalLine } from '../types'

export const USER = {
  name: 'Aditya Singh',
  username: 'aditya',
  hostname: 'portfolio',
  title: 'Developer & Security Researcher',
  email: 'adityaajaysingh0104@gmail.com',
  github: 'https://github.com/Adityasiig',
  linkedin: 'https://in.linkedin.com/in/singhaditya70',
  location: 'India',
}

export const ABOUT_TEXT = [
  "I'm Aditya Singh -- a third-year BSc IT student who builds things",
  "that actually work. From crafting clean, animated front-ends to",
  "writing Python security tools that crawl and scan live websites,",
  "I'm drawn to projects where code meets real-world impact.",
  "",
  "When I'm not building, I'm learning -- exploring ethical hacking,",
  "system design, and everything in between.",
  "",
  '"The quieter you become, the more you are able to hear."',
]

export const PROJECTS: Project[] = [
  {
    name: 'WebVulnScan',
    description: 'Python-based modular web vulnerability scanner. Detects SQLi, XSS, open redirects, directory traversal, and more with detailed exploitation steps.',
    stack: ['Python', 'BeautifulSoup4', 'Jinja2', 'SSL'],
    link: 'https://github.com/Adityasiig/WebVulnScanner',
  },
  {
    name: 'TaskFlow',
    description: 'Smart TODO app with priority levels, drag-and-drop, real-time search, dark/light theme, and keyboard shortcuts.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Adityasiig/TODO-list',
    live: 'https://adityasiig.github.io/TODO-list/',
  },
  {
    name: 'Portfolio-V1',
    description: 'Modern portfolio with aurora backgrounds, bento grid layout, glassmorphism and smooth animations.',
    stack: ['HTML', 'CSS', 'JavaScript', 'EmailJS'],
    link: 'https://github.com/Adityasiig/Portfolio',
    live: 'https://adityasiig.github.io/Portfolio/',
  },
  {
    name: 'Gotham-Portfolio',
    description: 'Batman-themed dark cinematic portfolio with 3D scenes, particle rain, and glitch effects.',
    stack: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind'],
    link: 'https://github.com/Adityasiig/gotham-portfolio',
    live: 'https://adityasiig.github.io/gotham-portfolio/',
  },
]

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'JavaScript', 'Core Java', 'SQL/PL-SQL', 'R', 'Bash'],
  },
  {
    category: 'Web Dev',
    items: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express', 'Flask', 'MongoDB'],
  },
  {
    category: 'Security',
    items: ['Burp Suite', 'sqlmap', 'nmap', 'Metasploit', 'Wireshark', 'Kali Linux'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'WordPress'],
  },
  {
    category: 'CS Core',
    items: ['Data Structures', 'Networking', 'Linux Admin', 'Web Security'],
  },
]

export const CERTIFICATES = [
  'C++ Programming',
  'PL/SQL Database',
  'R Programming',
  'Computer Networking',
  'Ubuntu Network Server',
  'Ethical Hacking',
  'Kali Linux OS',
  'Intro to Cybersecurity',
  'Basic Structure of Computer',
]

let lineId = 0
function id(): string {
  return `line-${lineId++}`
}

export function getBootSequence(): TerminalLine[] {
  const now = new Date()
  const dateStr = now.toLocaleString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
  })
  return [
    { id: id(), type: 'system', content: `Last login: ${dateStr} on ttys001` },
    { id: id(), type: 'system', content: '' },
    { id: id(), type: 'system', content: '  ╔══════════════════════════════════════╗' },
    { id: id(), type: 'system', content: '  ║   Welcome to Aditya\'s Terminal      ║' },
    { id: id(), type: 'system', content: '  ║   Developer & Security Researcher   ║' },
    { id: id(), type: 'system', content: '  ╚══════════════════════════════════════╝' },
    { id: id(), type: 'system', content: '' },
    { id: id(), type: 'output', content: 'Type "help" to see available commands.' },
    { id: id(), type: 'system', content: '' },
  ]
}

export function getPrompt(): string {
  return `${USER.username}@${USER.hostname}:~$ `
}

export function processCommand(input: string): TerminalLine[] {
  const trimmed = input.trim().toLowerCase()
  const parts = trimmed.split(/\s+/)
  const cmd = parts[0]

  if (!cmd) return []

  switch (cmd) {
    case 'help':
      return [
        { id: id(), type: 'success', content: 'Available commands:' },
        { id: id(), type: 'output', content: '' },
        { id: id(), type: 'output', content: '  whoami          - Display my info' },
        { id: id(), type: 'output', content: '  about           - About me' },
        { id: id(), type: 'output', content: '  projects        - List my projects' },
        { id: id(), type: 'output', content: '  ls projects     - Same as projects' },
        { id: id(), type: 'output', content: '  skills          - Show my skills' },
        { id: id(), type: 'output', content: '  cat skills.txt  - Same as skills' },
        { id: id(), type: 'output', content: '  certs           - Show certificates' },
        { id: id(), type: 'output', content: '  contact         - Contact info' },
        { id: id(), type: 'output', content: '  social          - Social links' },
        { id: id(), type: 'output', content: '  theme [name]    - Switch theme (dark/light/solarized)' },
        { id: id(), type: 'output', content: '  clear           - Clear terminal' },
        { id: id(), type: 'output', content: '  history         - Show command history' },
        { id: id(), type: 'output', content: '  neofetch        - System info' },
        { id: id(), type: 'output', content: '  date            - Current date' },
        { id: id(), type: 'output', content: '  echo [text]     - Print text' },
        { id: id(), type: 'output', content: '  sudo [cmd]      - Try it ;)' },
        { id: id(), type: 'output', content: '' },
      ]

    case 'whoami':
      return [
        { id: id(), type: 'success', content: USER.name },
        { id: id(), type: 'output', content: USER.title },
        { id: id(), type: 'output', content: `BSc IT - 3rd Year | ${USER.location}` },
        { id: id(), type: 'output', content: '' },
      ]

    case 'about':
      return [
        { id: id(), type: 'system', content: '--- About Me ---' },
        ...ABOUT_TEXT.map(line => ({ id: id(), type: 'output' as const, content: line })),
        { id: id(), type: 'output', content: '' },
      ]

    case 'projects':
      return getProjectsOutput()

    case 'ls':
      if (parts[1] === 'projects') return getProjectsOutput()
      return [
        { id: id(), type: 'output', content: 'about.txt    projects/    skills.txt    contact.txt    certs/' },
        { id: id(), type: 'output', content: '' },
      ]

    case 'cat':
      if (parts[1] === 'skills.txt') return getSkillsOutput()
      if (parts[1] === 'about.txt') return processCommand('about')
      if (parts[1] === 'contact.txt') return processCommand('contact')
      return [{ id: id(), type: 'error', content: `cat: ${parts[1] || ''}: No such file` }]

    case 'skills':
      return getSkillsOutput()

    case 'certs':
    case 'certificates':
      return [
        { id: id(), type: 'system', content: '--- Certificates (9+) ---' },
        { id: id(), type: 'output', content: '' },
        ...CERTIFICATES.map((c, i) => ({
          id: id(),
          type: 'output' as const,
          content: `  ${String(i + 1).padStart(2, ' ')}. ${c}`,
        })),
        { id: id(), type: 'output', content: '' },
      ]

    case 'contact':
      return [
        { id: id(), type: 'system', content: '--- Contact ---' },
        { id: id(), type: 'output', content: '' },
        { id: id(), type: 'output', content: `  Email:    ${USER.email}` },
        { id: id(), type: 'output', content: `  GitHub:   ${USER.github}` },
        { id: id(), type: 'output', content: `  LinkedIn: ${USER.linkedin}` },
        { id: id(), type: 'output', content: '' },
        { id: id(), type: 'success', content: '  Open to internships, freelance, and collaborations.' },
        { id: id(), type: 'output', content: '' },
      ]

    case 'social':
      return [
        { id: id(), type: 'output', content: `  GitHub:   ${USER.github}` },
        { id: id(), type: 'output', content: `  LinkedIn: ${USER.linkedin}` },
        { id: id(), type: 'output', content: '' },
      ]

    case 'neofetch':
      return [
        { id: id(), type: 'ascii', content: '        .--.' },
        { id: id(), type: 'ascii', content: '       |o_o |      aditya@portfolio' },
        { id: id(), type: 'ascii', content: '       |:_/ |      ----------------' },
        { id: id(), type: 'ascii', content: '      //   \\ \\     OS: Terminal Portfolio v2.0' },
        { id: id(), type: 'ascii', content: '     (|     | )    Shell: React/TypeScript' },
        { id: id(), type: 'ascii', content: "    /'\\_   _/`\\    Theme: macOS Terminal" },
        { id: id(), type: 'ascii', content: "    \\___)=(___/    Host: GitHub Pages" },
        { id: id(), type: 'output', content: '' },
        { id: id(), type: 'output', content: `                   Uptime: since ${new Date().getFullYear() - 2}+ years of coding` },
        { id: id(), type: 'output', content: '                   Languages: Python, C++, JS, Java' },
        { id: id(), type: 'output', content: '                   Focus: Web Dev & Security' },
        { id: id(), type: 'output', content: '' },
      ]

    case 'date':
      return [{ id: id(), type: 'output', content: new Date().toString() }, { id: id(), type: 'output', content: '' }]

    case 'echo':
      return [{ id: id(), type: 'output', content: parts.slice(1).join(' ') }, { id: id(), type: 'output', content: '' }]

    case 'sudo':
      return [
        { id: id(), type: 'error', content: 'Nice try! But you don\'t have root access here.' },
        { id: id(), type: 'warning', content: '...or do you? Try "sudo hire-me"' },
        { id: id(), type: 'output', content: '' },
      ]

    case 'history':
      return [{ id: id(), type: 'system', content: '[history is handled by the terminal]' }]

    case 'theme':
      return [{ id: id(), type: 'system', content: `[theme command handled by terminal: ${parts[1] || 'dark'}]` }]

    case 'clear':
      return []

    case 'exit':
      return [{ id: id(), type: 'warning', content: 'There is no escape. You\'re stuck with me.' }, { id: id(), type: 'output', content: '' }]

    case 'rm':
      return [{ id: id(), type: 'error', content: 'Permission denied. This portfolio is immutable.' }, { id: id(), type: 'output', content: '' }]

    case 'pwd':
      return [{ id: id(), type: 'output', content: '/home/aditya/portfolio' }, { id: id(), type: 'output', content: '' }]

    case 'cd':
      return [{ id: id(), type: 'output', content: "You're already where you need to be." }, { id: id(), type: 'output', content: '' }]

    case 'hack':
      return [
        { id: id(), type: 'success', content: 'Initiating hack sequence...' },
        { id: id(), type: 'warning', content: 'Just kidding. But check out my WebVulnScanner project!' },
        { id: id(), type: 'output', content: '' },
      ]

    default:
      return [
        { id: id(), type: 'error', content: `command not found: ${cmd}` },
        { id: id(), type: 'output', content: 'Type "help" for available commands.' },
        { id: id(), type: 'output', content: '' },
      ]
  }
}

function getProjectsOutput(): TerminalLine[] {
  const lines: TerminalLine[] = [
    { id: id(), type: 'system', content: '--- Projects ---' },
    { id: id(), type: 'output', content: '' },
  ]

  PROJECTS.forEach((p, i) => {
    lines.push({ id: id(), type: 'success', content: `  ${String(i + 1)}. ${p.name}` })
    lines.push({ id: id(), type: 'output', content: `     ${p.description}` })
    lines.push({ id: id(), type: 'warning', content: `     Stack: ${p.stack.join(', ')}` })
    lines.push({ id: id(), type: 'output', content: `     Link:  ${p.link}` })
    if (p.live) {
      lines.push({ id: id(), type: 'output', content: `     Live:  ${p.live}` })
    }
    lines.push({ id: id(), type: 'output', content: '' })
  })

  return lines
}

function getSkillsOutput(): TerminalLine[] {
  const lines: TerminalLine[] = [
    { id: id(), type: 'system', content: '--- skills.txt ---' },
    { id: id(), type: 'output', content: '' },
  ]

  SKILLS.forEach(s => {
    lines.push({ id: id(), type: 'success', content: `  [${s.category}]` })
    lines.push({ id: id(), type: 'output', content: `    ${s.items.join('  |  ')}` })
    lines.push({ id: id(), type: 'output', content: '' })
  })

  return lines
}
