<script lang="ts">
	import type { Article } from '@/domain/contents/Article'
	import Marquee from '@/components/Marquee.svelte'
	import SeeAll from '@/components/SeeAll.svelte'
	import CardList from '@/components/CardList.svelte'

	type Data = {
		videos: Article[]
	}

	export let data: Data
</script>

<section>
	<h2>
		<Marquee autoFill><span class="label en">Video</span><span class="label ja">ビデオ</span></Marquee>
	</h2>

	<section>
		<CardList categoryId="videos" items={data.videos} themeColor="rgba(255, 255, 255, 0.6)" />
	</section>

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

	/* PC */
	@media screen and (min-width: 768px) {
	}
</style>
