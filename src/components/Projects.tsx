import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/portfolio'
import TerminalWindow from './TerminalWindow'
import './Projects.css'

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    active: 'var(--yellow)',
    live: 'var(--green)',
    completed: 'var(--cyan)',
  }
  return (
    <span className="status-badge" style={{ color: colors[status] || 'var(--text-muted)', borderColor: colors[status] || 'var(--border)' }}>
      <span className="status-dot" style={{ background: colors[status] }} />
      {status}
    </span>
  )
}

export default function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-label">
          <span className="label-prefix">#</span> projects
          <div className="label-line" />
        </div>

        <div className="projects-header">
          <span className="prompt-output">user@portfolio:~$ ls -la ./projects/</span>
        </div>

        <div className={`projects-grid reveal ${visible ? 'visible' : ''}`}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TerminalWindow title={`~/${project.name.toLowerCase().replace(/\s+/g, '-')}`} className="project-card">
                <div className="project-header">
                  <div className="project-number">0{i + 1}</div>
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      source
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link link-live">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                      live
                    </a>
                  )}
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
