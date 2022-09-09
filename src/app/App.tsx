import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { css } from '@emotion/react'
import 'modern-normalize'

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
