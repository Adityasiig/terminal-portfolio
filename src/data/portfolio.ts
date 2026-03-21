export const profile = {
  name: 'Aditya Singh',
  title: 'Full-Stack Developer & Security Researcher',
  location: 'India',
  email: 'adityasingh@example.com',
  github: 'https://github.com/Adityasiig',
  linkedin: '#',
  bio: [
    'I build robust web applications and explore the boundaries of cybersecurity.',
    'Focused on clean architecture, performance, and writing code that lasts.',
    'Currently working on security tools and modern web experiences.',
  ],
}

export const skills = [
  {
    category: 'Languages',
    icon: '{}',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
    color: 'var(--cyan)',
  },
  {
    category: 'Frontend',
    icon: '</>',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
    color: 'var(--purple)',
  },
  {
    category: 'Backend',
    icon: '>_',
    items: ['Node.js', 'Express', 'Spring Boot', 'REST APIs', 'GraphQL'],
    color: 'var(--green)',
  },
  {
    category: 'Tools & Infra',
    icon: '#!',
    items: ['Git', 'Docker', 'Linux', 'AWS', 'MongoDB', 'PostgreSQL'],
    color: 'var(--orange)',
  },
  {
    category: 'Security',
    icon: '>>',
    items: ['Penetration Testing', 'OWASP', 'Burp Suite', 'Network Analysis', 'CTF'],
    color: 'var(--red)',
  },
]

export const projects = [
  {
    name: 'WebVulnScanner',
    description: 'Automated web vulnerability scanner that detects XSS, SQL injection, CSRF, and other OWASP Top 10 vulnerabilities with detailed reporting.',
    tech: ['Python', 'Security', 'OWASP', 'Automation'],
    github: 'https://github.com/Adityasiig',
    live: '',
    status: 'active',
  },
  {
    name: 'Terminal Portfolio',
    description: 'This very site — a developer portfolio with macOS terminal aesthetics, built with React, TypeScript, and Framer Motion.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'CSS'],
    github: 'https://github.com/Adityasiig/terminal-portfolio',
    live: 'https://adityasiig.github.io/terminal-portfolio/',
    status: 'live',
  },
  {
    name: 'Gotham Portfolio',
    description: 'A dark, cinematic developer portfolio with 3D cityscapes, paint splatter effects, and Gotham-inspired aesthetics.',
    tech: ['Next.js', 'Three.js', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/Adityasiig/gotham-portfolio',
    live: 'https://adityasiig.github.io/gotham-portfolio/',
    status: 'live',
  },
  {
    name: 'Task Manager CLI',
    description: 'A fast, minimal command-line task manager with priority levels, due dates, and persistent local storage.',
    tech: ['Python', 'CLI', 'JSON', 'Automation'],
    github: 'https://github.com/Adityasiig',
    live: '',
    status: 'completed',
  },
]

export const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
]
