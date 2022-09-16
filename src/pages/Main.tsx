import { Button, Heading } from '@/components'
import { dt, ThemeSwitcher } from '@/features/Theming'
import { css } from '@emotion/react'

const Main = () => (
  <div
    css={css`
      color: orange;
      padding: ${dt.padding.lg};
    `}
  >
    <Heading>App heading</Heading>
    <Button>Button</Button>
    <ThemeSwitcher />
  </div>
)

export { Main }
