import { Button, Heading, ThemeSwitcher } from '@/components'
import { css, Global } from '@emotion/react'
import { globalStyles } from './global-styles'
import { dt } from './design-tokens'

import 'modern-normalize'

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <div
        css={css`
          color: orange;
          background: ${dt.colors.background};
          padding: ${dt.padding.lg};
        `}
      >
        <Heading>App heading</Heading>
        <Button>Button</Button>
        <ThemeSwitcher />
      </div>
    </>
  )
}
