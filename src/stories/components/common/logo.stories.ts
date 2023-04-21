import { Meta, StoryObj } from '@storybook/react'
import component from 'components/common/logo'
import theme from 'styles/theme'

const meta: Meta<typeof component> = {
  component,
  parameters: {
    backgrounds: {
      values: [
        { name: 'tertiary', value: theme.colors.tertiary },
        { name: 'footer', value: theme.colors['background-color'].footer },
      ],
    },
  },
}

export default meta

export const Main: StoryObj<typeof component> = {
  parameters: {
    backgrounds: { default: 'tertiary' },
  },
}

export const Footer: StoryObj<typeof component> = {
  parameters: {
    backgrounds: { default: 'footer' },
  },
}
