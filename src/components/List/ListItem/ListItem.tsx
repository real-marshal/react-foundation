import { dt } from '@/features/Theming'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { LiHTMLAttributes, ReactNode } from 'react'

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode
  selected?: boolean
}

const StyledLI = styled.li<ListItemProps>`
  color: ${dt.colors.primary};
  background-color: ${dt.colors.background};
  list-style: none;
  padding: ${dt.padding.md} ${dt.padding.lg};
  cursor: pointer;

  &:first-of-type {
    border-radius: 6px 6px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 6px 6px;
  }

  &:hover {
    color: ${dt.colors.background};
    background-color: ${dt.colors.primary};
  }

  ${({ selected }) =>
    selected &&
    css`
      color: ${dt.colors.background};
      background-color: ${dt.colors.primary};
    `}
`

const ListItem = ({ children, ...props }: ListItemProps) => (
  <StyledLI {...props}>{children}</StyledLI>
)

export { ListItem }
export type { ListItemProps }
