<script lang="ts">
	import Marquee from '@/components/primitive/Marquee.svelte'
	import discographyEn from '$lib/images/typography/discography_en.svg?raw'
	import discographyJa from '$lib/images/typography/discography_ja.svg?raw'
	import informationEn from '$lib/images/typography/information_en.svg?raw'
	import informationJa from '$lib/images/typography/information_ja.svg?raw'
	import newsEn from '$lib/images/typography/news_en.svg?raw'
	import newsJa from '$lib/images/typography/news_ja.svg?raw'
	import videoEn from '$lib/images/typography/video_en.svg?raw'
	import videoJa from '$lib/images/typography/video_ja.svg?raw'
	import { getCategoryItemById } from '@/domain/Category/getCategoryItem'
	import type { ComponentProps } from 'svelte'

	type ContentType = 'discography' | 'news' | 'schedule' | 'videos' | 'information'

	const contentMap = {
		information: {
			imageEn: informationEn,
			imageJa: informationJa,
			// newsと同じカラー
			themeColor: getCategoryItemById('news').themeColor
		},
		news: {
			imageEn: newsEn,
			imageJa: newsJa,
			themeColor: getCategoryItemById('news').themeColor
		},
		schedule: {
			// FIXME
			imageEn: newsEn,
			imageJa: newsJa,
			themeColor: getCategoryItemById('schedule').themeColor
		},
		discography: {
			imageEn: discographyEn,
			imageJa: discographyJa,
			themeColor: getCategoryItemById('discography').themeColor
		},
		videos: {
			imageEn: videoEn,
			imageJa: videoJa,
			themeColor: getCategoryItemById('videos').themeColor
		}
	} satisfies { [cat in ContentType]: { imageJa: string; imageEn: string; themeColor: string } }

	export let contentType: ContentType
	export let wrapperStyle: string = ''
	export let marqueeProps: ComponentProps<InstanceType<typeof Marquee>> = {}

	const contentData = contentMap[contentType]
</script>

<div class="wrapper" style="--theme-color: {contentData.themeColor}; {wrapperStyle}">
	<Marquee autoFill {...marqueeProps}>
		<!-- 長さが足りないことがあるので2ループ -->
		<span class="label">{@html contentData.imageEn}</span>
		<span class="label">{@html contentData.imageJa}</span>
		<span class="label">{@html contentData.imageEn}</span>
		<span class="label">{@html contentData.imageJa}</span>
	</Marquee>
</div>

<style>
	.wrapper {
		margin: 0;
		padding: 0.6rem 0;
		background-color: var(--theme-color);
		border-bottom: 1px solid var(--color-bg-dark);
	}

	.label {
		margin-right: 0.9rem;
	}
</style>
