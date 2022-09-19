import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import * as stories from './Header.stories'

describe('Header component', () => {
  const testStories = Object.values(composeStories(stories)).map(
    (Story) => [Story.storyName, Story] as [string, typeof Story]
  )

  it.each(testStories)('renders %s story', (_, Story) => {
    const view = render(
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
    expect(view.baseElement).toMatchSnapshot()
  })
})
