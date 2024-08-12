import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import TabButtonComp from './TabButton'

type StoryProps = ComponentProps<typeof TabButtonComp>

const meta: Meta<StoryProps> = {
  component: TabButtonComp,
  title: 'Design System/Button/TabButton',
  tags: ['autodocs'],
  argTypes: {
    shape: {
      options: ['hug', 'fixed'],
      control: {
        type: 'select'
      }
    },
    children: {
      control: 'text',
      defaultValue: 'Text'
    }
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const GeneralButton: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IpeTWy7R9uSL4iKpyBiNdL/X-Design-System?node-id=5267-34797&m=dev'
    }
  },
  args: {
    shape: 'hug',
    children: 'Text'
  },
  render: (args) => <TabButtonComp {...args} />
}
