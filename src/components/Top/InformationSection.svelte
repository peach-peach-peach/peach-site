<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import type { Article } from '@/domain/contents/Article'

	type Data = {
		news: Article[]
		schedule: Article[]
	}

	export let data: Data
</script>

<section>
	<h2>Information</h2>
	<section>
		<h3>News</h3>
		<ul>
			{#each data.news as item}
				<li>
					<a href={`/news/${item.id}/`}>{item.title}</a>
					<time>{formatDate(item.publishedAt)}</time>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h3>Schedule</h3>
		<ul>
			{#each data.schedule as item}
				<li>
					<a href={`/schedule/${item.id}/`}>{item.title}</a>
					<time>{formatDate(item.publishedAt)}</time>
				</li>
			{/each}
		</ul>
	</section>
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
