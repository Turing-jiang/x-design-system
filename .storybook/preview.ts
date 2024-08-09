import type { Preview, ReactRenderer } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ccc',
        },
        {
          name: 'dark',
          value: '#212121',
        },
      ],
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
}

export default preview
