import type { ImageObject, PrimaryKeyProps, TimestampProps } from './common'

export type FeatureObject = {
	new_arrivals: FeatureNewArrivals
} & PrimaryKeyProps &
	TimestampProps

export type FeatureNewArrivals = {
	fieldId: string
	title: string
	description: string
	link_label: string
	link_url: string
	catch_image: ImageObject
}
