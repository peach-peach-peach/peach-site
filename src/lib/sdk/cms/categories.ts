/**
 * MicroCMSの `categories` API の値 (基本変更しないため固定値として管理)
 * https://le8h4au2fy.microcms.io/apis/categories
 */
export const categories = [
	{
		id: 'videos',
		name: 'ビデオ'
	},
	{
		id: 'schedule',
		name: 'スケジュール'
	},
	{
		id: 'news',
		name: 'ニュース'
	},
	{
		id: 'discography',
		name: 'ディスコグラフィー'
	}
] as const satisfies readonly CategoryItem[]

type CategoryItem = {
	readonly id: string
	readonly name: string
}

export type CategoryId = (typeof categories)[number]['id']

export const getCategoryByName = (name: string): CategoryItem => {
	const cat = categories.find(category => category.name === name)
	if (cat == null) throw new Error('Category not found')

	return cat
}
