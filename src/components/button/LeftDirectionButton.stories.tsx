import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import LeftDirectionButtonComp from './LeftDirectionButton'

type StoryProps = ComponentProps<typeof LeftDirectionButtonComp>

const meta: Meta<StoryProps> = {
  component: LeftDirectionButtonComp,
  title: 'Design System/Button/LeftDirectionButton',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      options: [true, false],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const LeftDirectionButton: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IpeTWy7R9uSL4iKpyBiNdL/X-Design-System?node-id=5641-13358&m=dev'
    }
  },
  args: {
    disabled: false
  },
  render: (args) => <LeftDirectionButtonComp {...args} />
}
