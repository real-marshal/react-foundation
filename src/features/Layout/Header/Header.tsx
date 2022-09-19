import { Heading } from '@/components'
import { dt } from '@/features/Theming'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const headingAnimation = keyframes`
  from, to {
    transform: translate(0, 0);
    text-shadow: 2px 2px 5px hotpink;
  }

  20% {
    transform: translate(40px, 10px);
    text-shadow: 2px 2px 5px lime;
  }

  55% {
    transform: translate(75px, -5px);
    text-shadow: 2px 2px 5px cyan;
  }

  70% {
    transform: translate(-30px, -15px);
    transform: skew(-150deg, -10deg);
    text-shadow: 5px 5px 5px yellow;
  }
`

const StyledHeader = styled.header`
  height: 200px;
  background: ${dt.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7vh;
  overflow: hidden;
`
const StyledHeading = styled(Heading)`
  margin: 0;
  animation: ${headingAnimation} 0.5s infinite;
`
const StyledNav = styled.nav`
  display: block;
`
const StyledUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  margin: 0;
  padding: 0;
`
const StyledLi = styled.li`
  list-style: none;
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: ${dt.padding.lg} ${dt.padding.xl};
  border: 2px solid ${dt.colors.primary};
  color: ${dt.colors.primary};
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: ${dt.colors.background};
    background: ${dt.colors.primary};
    transition: background 0.5s;
  }

  &.active {
    color: ${dt.colors.background};
    background: ${dt.colors.primary};
  }
`

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: 'about',
  },
]

const Header = () => (
  <StyledHeader>
    <StyledHeading type='h1'>React Foundation</StyledHeading>
    <StyledNav>
      <StyledUl>
        {navItems.map(({ title, link }) => (
          <StyledLi key={title}>
            <StyledNavLink to={link}>{title}</StyledNavLink>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  </StyledHeader>
)

export { Header }
