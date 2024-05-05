<script lang="ts">
	import Marquee from '@/components/primitive/Marquee.svelte'
	import discographyEn from '$lib/images/typography/discography_en.svg?raw'
	import discographyJa from '$lib/images/typography/discography_ja.svg?raw'
	import informationEn from '$lib/images/typography/information_en.svg?raw'
	import informationJa from '$lib/images/typography/information_ja.svg?raw'
	import newsEn from '$lib/images/typography/news_en.svg?raw'
	import newsJa from '$lib/images/typography/news_ja.svg?raw'
	import scheduleEn from '$lib/images/typography/schedule_en.svg?raw'
	import scheduleJa from '$lib/images/typography/schedule_ja.svg?raw'
	import profileEn from '$lib/images/typography/profile_en.svg?raw'
	import profileJa from '$lib/images/typography/profile_ja.svg?raw'
	import videoEn from '$lib/images/typography/video_en.svg?raw'
	import videoJa from '$lib/images/typography/video_ja.svg?raw'
	import { getCategoryItemById } from '@/domain/Category/getCategoryItem'
	import type { ComponentProps } from 'svelte'

	type ContentType = 'discography' | 'news' | 'schedule' | 'profile' | 'videos' | 'information'

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
			imageEn: scheduleEn,
			imageJa: scheduleJa,
			themeColor: getCategoryItemById('schedule').themeColor
		},
		profile: {
			imageEn: profileEn,
			imageJa: profileJa,
			themeColor: 'var(--color-key-pink-light)'
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
	export let sticky = false
	export let marqueeProps: ComponentProps<InstanceType<typeof Marquee>> = {}

	const contentData = contentMap[contentType]

	/* eslint-disable svelte/no-at-html-tags */
</script>

<div class="wrapper" style="--theme-color: {contentData.themeColor}; {wrapperStyle};" class:sticky>
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
		top: 0;
		background-color: var(--theme-color);
		border-bottom: 1px solid var(--color-bg-dark);
	}

	.label {
		margin-right: 0.9rem;
	}

	.sticky {
		position: fixed;
		top: 69px;
		z-index: 20;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.sticky {
			position: fixed;
			top: 0;
			z-index: 20;
		}
	}
</style>
