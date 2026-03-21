export const profile = {
  name: 'Aditya Singh',
  title: 'Developer & Security Researcher',
  location: 'India',
  email: 'adityaajaysingh0104@gmail.com',
  github: 'https://github.com/Adityasiig',
  linkedin: 'https://linkedin.com/in/singhaditya70',
  portfolio: 'https://adityasiig.github.io/Portfolio/',
  bio: [
    'A third-year BSc IT student who loves building things that actually work.',
    'I develop web tools and security software with a focus on real-world impact.',
    'Currently building WebVulnScanner v2 with AI-powered exploit suggestions.',
  ],
  status: 'Open to internships, freelance projects, and collaborations.',
  education: 'BSc Information Technology — 3rd Year',
}

export const skills = [
  {
    category: 'Languages',
    icon: '{}',
    items: ['Python', 'C++', 'JavaScript', 'Core Java', 'SQL/PL-SQL', 'R'],
    color: 'var(--cyan)',
  },
  {
    category: 'Frontend',
    icon: '</>',
    items: ['React.js', 'HTML5', 'CSS3', 'Node.js', 'Responsive Design'],
    color: 'var(--purple)',
  },
  {
    category: 'Backend & DB',
    icon: '>_',
    items: ['Node.js', 'Express', 'Flask', 'MongoDB', 'SQL Databases'],
    color: 'var(--green)',
  },
  {
    category: 'Security',
    icon: '>>',
    items: ['Burp Suite', 'sqlmap', 'nmap', 'OWASP', 'Penetration Testing'],
    color: 'var(--red)',
  },
  {
    category: 'Tools & OS',
    icon: '#!',
    items: ['Git', 'Linux', 'Kali Linux', 'Docker', 'VS Code'],
    color: 'var(--orange)',
  },
]

export const certifications = [
  'C++',
  'PL/SQL',
  'R Programming',
  'Computer Networking',
  'Ubuntu Server',
  'Ethical Hacking',
  'Kali Linux',
  'Cybersecurity',
  'Computer Architecture',
]

export const projects = [
  {
    name: 'WebVulnScanner',
    description: 'Python-based web vulnerability scanner with 7 modules — detects SQLi, XSS, insecure headers, sensitive files, path traversal, open redirects, and SSL/TLS issues.',
    tech: ['Python', 'Security', 'OWASP', 'CLI'],
    github: 'https://github.com/Adityasiig/WebVulnScanner',
    live: '',
    status: 'active',
  },
  {
    name: 'TaskFlow',
    description: 'Feature-rich task manager with drag-and-drop, priority levels, theming, data persistence, and animated backgrounds. Full-stack with Node.js + Express.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Adityasiig/TODO-list',
    live: 'https://adityasiig.github.io/TODO-list/',
    status: 'live',
  },
  {
    name: 'ZTNA-PQC',
    description: 'Zero Trust Network Access implementation with post-quantum cryptography for future-proof secure communications.',
    tech: ['Python', 'Cryptography', 'Networking', 'Security'],
    github: 'https://github.com/Adityasiig/ztna-pqc',
    live: '',
    status: 'active',
  },
  {
    name: 'Portfolio',
    description: 'Personal developer portfolio showcasing projects, skills, and certifications with a clean responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    github: 'https://github.com/Adityasiig/Portfolio',
    live: 'https://adityasiig.github.io/Portfolio/',
    status: 'live',
  },
]

export const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
]
