import type { Preview } from '@storybook/svelte'

import '../src/routes/reset.css'
import '../src/routes/styles.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			values: [
				{
					name: 'pink',
					value: '#ffe3e3'
				}
			]
		}
	}
}

export default preview
