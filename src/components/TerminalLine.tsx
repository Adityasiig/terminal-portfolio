import { useEffect, useState } from 'react'
import type { TerminalLine as TLine } from '../types'
import type { ThemeColors } from '../types'

interface Props {
  line: TLine
  theme: ThemeColors
  animate?: boolean
  onComplete?: () => void
}

export default function TerminalLineComponent({ line, theme, animate = false, onComplete }: Props) {
  const [displayed, setDisplayed] = useState(animate ? '' : line.content)
  const [done, setDone] = useState(!animate)

  useEffect(() => {
    if (!animate) return

    if (line.content === '') {
      setDisplayed('')
      setDone(true)
      onComplete?.()
      return
    }

    let i = 0
    const speed = line.type === 'input' ? 40 : 8
    const timer = setInterval(() => {
      i++
      setDisplayed(line.content.slice(0, i))
      if (i >= line.content.length) {
        clearInterval(timer)
        setDone(true)
        onComplete?.()
      }
    }, speed)

    return () => clearInterval(timer)
  }, [animate, line.content, line.type, onComplete])

  const colorMap: Record<string, string> = {
    input: theme.text,
    output: theme.text,
    error: theme.error,
    success: theme.success,
    warning: theme.warning,
    system: theme.secondary,
    ascii: theme.accent,
  }

  const color = colorMap[line.type] || theme.text

  // Make URLs clickable
  const renderContent = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const parts = text.split(urlRegex)
    return parts.map((part, i) =>
      urlRegex.test(part) ? (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.accent, textDecoration: 'underline' }}
        >
          {part}
        </a>
      ) : (
        <span key={i}>{part}</span>
      )
    )
  }

  return (
    <div style={{ color, minHeight: '1.4em', fontFamily: 'inherit', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
      {line.prompt && (
        <span style={{ color: theme.success }}>{line.prompt}</span>
      )}
      {done ? renderContent(displayed) : displayed}
      {animate && !done && (
        <span className="cursor-blink" style={{ color: theme.accent }}>|</span>
      )}
    </div>
  )
}
