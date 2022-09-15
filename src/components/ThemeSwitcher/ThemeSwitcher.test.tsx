import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import * as stories from './ThemeSwitcher.stories'

jest.mock('./useThemeSwitcher', () => ({
  useThemeSwitcher: () => ({ theme: 'system', setTheme: () => null }),
}))

describe('ThemeSwitcher component', () => {
  const testStories = Object.values(composeStories(stories)).map(
    (Story) => [Story.storyName, Story] as const
  )

  it.each(testStories)('renders %s story', (_, Story) => {
    const view = render(<Story />)
    expect(view.baseElement).toMatchSnapshot()
  })
})
