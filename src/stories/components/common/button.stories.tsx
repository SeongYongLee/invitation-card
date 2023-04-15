import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from 'components/common/button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text', defaultValue: 'Button Label' },
    kind: {
      control: 'radio',
      options: ['primary', 'outline', 'text', 'special'],
      defaultValue: 'primary',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '값이 true이면 구성 요소가 비활성화됩니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    width: { control: 'number', defaultValue: 0 },
    height: { control: 'number', defaultValue: 0 },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  kind: 'primary',
}
