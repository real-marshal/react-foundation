import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { LiHTMLAttributes, ReactNode } from 'react'

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode
  selected?: boolean
}

const StyledLI = styled.li<ListItemProps>`
  list-style: none;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 4px 12px;
  margin: 2px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #aaa;
    `}
`

const ListItem = ({ children, ...props }: ListItemProps) => (
  <StyledLI {...props}>{children}</StyledLI>
)

export { ListItem }
export type { ListItemProps }
