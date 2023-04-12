import { actions } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Component from 'components/common/button'

export default {
  title: 'Components/Button',
  component: Component,
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
  },
} as ComponentMeta<typeof Component>

const eventsFromObject = actions({ onClick: 'clicked' })

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} {...eventsFromObject} />
)

export const Button = Template.bind({})
