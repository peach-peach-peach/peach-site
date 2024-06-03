/** setHeadersに指定するCacheControlを生成する（静的ページ用: max-age=1日） */
export const staticCacheHeaders = {
	'Cache-Control': `public, max-age=86400`
}

/** setHeadersに指定するCacheControlを生成する（動的ページ用: max-age=1時間） */
export const dynamicCacheHeaders = {
	'Cache-Control': `public, max-age=3600, stale-while-revalidate`
}
