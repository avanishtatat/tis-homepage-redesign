import { useState } from 'react'

const STORAGE_KEY = 'tis-theme'

function applyTheme(theme) {
  const root = document.documentElement
  root.classList.add('theme-transition')
  root.classList.toggle('dark', theme === 'dark')
  window.setTimeout(() => root.classList.remove('theme-transition'), 350)
}

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage unavailable (private mode): theme still works for this session.
    }
  }

  return { theme, toggleTheme }
}