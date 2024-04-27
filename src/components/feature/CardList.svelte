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
</script>

{#if items.length === 0}
	<section class="no-contents">
		<p>記事がありません</p>
	</section>
{:else}
	<section>
		<div class="list">
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
		</div>
	</section>
{/if}

<style lang="scss">
	.list {
		display: block;
		grid-template-columns: unset;
		padding: 0;
		margin: 0;
	}

	a {
		position: relative;
		display: block;
		padding: 1rem;
		background-color: rgba(#fff, 0.3);
		backdrop-filter: blur(16px) brightness(1.08);
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
			display: inline-block;
			margin-top: 1rem;
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
			text-decoration: underline;
		}

		time {
			color: var(--color-text);
			display: block;
			position: absolute;
			bottom: 1rem;
			font-size: 0.8rem;
			font-family: 'Montserrat', sans-serif;
		}
	}

	a:hover {
		background-color: var(--theme-color);
		transition: background-color 0.2s ease-in-out;

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
			margin: -0.5rem;
		}

		h3 {
			background-color: var(--color-key-pink);
			transition:
				color 0.1s ease-in-out,
				background-color 0.1s ease-in-out;
		}
	}

	.no-contents {
		padding: 3rem;
		margin: 3rem;
		background-color: rgba(#fff, 0.3);
		backdrop-filter: blur(16px) brightness(1.08);
		text-align: center;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.list {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			border-bottom: 1px solid var(--color-bg-dark);
		}

		article {
			border-right: 1px solid var(--color-bg-dark);
			border-bottom: 1px solid var(--color-bg-dark);
		}
	}
</style>
