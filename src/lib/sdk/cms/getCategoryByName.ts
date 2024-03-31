import { categoryItems, type CategoryItem } from '@/domain/CategoryItem'

export const getCategoryByName = (name: string): CategoryItem => {
	const cat = categoryItems.find(category => category.name === name)
	if (cat == null) throw new Error('Category not found')

	return cat
}
