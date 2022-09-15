import { designTokensToCSSVarsStyle } from '@/utils'
import { css } from '@emotion/react'
import { dtValues } from './design-tokens'
import { dark } from './themes/dark'
import { light } from './themes/light'

// Injecting CSS variable values
export const globalStyles = css`
  body {
    ${designTokensToCSSVarsStyle(dtValues)}
  }

  body[data-theme='dark'] {
    ${designTokensToCSSVarsStyle({ colors: dark })}
  }

  body[data-theme='light'] {
    ${designTokensToCSSVarsStyle({ colors: light })}
  }
`
