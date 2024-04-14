<script lang="ts">
	import type { TopConfigsObject } from '@/domain/contents/TopConfigsObject'

	type Data = {
		topConfigs: TopConfigsObject
	}

	export let data: Data
	const newArrivals = data.topConfigs.new_arrivals

	/* eslint-disable svelte/no-at-html-tags */
</script>

<section class="new-arrivals">
	<div class="catch">
		<img
			src={newArrivals.catch_image.url}
			width={newArrivals.catch_image.width}
			height={newArrivals.catch_image.height}
			alt={newArrivals.title}
			style="width: 100%; height: auto;"
		/>
	</div>

	<section class="content">
		<h2>New arrivals</h2>
		<h3>{newArrivals.title}</h3>
		<div>
			{@html newArrivals.description}
		</div>
	</section>

	<p class="link"><a href={newArrivals.link_url}>{newArrivals.link_label}</a></p>
</section>

<style lang="scss">
	.new-arrivals {
		display: grid;
		padding: 3rem;

		border-top: 1px solid var(--color-bg-dark);
		background: url('/bg-purple.jpg') repeat;
	}

	.content {
		padding: 1rem;
		margin: 1rem 0;

		background-color: #fff6;

		h2 {
			margin: 0;
			color: var(--color-key-pink);
			font-size: 1rem;
			font-family: 'Montserrat', sans-serif;
		}

		h3 {
			margin-top: 1rem;
			font-family: 'Montserrat', sans-serif;
		}

		div {
			margin-top: 1rem;
			word-break: break-all;
		}
	}

	.link {
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		a {
			display: inline-block;
			width: 100%;

			color: #000;
			background-color: #fff;
			border: 1px solid var(--color-bg-dark);
			text-decoration: none;
			text-align: center;
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.new-arrivals {
			grid-template-columns: 2fr 3fr 1fr;
			padding: 3rem 4rem;
		}

		.content {
			padding: 1rem;
			margin: 0 2rem;
		}

		.link {
			padding: 1rem;
		}
	}
</style>
