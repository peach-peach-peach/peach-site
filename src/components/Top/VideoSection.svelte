<script lang="ts">
	import { formatDate } from '@/lib/utils/formatDate'
	import type { Article } from '@/domain/contents/Article'
	import Spacer from '@/components/Spacer.svelte'
	import Marquee from '../Marquee.svelte'

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
	<p class="see-all"><a href="/videos">See All Videos →</a></p>
</section>

<style lang="scss">
	section {
		border: 1px solid #000;
		border-top: none;
	}

	h2 {
		margin: 0;
		padding: 1rem 0;

		background-color: var(--color-key-yellow);
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
			border-left: 1px solid #000;
		}

		img {
			width: 100%;
			height: auto;
		}

		.title {
			display: block;
			margin-top: 1rem;
		}

		time {
			display: block;
			font-size: 0.8rem;
			position: absolute;
			bottom: 1rem;
		}
	}

	.see-all {
		margin: 0;
		padding: 0.5rem;

		text-align: center;
		background-color: var(--color-bg-black);

		a {
			color: #fff;
			text-decoration: none;
		}

		a:hover {
			background-color: var(--color-bg-black);
			text-decoration: underline;
		}
	}
</style>
