<script lang="ts">
	import type { Article } from '@/domain/contents/Article'
	import MarqueeHeaderInfo from '../MarqueeHeaderInfo.svelte'
	import Marquee from '@/components/primitive/Marquee.svelte'

	type Data = {
		news: Article[]
		schedule: Article[]
	}

	export let data: Data
</script>

<section class="information">
	<header>
		<!--
			<h2 class="visually-hidden">Information</h2>
			<MarqueeHeaderInfo />
		-->

		<!-- FIXME: 画像スクロール -->
		<h2 class="header-vertical">
			<Marquee speed={2} autoFill direction="left" className="information-marquee">
				<span class="label en">Information</span>
				<span class="label ja">インフォメーション</span>
				<span class="label en">Information</span>
				<span class="label ja">インフォメーション</span>
			</Marquee>
		</h2>
	</header>

	<section class="news">
		<h3>News</h3>
		<ul>
			{#each data.news as item}
				<li>
					<a href={`/news/${item.id}/`}>{item.title}</a>
				</li>
			{/each}
		</ul>
	</section>

	<div class="see-all see-all-news">
		<a href="/news">See All News ↓</a>
	</div>

	<section class="schedule">
		<h3>Schedule</h3>
		<ul>
			{#each data.schedule as item}
				<li>
					<a href={`/schedule/${item.id}/`}>{item.title}</a>
				</li>
			{/each}
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

	/* header {
		grid-area: header;
		border-right: 1px solid var(--color-bg-dark);
	} */

	h3 {
		color: #fff;
		font-size: 2rem;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
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
			font-family: 'Montserrat', sans-serif;
			font-size: 1rem;
			text-decoration: none;
		}
	}

	.see-all-news {
		grid-area: see-all-news;
		background-color: var(--color-key-pink-deep);
	}

	.see-all-schedule {
		grid-area: see-all-schedule;
		background-color: var(--color-bg-dark);
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

	/* ーー */
	header {
		grid-area: header;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-right: 1px solid var(--color-bg-dark);
		background-color: var(--color-key-green);
	}

	:global(.header-vertical) {
		rotate: 270deg;
		margin: 0;
		font-size: 1.1rem;
		font-weight: normal;
	}
	:global(.header-vertical > .rfm-marquee-container.information-marquee) {
		width: 30.6rem;
	}
	.label {
		margin-right: 0.5rem;
		text-transform: uppercase;
		vertical-align: middle;
	}
	.en {
		font-size: 1.2rem;
	}
	.ja {
		font-size: 0.7rem;
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
