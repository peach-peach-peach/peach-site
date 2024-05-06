<script lang="ts">
	import type { CategoryId } from '@/domain/Category/CategoryId'
	import { formatDate } from '@/lib/utils/formatDate'
	import Spacer from '@/components/primitive/Spacer.svelte'

	type ArticleItem = {
		id: string
		title: string
		eyecatch?: { url: string }
		publishedAt?: string
	}

	export let items: ArticleItem[]
	export let categoryId: CategoryId
	// 正方形の画像で表示
	export let squaredImage: boolean = false

	const rowCount = 3
	const countToFillTheRestOnPC = rowCount - (items.length % rowCount)
</script>

{#if items.length === 0}
	<section class="no-contents">
		<p>Coming soon</p>
	</section>
{:else}
	<section class="list">
		{#each items as item}
			<article class="list-card">
				<a href={`/${categoryId}/${item.id}/`}>
					<figure class:squared={squaredImage}>
						<img src={item.eyecatch?.url ?? '/card-no-image.png'} alt={item.title} />
					</figure>
					<h3>{item.title}</h3>

					<Spacer size="3rem" />
					<time>{formatDate(item.publishedAt)}</time>
				</a>
			</article>
		{/each}

		<!-- Gridのスキマを埋める要素 -->
		{#if countToFillTheRestOnPC > 0 && countToFillTheRestOnPC < rowCount}
			{#each Array(countToFillTheRestOnPC) as _}
				<div class="list-card" aria-hidden="true"></div>
			{/each}
		{/if}
	</section>
{/if}

<style lang="scss">
	.list {
		display: block;
		grid-template-columns: unset;
		padding: 0;
		margin: 0;
	}

	.list-card {
		border-bottom: 1px solid var(--color-bg-dark);
	}

	.list-card[aria-hidden='true'] {
		display: none;
	}

	a {
		position: relative;
		display: block;
		padding: 32px;
		height: 100%;

		figure {
			width: 100%;
			height: auto;
			margin: 0;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
		}

		.squared img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			aspect-ratio: 1 / 1;
			background-color: #fff;
		}

		img {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
			object-fit: contain;
			background-color: #fff;
		}

		h3 {
			margin-top: 1rem;
			font-weight: 600;
			text-decoration: underline;
			/* 2行までで省略 */
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			overflow: hidden;
			/* 未サポートブラウザのため一応 */
			max-height: 3rem;
		}

		time {
			color: var(--color-text);
			display: block;
			position: absolute;
			bottom: 32px;
			font-size: 0.8rem;
		}
	}

	a:hover {
		background-color: unset;
		color: unset;

		figure {
			width: calc(100% + 1rem);
			height: auto;
			margin: -0.5rem -0.5rem 0;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);

			transition:
				box-shadow 0.2s ease-in-out,
				width 0.1s ease-in-out,
				height 0.1s ease-in-out,
				margin 0.1s ease-in-out;
		}

		.squared {
			width: calc(100% + 8px);
			margin: -4px;
			margin: -4px -4px 0;
		}

		h3 {
			transition: color 0.1s ease-in-out;
		}
	}

	.no-contents {
		padding: 3rem;

		p {
			text-align: center;
			padding: 3rem;
			margin: 0;
			background-color: rgba(#fff, 0.3);
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.list {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}

		.list-card {
			border-right: 1px solid var(--color-bg-dark);
			border-bottom: 1px solid var(--color-bg-dark);
		}

		/* PC向けのGridのスキマを埋める要素 */
		.list-card[aria-hidden='true'] {
			display: block;
			border-right: none;
		}

		a:hover {
			color: var(--color-text-highlight);
			background-color: var(--theme-color);
			transition:
				color 0.1s ease-in-out,
				background-color 0.2s ease-in-out;

			h3 {
				background-color: var(--color-key-pink);
				transition: background-color 0.1s ease-in-out;
			}
		}
	}
</style>
