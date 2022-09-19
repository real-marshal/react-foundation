import { dt } from '@/features/Theming'
import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import { ListItem } from './ListItem'

interface ListProps {
  children: ReactNode
}

const StyledUL = styled.ul`
  background: linear-gradient(${dt.colors.background}, ${dt.colors.background}) padding-box,
    ${dt.colors.gradient};
  border: 4px solid transparent;
  border-radius: 10px;
  padding: 0;
  width: fit-content;
`

const List = ({ children }: ListProps) => <StyledUL>{children}</StyledUL>

List.ListItem = ListItem

export { List }
export type { ListProps }
