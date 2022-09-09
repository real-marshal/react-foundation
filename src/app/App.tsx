import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { css } from '@emotion/react'

export default function App() {
  return (
    <div
      css={css`
        color: orange;
      `}
    >
      <Heading>App heading</Heading>
      <Button>Button</Button>
    </div>
  )
}
