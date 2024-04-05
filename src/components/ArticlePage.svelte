<script lang="ts">
	import { browser } from '$app/environment'
	import { formatDate } from '@/lib/utils/formatDate'
	import Footer from '@/components/Footer.svelte'
	import MarqueeHeader from '@/components/MarqueeHeader.svelte'
	import PreviewNotice from '@/components/PreviewNotice.svelte'
	import type { Article } from '@/domain/contents/Article'
	import type { CategoryId } from '@/domain/Category/CategoryId'
	import { getCategoryItemById } from '@/domain/Category/getCategoryItem'

	function goBack() {
		if (browser) window.history.back()
	}

	export let category: CategoryId
	export let data: {
		item: Article
		isPreview: boolean
	}
	export let hideCatch: boolean = false

	const categoryItem = getCategoryItemById(category)

	/* eslint-disable svelte/no-at-html-tags */
</script>

<MarqueeHeader contentType={category} />

<article>
	{#if data.isPreview}
		<PreviewNotice />
	{/if}

	<h1>{data.item.title}</h1>

	<p class="published"><time>{formatDate(data.item.publishedAt)}</time></p>

	{#if data.item.eyecatch != null && !hideCatch}
		<img src={data.item.eyecatch.url} alt="アイキャッチ画像" class="eyecatch" />
	{/if}

	<div class="content">
		{@html data.item.content}
	</div>
</article>

<div class="back">
	<a href={`/${categoryItem?.id ?? ''}`} on:click={goBack}>← Back</a>
</div>

<Footer />

<style lang="scss">
	article {
		padding: 24px;
	}

	h1 {
		font-size: 1.4rem;
		margin: 0 0 1rem;
	}

	time {
		font-size: 0.8rem;
		font-family: 'Montserrat', sans-serif;
	}

	.eyecatch {
		width: 100%;
		height: auto;
		margin: 1rem 0 2rem;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
	}

	.content :global(img) {
		max-width: 100%;
		height: auto;
	}

	.back {
		margin: 0;
		padding: 0.5rem;

		text-align: center;
		font-family: 'Montserrat', sans-serif;
		background-color: var(--color-bg-dark);

		a {
			color: var(--color-text-highlight);
			text-decoration: none;
		}

		a:hover {
			background-color: transparent;
			text-decoration: underline;
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		article {
			max-width: 768px;
			margin: 2rem auto;
		}

		.published {
			margin: 1.4rem 0;
		}

		.eyecatch {
			margin-bottom: 3rem;
		}
	}
</style>
