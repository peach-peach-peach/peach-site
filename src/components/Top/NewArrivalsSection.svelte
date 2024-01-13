<script lang="ts">
	import type { FeatureObject } from '@/domain/contents/FeatureObject'

	type Data = {
		feature: FeatureObject
	}

	export let data: Data
	const newArrivals = data.feature.new_arrivals
</script>

<section>
	<h2>New arrivals</h2>
	<img
		src={newArrivals.catch_image.url}
		width={newArrivals.catch_image.width}
		height={newArrivals.catch_image.height}
		alt={newArrivals.title}
		style="width: 100%; height: auto;"
	/>
	<h3>{newArrivals.title}</h3>
	<div>
		{@html newArrivals.description}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
