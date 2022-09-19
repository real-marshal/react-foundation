import { useThemeSwitcher } from './useThemeSwitcher'
import { capitalize } from '@/utils'
import { Button, List } from '@/components'
import { useState } from 'react'

const themes = ['system', 'light', 'dark'] as const

const ThemeSwitcher = () => {
  const { theme: currentTheme, setTheme } = useThemeSwitcher('dark')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>Change the theme</Button>
      {isOpen && (
        <List>
          {themes.map((theme) => (
            <List.ListItem
              key={theme}
              selected={currentTheme === theme}
              onClick={() => {
                setTheme(theme)
                setIsOpen(false)
              }}
              value={theme}
            >
              {capitalize(theme)}
            </List.ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export { ThemeSwitcher }
