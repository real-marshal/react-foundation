import type { ReactNode } from 'react'
import styled from '@emotion/styled'

interface ButtonProps {
  children: ReactNode
}

const StyledButton = styled.button`
  border-radius: 10px;
  background-color: orange;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
`

const Button = ({ children }: ButtonProps) => <StyledButton>{children}</StyledButton>

export { Button }
export type { ButtonProps }
