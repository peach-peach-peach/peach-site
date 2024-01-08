<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import type { Article } from '@/domain/contents/Article'
	import type { FeatureObject } from '@/domain/contents/FeatureObject'

	export let data: InformationSectionData

	type InformationSectionData = {
		news: Article[]
		schedule: Article[]
		videos: Article[]
		discography: Article[]
		feature: FeatureObject
	}
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
