import type { ReactNode } from 'react'
import styled from '@emotion/styled'

interface HeadingProps {
  children: ReactNode
}

const StyledH1 = styled.h1`
  font-family: sans-serif;
  color: #333;
  border-bottom: 4px solid orange;
  padding-bottom: 10px;
  display: inline-block;
`

const Heading = ({ children }: HeadingProps) => <StyledH1>{children}</StyledH1>

export { Heading }
export type { HeadingProps }
