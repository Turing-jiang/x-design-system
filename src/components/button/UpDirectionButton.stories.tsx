import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import UpDirectionButtonComp from './UpDirectionButton'

type StoryProps = ComponentProps<typeof UpDirectionButtonComp>

const meta: Meta<StoryProps> = {
  component: UpDirectionButtonComp,
  title: 'Design System/Button/UpDirectionButton',
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

export const UpDirectionButton: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IpeTWy7R9uSL4iKpyBiNdL/X-Design-System?node-id=5641-13344&m=dev'
    }
  },
  args: {
    disabled: false
  },
  render: (args) => <UpDirectionButtonComp {...args} />
}
