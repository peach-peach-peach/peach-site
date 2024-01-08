/**
 * MicroCMSの `categories` API の値 (基本変更しないため固定値として管理)
 * https://le8h4au2fy.microcms.io/apis/categories
 */
export const categories = [
	{
		id: 'e4u6m4p-2o',
		name: 'ビデオ',
		value: 'videos'
	},
	{
		id: '8dgz54e2m',
		name: 'スケジュール',
		value: 'schedule'
	},
	{
		id: 'xv_usxq1ie79',
		name: 'ニュース',
		value: 'news'
	},
	{
		id: 'u6mgm122qvz2',
		name: 'ディスコグラフィー',
		value: 'discography'
	}
] as const satisfies readonly CategoryItem[]

type CategoryItem = {
	readonly id: string
	readonly name: string
	readonly value: string
}

export type CategoryName = (typeof categories)[number]['name']

export const getCategoryByName = (name: string): CategoryItem => {
	const cat = categories.find(category => category.name === name)
	if (cat == null) throw new Error('Category not found')

	return cat
}
