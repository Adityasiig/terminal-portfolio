import { useState, useRef, useEffect, useCallback } from 'react'
import type { TerminalLine as TLine, Theme } from '../types'
import { getBootSequence, getPrompt, processCommand } from '../data/portfolio'
import { THEMES } from '../data/themes'
import TerminalLineComponent from './TerminalLine'

export default function Terminal() {
  const [lines, setLines] = useState<TLine[]>([])
  const [input, setInput] = useState('')
  const [theme, setTheme] = useState<Theme>('dark')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [booted, setBooted] = useState(false)
  const [bootIndex, setBotIndex] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const bootLines = useRef<TLine[]>(getBootSequence())

  const colors = THEMES[theme]
  const prompt = getPrompt()

  // Boot sequence
  useEffect(() => {
    if (booted) return
    if (bootIndex < bootLines.current.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootLines.current[bootIndex]])
        setBotIndex(bootIndex + 1)
      }, bootIndex === 0 ? 300 : 80)
      return () => clearTimeout(timer)
    } else {
      setBooted(true)
    }
  }, [bootIndex, booted])

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  // Focus input on click
  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (!booted) return

    const trimmed = input.trim()

    // Add input line
    const inputLine: TLine = {
      id: `input-${Date.now()}`,
      type: 'input',
      content: trimmed,
      prompt,
    }

    if (trimmed === 'clear') {
      setLines([])
      setInput('')
      setHistory(prev => [...prev, trimmed])
      setHistoryIndex(-1)
      return
    }

    // Handle theme command
    if (trimmed.startsWith('theme')) {
      const parts = trimmed.split(/\s+/)
      const newTheme = parts[1] as Theme
      if (newTheme && THEMES[newTheme]) {
        setTheme(newTheme)
        setLines(prev => [...prev, inputLine, {
          id: `theme-${Date.now()}`,
          type: 'success',
          content: `Theme switched to: ${newTheme}`,
        }, { id: `s-${Date.now()}`, type: 'output', content: '' }])
      } else {
        setLines(prev => [...prev, inputLine, {
          id: `theme-err-${Date.now()}`,
          type: 'error',
          content: 'Available themes: dark, light, solarized',
        }, { id: `s-${Date.now()}`, type: 'output', content: '' }])
      }
      setInput('')
      setHistory(prev => [...prev, trimmed])
      setHistoryIndex(-1)
      return
    }

    // Handle history command
    if (trimmed === 'history') {
      const historyLines: TLine[] = history.map((h, i) => ({
        id: `hist-${i}`,
        type: 'output' as const,
        content: `  ${String(i + 1).padStart(4, ' ')}  ${h}`,
      }))
      setLines(prev => [...prev, inputLine, ...historyLines, { id: `s-${Date.now()}`, type: 'output', content: '' }])
      setInput('')
      setHistory(prev => [...prev, trimmed])
      setHistoryIndex(-1)
      return
    }

    const result = processCommand(trimmed)
    setLines(prev => [...prev, inputLine, ...result])
    setInput('')
    setHistory(prev => [...prev, trimmed])
    setHistoryIndex(-1)
  }, [input, booted, prompt, history])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setInput(history[newIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return
      const newIndex = historyIndex + 1
      if (newIndex >= history.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const commands = ['help', 'whoami', 'about', 'projects', 'skills', 'contact', 'social', 'certs', 'neofetch', 'theme', 'clear', 'history', 'date', 'echo', 'ls', 'cat', 'pwd']
      const match = commands.filter(c => c.startsWith(input.trim().toLowerCase()))
      if (match.length === 1) setInput(match[0])
    }
  }, [history, historyIndex, input])

  return (
    <div
      className="terminal-wrapper"
      style={{ background: colors.bg }}
      onClick={focusInput}
    >
      <div className="terminal-window" style={{ background: colors.terminalBg, borderColor: colors.border }}>
        {/* Title Bar */}
        <div className="title-bar" style={{ background: colors.titleBar, borderBottom: `1px solid ${colors.border}` }}>
          <div className="title-bar-buttons">
            <span className="btn-close" />
            <span className="btn-minimize" />
            <span className="btn-maximize" />
          </div>
          <span className="title-bar-text" style={{ color: colors.text, opacity: 0.5 }}>
            aditya@portfolio — bash — 80x24
          </span>
          <div className="title-bar-spacer" />
        </div>

        {/* Terminal Body */}
        <div
          ref={scrollRef}
          className="terminal-body"
          style={{ background: colors.terminalBg, color: colors.text }}
        >
          {lines.map(line => (
            <TerminalLineComponent key={line.id} line={line} theme={colors} />
          ))}

          {/* Input line */}
          {booted && (
            <form onSubmit={handleSubmit} className="input-line">
              <span style={{ color: colors.success }}>{prompt}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ color: colors.text, caretColor: colors.accent }}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal input"
              />
            </form>
          )}
        </div>

        {/* Status Bar */}
        <div className="status-bar" style={{ background: colors.titleBar, borderTop: `1px solid ${colors.border}` }}>
          <span style={{ color: colors.success }}>●</span>
          <span style={{ color: colors.text, opacity: 0.4, fontSize: '11px' }}>
            {' '}bash — {lines.length} lines — theme: {theme}
          </span>
        </div>
      </div>
    </div>
  )
}
