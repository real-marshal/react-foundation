import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import { ListItem } from './ListItem'

interface ListProps {
  children: ReactNode
}

const StyledUL = styled.ul`
  border: 1px solid black;
  border-radius: 10px;
  padding: 2px;
  width: fit-content;
`

const List = ({ children }: ListProps) => <StyledUL>{children}</StyledUL>

List.ListItem = ListItem

export { List }
export type { ListProps }
