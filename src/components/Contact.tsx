import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/portfolio'
import TerminalWindow from './TerminalWindow'
import './Contact.css'

export default function Contact() {
  const { ref, visible } = useReveal()
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
      setTimeout(() => {
        setFormState('idle')
        setName('')
        setEmail('')
        setMessage('')
      }, 3000)
    }, 1500)
  }

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="contact-glow" />
      <div className="container">
        <div className="section-label">
          <span className="label-prefix">#</span> contact
          <div className="label-line" />
        </div>

        <div className={`contact-layout reveal ${visible ? 'visible' : ''}`}>
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="contact-heading">
              Let&apos;s work<br />
              <span className="heading-accent">together.</span>
            </h2>
            <p className="contact-desc">
              Have a project in mind? Want to collaborate?
              Drop a message and I&apos;ll get back to you.
            </p>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="contact-link-item">
                <span className="link-label">email</span>
                <span className="link-value">{profile.email}</span>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="link-label">github</span>
                <span className="link-value">@Adityasiig</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TerminalWindow title="nano message.txt">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span className="label-sym">$</span> name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="label-sym">$</span> email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <span className="label-sym">$</span> message
                  </label>
                  <textarea
                    id="message"
                    className="form-input form-textarea"
                    placeholder="your message..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`submit-btn ${formState !== 'idle' ? 'submitted' : ''}`}
                  disabled={formState !== 'idle'}
                >
                  {formState === 'idle' && <><span className="btn-prefix">$</span> send_message</>}
                  {formState === 'sending' && 'sending...'}
                  {formState === 'sent' && (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      message sent!
                    </>
                  )}
                </button>
              </form>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
