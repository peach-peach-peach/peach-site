<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import type { Article } from '@/domain/contents/Article'
	import type { FeatureObject } from '@/domain/contents/FeatureObject'

	type Data = {
		videos: Article[]
	}

	export let data: Data
</script>

<section>
	<h2>Video</h2>
	<ul>
		{#each data.videos as item}
			<li>
				<a href={`/videos/${item.id}/`}>{item.title}</a>
				<time>{formatDate(item.publishedAt)}</time>
			</li>
		{/each}
	</ul>
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
