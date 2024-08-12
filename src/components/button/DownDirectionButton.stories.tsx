import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import DownDirectionButtonComp from './DownDirectionButton'

type StoryProps = ComponentProps<typeof DownDirectionButtonComp>

const meta: Meta<StoryProps> = {
  component: DownDirectionButtonComp,
  title: 'Design System/Button/DownDirectionButton',
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

export const DownDirectionButton: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IpeTWy7R9uSL4iKpyBiNdL/X-Design-System?node-id=5405-9211&m=dev'
    }
  },
  args: {
    disabled: false
  },
  render: (args) => <DownDirectionButtonComp {...args} />
}
