import { light } from './themes/light'
import { designTokensToCSSVarNames } from './utils'

export const dtValues = {
  padding: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '1rem',
  },
  margin: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '16px',
  },
  fontSize: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
  },
}

export const dt = designTokensToCSSVarNames({ ...dtValues, colors: light })
