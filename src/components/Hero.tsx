import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTypingText } from '../hooks/useTypingText'
import { profile } from '../data/portfolio'
import TerminalWindow from './TerminalWindow'
import './Hero.css'

export default function Hero() {
  const typedRole = useTypingText(
    ['Full-Stack Developer', 'Security Researcher', 'Problem Solver', 'Open Source Builder'],
    70, 35, 2200
  )

  const [bootLines, setBootLines] = useState<string[]>([])
  const allBootLines = [
    `Last login: ${new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} ${new Date().toLocaleTimeString()} on ttys001`,
    '',
    `user@portfolio:~$ whoami`,
  ]

  useEffect(() => {
    allBootLines.forEach((line, i) => {
      setTimeout(() => {
        setBootLines(prev => [...prev, line])
      }, i * 400)
    })
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="grid-lines" />
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TerminalWindow title="aditya@portfolio: ~">
            <div className="boot-lines">
              {bootLines.map((line, i) => (
                <div key={i} className="boot-line">
                  {line}
                </div>
              ))}
            </div>

            <motion.div
              className="hero-name-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <h1 className="hero-name">{profile.name}</h1>
              <div className="hero-role">
                <span className="prompt-symbol">&gt;</span>
                <span className="typed-text">{typedRole}</span>
                <span className="cursor" />
              </div>
            </motion.div>

            <motion.p
              className="hero-bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {profile.bio[0]}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
            >
              <a href="#projects" className="btn btn-primary">
                <span className="btn-prefix">$</span> view_projects
              </a>
              <a href="#contact" className="btn btn-outline">
                <span className="btn-prefix">$</span> get_in_touch
              </a>
              <a
                href={profile.github}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </motion.div>
          </TerminalWindow>
        </motion.div>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <span>scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </div>
    </section>
  )
}
