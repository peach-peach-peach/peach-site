import type { Meta, StoryObj } from '@storybook/svelte'
import CardList from './CardList.svelte'

const meta = {
	title: 'feature/CardList',
	component: CardList,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<CardList>
export default meta

type Story = StoryObj<typeof meta>

const getItems = (count: number) => {
	return Array.from({ length: count }, (_, i) => ({
		id: `${i + 1}`,
		title: `Card Title ${i + 1}`,
		eyecatch: {
			url: 'https://placehold.jp/150x150.png'
		},
		publishedAt: '2021-01-01T00:00:00+09:00'
	}))
}

export const CardX1: Story = {
	args: {
		categoryId: 'news',
		items: getItems(1)
	}
}

export const CardLongTtile: Story = {
	args: {
		categoryId: 'news',
		items: [
			{
				id: '1lt',
				title: Array.from({ length: 10 })
					.map(_ => '長いタイトル')
					.join(' '),
				eyecatch: {
					url: 'https://placehold.jp/150x150.png'
				},
				publishedAt: '2021-01-01T00:00:00+09:00'
			},
			...getItems(4),
			{
				id: '2lt',
				title: Array.from({ length: 10 })
					.map(_ => '長いタイトル')
					.join(' '),
				eyecatch: {
					url: 'https://placehold.jp/150x150.png'
				},
				publishedAt: '2021-01-01T00:00:00+09:00'
			},
			...getItems(5)
		]
	}
}

export const CardX3: Story = {
	args: {
		categoryId: 'news',
		items: getItems(3)
	}
}

export const CardX4: Story = {
	args: {
		categoryId: 'news',
		items: getItems(4)
	}
}

export const CardX10: Story = {
	args: {
		categoryId: 'schedule',
		items: getItems(10)
	}
}

export const CardSquared: Story = {
	args: {
		categoryId: 'schedule',
		items: getItems(10),
		squaredImage: true
	}
}
