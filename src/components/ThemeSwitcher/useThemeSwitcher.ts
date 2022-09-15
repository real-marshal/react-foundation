import { useEffect, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const defaultTheme = 'light'

export const useThemeSwitcher = () => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersLight = useMediaQuery('(prefers-color-scheme: light)')

  const persistedTheme = localStorage.getItem('theme')

  const [theme, setTheme] = useState(persistedTheme ?? 'system')

  useEffect(() => {
    const actualTheme =
      theme === 'system'
        ? // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          (prefersDark && 'dark') || (prefersLight && 'light') || defaultTheme
        : theme

    document.body.dataset['theme'] = actualTheme

    localStorage.setItem('theme', theme)
  }, [theme, prefersDark, prefersLight])

  return { theme, setTheme }
}
