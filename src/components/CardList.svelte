<script lang="ts">
	import type { CategoryId } from '@/domain/CategoryId'
	import { formatDate } from '@/lib/utils/formatDate'
	import Spacer from '@/components/Spacer.svelte'

	type ArticleItem = {
		id: string
		title: string
		eyecatch?: { url: string }
		publishedAt?: string
	}

	export let items: ArticleItem[]
	export let categoryId: CategoryId
	export let themeColor: string = 'var(--color-key-green)'
</script>

<section>
	<div class="list">
		{#each items as item}
			<article class="list-card">
				<a href={`/${categoryId}/${item.id}/`} style="--bg-hover: {themeColor}">
					<figure><img src={item.eyecatch?.url ?? '/card-no-image.png'} alt={item.title} /></figure>
					<h3>{item.title}</h3>

					<Spacer size="3rem" />
					<time>{formatDate(item.publishedAt)}</time>
				</a>
			</article>
		{/each}
	</div>
</section>

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
		background-color: rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(30%) brightness(1.08);

		figure {
			width: 100%;
			height: auto;
			margin: 0;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
		}

		img {
			width: 100%;
			height: auto;
		}

		h3 {
			display: block;
			margin-top: 1rem;
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
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
		background-color: var(--bg-hover);
		transition: background-color 0.2s ease-in-out;

		figure {
			width: calc(100% + 1rem);
			height: auto;
			margin-left: -0.5rem;
			margin-top: -0.5rem;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);

			transition:
				box-shadow 0.2s ease-in-out,
				width 0.1s ease-in-out,
				height 0.1s ease-in-out,
				margin-left 0.1s ease-in-out,
				margin-top 0.1s ease-in-out;
		}

		h3 {
			background-color: var(--color-key-pink);
			transition:
				color 0.1s ease-in-out,
				background-color 0.1s ease-in-out;
		}
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
		}

		article:last-of-type {
			border-right: none;
		}
	}
</style>
