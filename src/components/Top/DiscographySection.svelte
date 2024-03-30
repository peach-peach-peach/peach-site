<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import type { Article } from '@/domain/contents/Article'
	import Spacer from '@/components/Spacer.svelte'
	import SeeAll from '@/components/SeeAll.svelte'
	import Marquee from '../Marquee.svelte'

	type Data = {
		discography: Article[]
	}

	export let data: Data
</script>

<section>
	<h2>
		<Marquee autoFill direction="left"
			><span class="label en">Discography</span><span class="label ja">ディスコグラフィー</span></Marquee
		>
	</h2>
	<ul>
		{#each data.discography as item}
			<li>
				<a href={`/discography/${item.id}/`}><img src={item.eyecatch?.url} alt={item.title} /></a>
				<a href={`/discography/${item.id}/`} class="title">{item.title}</a>
				<!-- time分のスペースを確保 -->
				<Spacer size="3rem" />
				<time>{formatDate(item.publishedAt)}</time>
			</li>
		{/each}
	</ul>
	<SeeAll href="/discography">See All Discography →</SeeAll>
</section>

<style lang="scss">
	section {
		border-top: 1px solid var(--color-bg-dark);
	}

	h2 {
		margin: 0;
		padding: 1rem 0;

		background-color: var(--color-key-orange);
		border-bottom: 1px solid #000;
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
			border-left: none;
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
			font-weight: 700;
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
		}

		li {
			& + & {
				border-top: none;
				border-left: 1px solid var(--color-bg-dark);
			}
		}
	}
</style>
