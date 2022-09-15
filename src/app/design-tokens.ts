import { designTokensToCSSVarNames } from '@/utils'
import { light } from './themes/light'

export const dtValues = {
  padding: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  margin: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
}

export const dt = designTokensToCSSVarNames({ ...dtValues, colors: light })
