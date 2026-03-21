<div align="center">

# Terminal Portfolio

A modern developer portfolio website with **macOS terminal aesthetics** — monospace typography, terminal window chrome, typing animations, and a dark hacker-inspired color scheme.

<br>

<a href="https://adityasiig.github.io/terminal-portfolio/">
<img src="https://img.shields.io/badge/live_demo_%E2%86%92-00ff41?style=for-the-badge&labelColor=0d1117&color=0d1117" />
</a>

<br><br>

<img src="https://img.shields.io/badge/React-0d1117?style=flat-square&logo=react&logoColor=00ff41" />
<img src="https://img.shields.io/badge/TypeScript-0d1117?style=flat-square&logo=typescript&logoColor=00ff41" />
<img src="https://img.shields.io/badge/Vite-0d1117?style=flat-square&logo=vite&logoColor=00ff41" />
<img src="https://img.shields.io/badge/Framer_Motion-0d1117?style=flat-square&logo=framer&logoColor=00ff41" />
<img src="https://img.shields.io/badge/GitHub_Pages-0d1117?style=flat-square&logo=github&logoColor=00ff41" />

</div>

---

## Features

- **Terminal window chrome** — macOS-style title bar with red/yellow/green dots wrapping each section
- **Typing animations** — Realistic typewriter effect cycling through roles
- **Boot sequence** — Hero section simulates a terminal login
- **Code-style labels** — Sections labeled as `# about`, `# projects`, `# skills`, `# contact`
- **JSON/code blocks** — About section displays info as a JS object + JSON-style key-value pairs
- **Scroll-triggered reveals** — Sections animate in as you scroll
- **Responsive** — Mobile hamburger menu, stacked layouts on small screens
- **Dark theme** — GitHub-inspired dark palette with cyan accents
- **Subtle effects** — Scanline overlay, glow orbs, grid background

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Boot-up animation, name, typing roles, CTA buttons |
| **About** | Bio, education, JSON-style details, code block, certifications |
| **Projects** | Terminal-windowed project cards with status badges and tech tags |
| **Skills** | Categorized skill grid with color-coded groups |
| **Contact** | Form styled as `nano message.txt` with email/GitHub/LinkedIn links |
| **Footer** | Terminal prompt style copyright |

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool + dev server |
| Framer Motion | Animations |
| CSS (vanilla) | Styling with CSS variables |
| GitHub Actions | CI/CD to GitHub Pages |

## Getting Started

```bash
# Clone
git clone https://github.com/Adityasiig/terminal-portfolio.git
cd terminal-portfolio

# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

## Project Structure

```
src/
  App.tsx                  # Root component
  index.css                # Global styles, CSS variables, utilities
  main.tsx                 # Entry point
  components/
    Navbar.tsx             # Fixed nav with mobile menu
    Hero.tsx               # Hero section with boot animation
    About.tsx              # About + certifications
    Projects.tsx           # Project cards
    Skills.tsx             # Skills grid
    Contact.tsx            # Contact form + links
    Footer.tsx             # Footer
    TerminalWindow.tsx     # Reusable macOS window chrome wrapper
  hooks/
    useTypingText.ts       # Typewriter effect hook
    useReveal.ts           # Scroll-triggered reveal hook
  data/
    portfolio.ts           # All personal data (bio, projects, skills)
```

## Deployment

Deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

Workflow: `.github/workflows/deploy.yml`

---

<div align="center">

**Built by [Aditya Singh](https://github.com/Adityasiig)**

</div>
