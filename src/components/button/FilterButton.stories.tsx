import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import FilterButtonComp from './FilterButton'

type StoryProps = ComponentProps<typeof FilterButtonComp>

const meta: Meta<StoryProps> = {
  component: FilterButtonComp,
  title: 'Design System/Button/FilterButton',
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
      url: 'https://www.figma.com/design/IpeTWy7R9uSL4iKpyBiNdL/X-Design-System?node-id=5405-9233&m=dev'
    }
  },
  args: {
    disabled: false
  },
  render: (args) => <FilterButtonComp {...args} />
}
