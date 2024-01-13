<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import type { Article } from '@/domain/contents/Article'

	type Data = {
		news: Article[]
		schedule: Article[]
	}

	export let data: Data
</script>

<section class="information">
	<header>
		<h2>Information</h2>
	</header>

	<section>
		<h3>News</h3>
		<ul>
			{#each data.news as item}
				<li>
					<a href={`/news/${item.id}/`}>{item.title}</a>
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
				</li>
			{/each}
		</ul>
	</section>
</section>

<style lang="scss">
	.information {
		display: grid;
		grid-template-columns: 3rem 1fr 1fr;

		border: 1px solid #000;
		min-height: 10rem;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: center;

		border-right: 1px solid #000;
		background-color: var(--color-key-green);
	}

	header > h2 {
		rotate: 270deg;
		margin: 0;
		font-size: 1.1rem;
		font-weight: normal;
	}

	.information {
		section {
			padding: 1rem;
		}

		section + section {
			border-left: 1px solid #000;
		}

		h3 {
			margin: 0 0 1rem 0;
		}

		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}

		li {
			line-height: 1.8;
			font-size: 1.2rem;
		}
	}
</style>
