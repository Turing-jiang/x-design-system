import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import SearchButtonComp from './SearchButton'

type StoryProps = ComponentProps<typeof SearchButtonComp>

const meta: Meta<StoryProps> = {
  component: SearchButtonComp,
  title: 'Design System/Button/SearchButton',
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

export const FilterButton: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IpeTWy7R9uSL4iKpyBiNdL/X-Design-System?node-id=5405-9232&m=dev'
    }
  },
  args: {
    disabled: false
  },
  render: (args) => <SearchButtonComp {...args} />
}
