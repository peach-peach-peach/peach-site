<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import type { Article } from '@/domain/contents/Article'
	import Spacer from '@/components/Spacer.svelte'
	import Marquee from '../Marquee.svelte'
	import SeeAll from '@/components/SeeAll.svelte'

	type Data = {
		videos: Article[]
	}

	export let data: Data
</script>

<section>
	<h2>
		<Marquee autoFill><span class="label en">Video</span><span class="label ja">ビデオ</span></Marquee>
	</h2>

	<ul>
		{#each data.videos as item}
			<li>
				<a href={`/videos/${item.id}/`}><img src={item.eyecatch?.url} alt={item.title} /></a>
				<a href={`/videos/${item.id}/`} class="title">{item.title}</a>
				<!-- time分のスペースを確保 -->
				<Spacer size="3rem" />
				<time>{formatDate(item.publishedAt)}</time>
			</li>
		{/each}
	</ul>
	<SeeAll href="/videos">See All Videos →</SeeAll>
</section>

<style lang="scss">
	section {
		border-top: 1px solid var(--color-bg-dark);
		border-top: none;
	}

	h2 {
		margin: 0;
		padding: 1rem 0;

		background-color: var(--color-key-yellow);
		border-bottom: 1px solid var(--color-bg-dark);
		text-align: center;

		font-weight: normal;
		font-size: 1rem;
	}

	.label {
		margin-right: 1rem;
		text-transform: uppercase;
		vertical-align: middle;
	}

	.en {
		font-size: 1.2rem;
	}

	.ja {
		font-size: 0.7rem;
	}

	ul {
		display: block;
		grid-template-columns: unset;
		padding: 0;
		margin: 0;
	}

	li {
		display: block;
		padding: 1rem;
		position: relative;

		& + & {
			border-top: 1px solid var(--color-bg-dark);
		}

		img {
			width: 100%;
			height: auto;
			box-shadow: 0 4px 16px #0006;
		}

		.title {
			display: block;
			margin-top: 1rem;
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
		}

		time {
			display: block;
			position: absolute;
			bottom: 1rem;
			font-size: 0.8rem;
			font-family: 'Montserrat', sans-serif;
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		ul {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			padding: 0;
			margin: 0;
		}

		li {
			display: block;
			padding: 1rem;
			position: relative;

			& + & {
				border-left: 1px solid var(--color-bg-dark);
			}
		}
	}
</style>
