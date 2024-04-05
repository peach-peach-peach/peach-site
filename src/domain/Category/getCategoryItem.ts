import type { CategoryId } from './CategoryId'
import { categoryItems, type CategoryItem } from './CategoryItem'

export const getCategoryItemById = (id: CategoryId): CategoryItem => {
	const categoryItem = categoryItems.find(item => item.id === id)
	if (!categoryItem) throw new Error(`categoryItem not found: ${id}`)
	return categoryItem
}

export const getCategoryItemByName = (name: string): CategoryItem => {
	const categoryItem = categoryItems.find(item => item.name === name)
	if (!categoryItem) throw new Error(`categoryItem not found: ${name}`)
	return categoryItem
}
