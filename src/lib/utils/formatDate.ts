export const formatDate = (dateStr: string | undefined) => {
	if (dateStr == null) return ''
	const date = new Date(dateStr)
	return new Intl.DateTimeFormat('ja-JP').format(date)
}
