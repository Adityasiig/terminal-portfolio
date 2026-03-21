import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-label">
          <span className="label-prefix">#</span> skills
          <div className="label-line" />
        </div>

        <div className="skills-prompt">
          <span className="prompt-output">user@portfolio:~$ cat skills.json</span>
        </div>

        <div className={`skills-grid reveal ${visible ? 'visible' : ''}`}>
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="skill-group-header">
                <span className="skill-icon" style={{ color: group.color }}>{group.icon}</span>
                <span className="skill-category">{group.category}</span>
              </div>
              <div className="skill-items">
                {group.items.map((item) => (
                  <div key={item} className="skill-item">
                    <span className="skill-bullet" style={{ background: group.color }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
