import { Header } from './Header'
import styled from '@emotion/styled'
import type { ReactNode } from 'react'

interface LayoutProps {
  main: ReactNode
}

const Wrapper = styled.div`
  display: grid;
  text-align: center;
`

const Layout = ({ main }: LayoutProps) => (
  <Wrapper>
    <Header />
    {main && <main>{main}</main>}
  </Wrapper>
)

export { Layout }
export type { LayoutProps }
