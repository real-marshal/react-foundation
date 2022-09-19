import { Heading, Text } from '@/components'
import { ThemeSwitcher } from '@/features/Theming'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

const Home = () => (
  <Wrapper>
    <Heading type='h2'>Let's go</Heading>
    <Text>Time to start creating something cool</Text>
    <ThemeSwitcher />
  </Wrapper>
)

export { Home }
