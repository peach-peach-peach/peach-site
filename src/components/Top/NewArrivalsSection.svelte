<script lang="ts">
	import type { FeatureObject } from '@/domain/contents/FeatureObject'

	type Data = {
		feature: FeatureObject
	}

	export let data: Data
	const newArrivals = data.feature.new_arrivals
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

		border: 1px solid #000;
		background: url('/bg-purple.jpg') repeat;
	}

	.catch {
	}

	.content {
		padding: 1rem;
		margin: 1rem 0;

		background-color: #fff6;

		h2 {
			margin: 0;
			color: var(--color-key-pink);
			font-size: 1rem;
		}

		h3 {
			margin-top: 1rem;
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
			border: 1px solid #000;
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

			background-color: #fff6;

			h2 {
				margin: 0;
				color: var(--color-key-pink);
				font-size: 1rem;
			}

			h3 {
				margin-top: 1rem;
			}

			div {
				margin-top: 1rem;
				word-break: break-all;
			}
		}

		.link {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1rem;

			a {
				display: inline-block;
				width: 100%;

				color: #000;
				background-color: #fff;
				border: 1px solid #000;
				text-decoration: none;
				text-align: center;
			}
		}
	}
</style>
