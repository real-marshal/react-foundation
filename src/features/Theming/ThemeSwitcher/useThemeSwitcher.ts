import { useEffect, useState } from 'react'
import { useMediaQuery } from '@/hooks'

const defaultThemeFallback = 'light'

export const useThemeSwitcher = (defaultTheme = 'system') => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersLight = useMediaQuery('(prefers-color-scheme: light)')

  const persistedTheme = localStorage.getItem('theme')

  const [theme, setTheme] = useState(persistedTheme ?? defaultTheme)

  useEffect(() => {
    const actualTheme =
      theme === 'system'
        ? // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          (prefersDark && 'dark') || (prefersLight && 'light') || defaultThemeFallback
        : theme

    document.body.dataset['theme'] = actualTheme

    localStorage.setItem('theme', theme)
  }, [theme, prefersDark, prefersLight])

  return { theme, setTheme }
}
