import type { Meta, StoryObj } from '@storybook/svelte'
import NewArrivalsSection from './NewArrivalsSection.svelte'

const meta = {
	title: 'feature/Top/NewArrivalsSection',
	component: NewArrivalsSection,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<NewArrivalsSection>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		data: {
			topConfigs: {
				id: '1',
				new_arrivals: {
					title: 'New Arrivals',
					catch_image: {
						url: 'https://placehold.jp/640x360.png'
					},
					description: 'New Arrivals Description New Arrivals Description New Arrivals Description',
					fieldId: 'new_arrivals',
					link_label: 'watch video',
					link_url: '#'
				},
				createdAt: '2021-01-01T00:00:00+09:00',
				updatedAt: '2021-01-01T00:00:00+09:00'
			}
		}
	}
}
