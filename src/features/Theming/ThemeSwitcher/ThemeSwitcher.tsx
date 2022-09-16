import { useThemeSwitcher } from './useThemeSwitcher'
import { capitalize } from '@/utils'
import { List } from '@/components'

const themes = ['system', 'light', 'dark'] as const

const ThemeSwitcher = () => {
  const { theme: currentTheme, setTheme } = useThemeSwitcher()

  return (
    <List>
      {themes.map((theme) => (
        <List.ListItem
          key={theme}
          selected={currentTheme === theme}
          onClick={() => setTheme(theme)}
          value={theme}
        >
          {capitalize(theme)}
        </List.ListItem>
      ))}
    </List>
  )
}

export { ThemeSwitcher }
