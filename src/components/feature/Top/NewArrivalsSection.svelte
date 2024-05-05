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
	<div class="wrapper">
		<div class="catch">
			<a href={newArrivals.link_url} target="_blank" rel="noreferrer">
				<img
					src={newArrivals.catch_image.url}
					width={newArrivals.catch_image.width}
					height={newArrivals.catch_image.height}
					alt={newArrivals.title}
					style="width: 100%; height: auto;"
				/>
			</a>
		</div>

		<section class="content">
			<h2>New arrivals</h2>
			<h3>{newArrivals.title}</h3>
			<div class="description">
				{@html newArrivals.description}
			</div>
		</section>

		<p class="link">
			<a href={newArrivals.link_url} target="_blank" rel="noreferrer">{newArrivals.link_label}</a>
		</p>
	</div>
</section>

<style lang="scss">
	.new-arrivals {
		padding: 2rem;
		border-top: 1px solid var(--color-bg-dark);
	}

	.wrapper {
		display: grid;
		padding: 1.5rem;
		border: 1px solid var(--color-bg-dark);
		background-color: #fff6;
		backdrop-filter: blur(16px) brightness(1.08);
	}

	.catch img {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
	}

	.content {
		padding: 0rem;
		margin: 1rem 0;

		h2 {
			margin: 0;
			color: var(--color-key-pink);
			font-size: 1rem;
		}

		h3 {
			margin-top: 1rem;
			font-size: 1.2rem;
			text-wrap: wrap;
		}

		div {
			word-break: break-all;
		}
	}

	.description {
		display: none;
	}

	.link {
		margin-top: 1rem;
		display: flex;
		justify-content: center;

		a {
			display: inline-block;
			padding: 0.2rem 1.5rem;

			color: #000;
			background-color: #fff;
			border: 2px solid var(--color-bg-dark);
			text-decoration: none;
			text-align: center;
			font-weight: bold;
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.new-arrivals {
			padding: 2rem;
		}

		.wrapper {
			grid-template-columns: 2fr 3fr 1fr;
			padding: 1rem 3rem;
		}

		.content {
			padding: 1rem;
			margin: 0 2rem;

			h2 {
				font-size: 1.2rem;
			}

			h3 {
				margin-top: 1rem;
				font-size: 1.5rem;
			}
		}

		.description {
			display: block;
		}

		.link {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1rem;
		}
	}
</style>
