import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import GeneralButtonComp from './GeneralButton'

type StoryProps = ComponentProps<typeof GeneralButtonComp>

const meta: Meta<StoryProps> = {
  component: GeneralButtonComp,
  title: 'Design System/Button/GeneralButton',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      options: [false, true],
      control: {
        type: 'select'
      }
    },
    children: {
      control: 'text',
      defaultValue: '닫기'
    }
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const GeneralButton: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IpeTWy7R9uSL4iKpyBiNdL/X-Design-System?node-id=5405-9209&m=dev'
    }
  },
  args: {
    disabled: false,
    children: '닫기'
  },
  render: (args) => <GeneralButtonComp {...args} />
}
