export interface TerminalLine {
  id: string
  type: 'input' | 'output' | 'error' | 'success' | 'warning' | 'system' | 'ascii'
  content: string
  prompt?: string
  delay?: number
}

export interface Command {
  name: string
  description: string
  handler: () => TerminalLine[]
}

export interface Project {
  name: string
  description: string
  stack: string[]
  link: string
  live?: string
}

export interface Skill {
  category: string
  items: string[]
}

export type Theme = 'dark' | 'light' | 'solarized'

export interface ThemeColors {
  bg: string
  terminalBg: string
  text: string
  accent: string
  secondary: string
  success: string
  error: string
  warning: string
  border: string
  titleBar: string
  inputBg: string
}
