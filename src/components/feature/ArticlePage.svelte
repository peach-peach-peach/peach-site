<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import Footer from '@/components/feature/Footer.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import PreviewNotice from '@/components/feature/PreviewNotice.svelte'
	import type { Article } from '@/domain/contents/Article'
	import type { CategoryId } from '@/domain/Category/CategoryId'
	import { getCategoryItemById } from '@/domain/Category/getCategoryItem'
	import GoBack from './GoBack.svelte'
	import Main from '@/components/feature/Main.svelte'

	export let category: CategoryId
	export let data: {
		item: Article
		isPreview: boolean
	}
	export let hideCatch: boolean = false

	const categoryItem = getCategoryItemById(category)

	/* eslint-disable svelte/no-at-html-tags */
</script>

<MarqueeHeader contentType={category} sticky />

<Main blur>
	{#if data.isPreview}
		<PreviewNotice />
	{/if}

	<article>
		<h1>{data.item.title}</h1>

		<p class="published"><time>{formatDate(data.item.publishedAt)}</time></p>

		{#if data.item.eyecatch != null && !hideCatch}
			<img src={data.item.eyecatch.url} alt="アイキャッチ画像" class="eyecatch" />
		{/if}

		<div class="content">
			{@html data.item.content}
		</div>
	</article>

	<GoBack href={`/${categoryItem?.id ?? ''}`} />

	<Footer />
</Main>

<style lang="scss">
	article {
		padding: 3rem 2rem;
	}

	h1 {
		font-size: 1.5rem;
		margin: 0 0 1rem;
	}

	time {
		font-size: 0.8rem;
	}

	.eyecatch {
		width: 100%;
		height: auto;
		margin: 1rem 0 2rem;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
	}

	.content {
		:global(img) {
			max-width: 100%;
			height: auto;
		}

		:global(h1) {
			margin: 1.5rem 0;
			font-size: 1.5rem;
		}

		:global(h2) {
			margin: 1.5rem 0;
			font-size: 1.3rem;
		}

		:global(p) {
			margin: 1.5rem 0;
			line-height: 1.5;
		}

		:global(a) {
			color: var(--color-key-pink);
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		article {
			max-width: 768px;
			margin: 0 auto;
		}

		.published {
			margin: 1.4rem 0;
		}

		.eyecatch {
			margin-bottom: 3rem;
		}
	}
</style>
