import type { Meta, Story } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'Features/Header',
  component: Header,
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Basic = Template.bind({})
Basic.args = {}
