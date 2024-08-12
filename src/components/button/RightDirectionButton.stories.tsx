import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import RightDirectionButtonComp from './RightDirectionButton'

type StoryProps = ComponentProps<typeof RightDirectionButtonComp>

const meta: Meta<StoryProps> = {
  component: RightDirectionButtonComp,
  title: 'Design System/Button/RightDirectionButton',
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

export const RightDirectionButton: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IpeTWy7R9uSL4iKpyBiNdL/X-Design-System?node-id=5641-13330&m=dev'
    }
  },
  args: {
    disabled: false
  },
  render: (args) => <RightDirectionButtonComp {...args} />
}
