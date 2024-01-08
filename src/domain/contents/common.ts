export type HTMLString = string

export type PrimaryKeyProps = {
	id: string
}

export type ImageObject = {
	url: string
	width?: number
	height?: number
}

export type TimestampProps = {
	createdAt: string
	updatedAt: string
	publishedAt?: string
	revisedAt?: string
}
