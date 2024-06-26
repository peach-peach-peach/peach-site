<script lang="ts">
	import type { Article } from '@/domain/contents/Article'
	import MarqueeHeaderInfo from '../MarqueeHeaderInfo.svelte'

	type Data = {
		news: Article[]
		schedule: Article[]
	}

	export let data: Data
</script>

<section class="information">
	<header>
		<h2 class="visually-hidden">Information</h2>
		<MarqueeHeaderInfo />
	</header>

	<section class="news">
		<h3>News</h3>
		<ul>
			{#if data.news.length === 0}
				<li>Coming soon</li>
			{:else}
				{#each data.news as item}
					<li>
						<a href={`/news/${item.id}/`}>{item.title}</a>
					</li>
				{/each}
			{/if}
		</ul>
	</section>

	<div class="see-all see-all-news">
		<a href="/news">See All News ↓</a>
	</div>

	<section class="schedule">
		<h3>Schedule</h3>
		<ul>
			{#if data.news.length === 0}
				<li>Coming soon</li>
			{:else}
				{#each data.schedule as item}
					<li>
						<a href={`/schedule/${item.id}/`}>{item.title}</a>
					</li>
				{/each}
			{/if}
		</ul>
	</section>

	<div class="see-all see-all-schedule">
		<a href={`/schedule`}>See All Schedule ↓</a>
	</div>
</section>

<style lang="scss">
	.information {
		display: grid;
		grid-template-columns: 3rem 1fr 3rem;
		grid-template-areas:
			'header news see-all-news'
			'header schedule see-all-schedule';
		border-width: 1px 0;
		border-style: solid;
		border-color: var(--color-bg-dark);
		min-height: 10rem;
	}

	header {
		grid-area: header;
		border-right: 1px solid var(--color-bg-dark);
	}

	h3 {
		color: #fff;
		font-size: 2rem;
		font-weight: 700;
		text-shadow: 0px 0 10px #cfc4ce;
	}

	.schedule {
		border-top: 1px solid var(--color-bg-dark);
	}

	.see-all {
		display: flex;
		justify-content: center;
		border-width: 0 1px;
		border-style: solid;
		border-color: var(--color-bg-dark);
		padding: 1rem 0;

		a {
			display: block;
			margin: 0;
			width: 100%;
			transform: rotate(180deg);
			background-color: transparent;
			color: var(--color-text-highlight);
			line-height: 3rem;
			text-align: center;
			writing-mode: vertical-rl;
			font-size: 1rem;
			text-decoration: none;
		}
	}

	.see-all {
		background-color: var(--color-bg-dark);

		&:hover {
			background-color: var(--color-bg-dark-hover);
		}
	}

	.see-all-news {
		grid-area: see-all-news;
	}

	.see-all-schedule {
		grid-area: see-all-schedule;
	}

	.news,
	.schedule {
		overflow-x: hidden;
		background-color: rgba(#fff, 0.3);
		backdrop-filter: blur(16px) brightness(1.08);
	}

	.information {
		section {
			padding: 1rem;
		}

		h3 {
			margin: 0 0 1rem 0;
		}

		ul {
			list-style: none;
			display: block;
			padding: 0;
			margin: 0;
			min-height: 9rem;
		}

		li {
			display: block;
		}

		li > a {
			display: inline-block;
			width: 100%;
			overflow-x: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			line-height: 2;
			font-size: 1rem;
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.information {
			grid-template-columns: 3rem 1fr 3rem 1fr 3rem;
			grid-template-areas: 'header news see-all-news schedule see-all-schedule';
		}

		.schedule {
			border-top: none;
		}
	}
</style>
