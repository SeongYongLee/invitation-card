import { Meta, StoryObj } from '@storybook/react'
import component from 'components/common/title'

const meta: Meta<typeof component> = {
  component,
  args: {
    text: 'First Line Text',
    secondLineText: 'Second Line Text',
    horizontalMargin: 0,
  },
}

export default meta

export const Default: StoryObj<typeof component> = {}
