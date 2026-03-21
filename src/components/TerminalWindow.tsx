import { type ReactNode } from 'react'
import './TerminalWindow.css'

interface Props {
  title?: string
  children: ReactNode
  className?: string
}

export default function TerminalWindow({ title = 'bash', children, className = '' }: Props) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="terminal-title">{title}</span>
        <div className="terminal-dots" style={{ visibility: 'hidden' }}>
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  )
}
