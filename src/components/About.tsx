import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { profile, certifications } from '../data/portfolio'
import TerminalWindow from './TerminalWindow'
import './About.css'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className="section-label">
          <span className="label-prefix">#</span> about
          <div className="label-line" />
        </div>

        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <TerminalWindow title="cat about.md">
            <div className="about-grid">
              <div className="about-text">
                <div className="about-prompt">
                  <span className="prompt-arrow">&gt;</span> who is aditya?
                </div>
                {profile.bio.map((line, i) => (
                  <motion.p
                    key={i}
                    className="about-line"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                  >
                    {line}
                  </motion.p>
                ))}

                <div className="about-details">
                  <div className="detail-item">
                    <span className="detail-key">location</span>
                    <span className="detail-sep">:</span>
                    <span className="detail-val">&quot;{profile.location}&quot;</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-key">education</span>
                    <span className="detail-sep">:</span>
                    <span className="detail-val">&quot;{profile.education}&quot;</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-key">focus</span>
                    <span className="detail-sep">:</span>
                    <span className="detail-val">&quot;Web Dev & Security Tooling&quot;</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-key">hireable</span>
                    <span className="detail-sep">:</span>
                    <span className="detail-val detail-bool">true</span>
                  </div>
                </div>

                <motion.p
                  className="about-status"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="status-indicator" />
                  {profile.status}
                </motion.p>
              </div>

              <div className="about-visual">
                <div className="code-block">
                  <div className="code-line"><span className="code-kw">const</span> <span className="code-var">developer</span> = {'{'}</div>
                  <div className="code-line">  <span className="code-key">name</span>: <span className="code-str">&quot;{profile.name}&quot;</span>,</div>
                  <div className="code-line">  <span className="code-key">role</span>: <span className="code-str">&quot;Dev & Security&quot;</span>,</div>
                  <div className="code-line">  <span className="code-key">languages</span>: [</div>
                  <div className="code-line">    <span className="code-str">&quot;Python&quot;</span>, <span className="code-str">&quot;JS&quot;</span>,</div>
                  <div className="code-line">    <span className="code-str">&quot;C++&quot;</span>, <span className="code-str">&quot;Java&quot;</span></div>
                  <div className="code-line">  ],</div>
                  <div className="code-line">  <span className="code-key">hardWorker</span>: <span className="code-bool">true</span>,</div>
                  <div className="code-line">  <span className="code-key">quickLearner</span>: <span className="code-bool">true</span>,</div>
                  <div className="code-line">{'}'};</div>
                </div>

                <div className="certs-block">
                  <div className="certs-title">
                    <span className="prompt-arrow">&gt;</span> certifications
                  </div>
                  <div className="certs-list">
                    {certifications.map((cert) => (
                      <span key={cert} className="cert-tag">{cert}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}
