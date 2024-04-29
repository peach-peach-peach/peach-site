<script lang="ts">
	import Marquee from '@/components/primitive/Marquee.svelte'
	import informationEn from '$lib/images/typography/information_en.svg?raw'
	import informationJa from '$lib/images/typography/information_ja.svg?raw'
	import { getCategoryItemById } from '@/domain/Category/getCategoryItem'

	const contentData = {
		imageEn: informationEn,
		imageJa: informationJa,
		// newsと同じカラー
		themeColor: getCategoryItemById('news').themeColor
	} satisfies { imageJa: string; imageEn: string; themeColor: string }

	/* eslint-disable svelte/no-at-html-tags */
</script>

<div class="wrapper" style="--theme-color: {contentData.themeColor};">
	<Marquee autoFill direction="down" className="marquee-header-info-marquee">
		<div class="content">
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
		position: relative;
		overflow: hidden;
	}

	.content {
		height: 100%;
		transform: rotate(-90deg);
	}

	.label {
		margin-right: 0.9rem;
	}

	:global(.wrapper > .rfm-marquee-container.marquee-header-info-marquee) {
		/* FIXME: Marquee以下のclassに優先度で勝てないので */
		width: 30rem !important;
		position: absolute !important;
		z-index: 10;
		left: -13.5rem;
		top: 14rem;
	}
</style>
