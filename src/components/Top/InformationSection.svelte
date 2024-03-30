<script lang="ts">
	import type { Article } from '@/domain/contents/Article'
	import Marquee from '../Marquee.svelte'

	type Data = {
		news: Article[]
		schedule: Article[]
	}

	export let data: Data
</script>

<section class="information">
	<header>
		<h2 class="header-vertical">
			<Marquee speed={3} className="information-marquee" autoFill
				><span class="label en">Information</span><span class="label ja">インフォメーション</span></Marquee
			>
		</h2>
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

	<div class="see-all see-all-news">
		<a href="/news">See All News ↓</a>
	</div>

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

	<div class="see-all see-all-schedule">
		<a href={`/schedule`}>See All Schedule ↓</a>
	</div>
</section>

<style lang="scss">
	.information {
		display: grid;
		grid-template-columns: 3rem 1fr 3rem 1fr 3rem;

		border-width: 1px 0;
		border-style: solid;
		border-color: var(--color-bg-dark);
		min-height: 10rem;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: center;

		border-right: 1px solid var(--color-bg-dark);
		background-color: var(--color-key-green);
	}

	h3 {
		color: #fff;
		font-size: 2rem;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
	}

	:global(.header-vertical) {
		rotate: 270deg;
		margin: 0;
		font-size: 1.1rem;
		font-weight: normal;
	}

	:global(.header-vertical > .rfm-marquee-container.information-marquee) {
		width: 10.6rem;
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

	.see-all {
		display: flex;
		justify-content: center;
		border-width: 0 1px;
		border-style: solid;
		border-color: var(--color-bg-dark);

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
		background-color: var(--color-key-pink-deep);
	}

	.see-all-schedule {
		background-color: var(--color-bg-dark);
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
			padding: 0;
			margin: 0;
		}

		li {
			line-height: 2.2;
			font-size: 1rem;
		}
	}

	/* SP Large */
	@media screen and (min-width: 390px) {
		:global(.header-vertical > .rfm-marquee-container.information-marquee) {
			width: 9.9rem;
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
	}
</style>
