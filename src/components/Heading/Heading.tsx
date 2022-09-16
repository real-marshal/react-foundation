import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { dt } from '@/features/Theming'

interface HeadingProps {
  children: ReactNode
}

const StyledH1 = styled.h1`
  font-family: sans-serif;
  color: ${dt.colors.primary};
  border-bottom: 4px solid orange;
  padding-bottom: 10px;
  display: inline-block;
`

const Heading = ({ children }: HeadingProps) => <StyledH1>{children}</StyledH1>

export { Heading }
export type { HeadingProps }
