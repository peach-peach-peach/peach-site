<script lang="ts">
	import Marquee from '@/components/primitive/Marquee.svelte'
	import informationEn from '$lib/images/typography/information_en.svg?raw'
	import informationJa from '$lib/images/typography/information_ja.svg?raw'
	import { getCategoryItemById } from '@/domain/Category/getCategoryItem'
	import type { ComponentProps } from 'svelte'

	const contentData = {
		imageEn: informationEn,
		imageJa: informationJa,
		// newsと同じカラー
		themeColor: getCategoryItemById('news').themeColor
	} satisfies { imageJa: string; imageEn: string; themeColor: string }

	export let wrapperStyle: string = ''
	export let marqueeProps: ComponentProps<InstanceType<typeof Marquee>> = {}

	/* eslint-disable svelte/no-at-html-tags */
</script>

<div class="wrapper" style="--theme-color: {contentData.themeColor}; {wrapperStyle}">
	<Marquee autoFill direction="down" {...marqueeProps}>
		<div class="content">
			<!-- 長さが足りないことがあるので2ループ -->
			<span class="label">{@html contentData.imageEn}</span>
			<span class="label">{@html contentData.imageJa}</span>
		</div>
	</Marquee>
</div>

<style>
	.wrapper {
		margin: 0;
		height: 100%;
		padding: 0;
		background-color: var(--theme-color);
	}

	.content {
		height: 100%;
	}

	.label {
		margin-right: 0.9rem;
	}
</style>
