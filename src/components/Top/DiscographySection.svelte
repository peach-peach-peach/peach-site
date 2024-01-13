<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import type { Article } from '@/domain/contents/Article'

	type Data = {
		discography: Article[]
	}

	export let data: Data
</script>

<section>
	<h3>Discography</h3>
	<ul>
		{#each data.discography as item}
			<li>
				<a href={`/discography/${item.id}/`}>{item.title}</a>
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
