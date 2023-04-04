import { Meta, StoryObj } from '@storybook/react'
import Button from 'components/common/button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    label: { control: 'text', defaultValue: 'Button Label' },
    kind: {
      control: 'radio',
      options: ['primary', 'outline', 'text', 'special'],
    },
    disabled: {
      description: '값이 true이면 구성 요소가 비활성화됩니다.',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Button Label',
    disabled: false,
    width: 0,
    height: 0,
  },
}

export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    kind: 'primary',
  },
}
