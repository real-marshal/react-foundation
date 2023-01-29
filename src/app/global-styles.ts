import { dt } from '@/features/Theming'
import { css } from '@emotion/react'

export const globalStyles = css`
  body {
    background-color: ${dt.colors.background};

    a {
      text-decoration: none;
    }
  }
`
