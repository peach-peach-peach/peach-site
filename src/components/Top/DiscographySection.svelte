<script lang="ts">
	import type { Article } from '@/domain/contents/Article'
	import SeeAll from '@/components/SeeAll.svelte'
	import Marquee from '@/components/Marquee.svelte'
	import CardList from '@/components/CardList.svelte'

	type Data = {
		discography: Article[]
	}

	export let data: Data
</script>

<section class="discography">
	<h2>
		<Marquee autoFill direction="left"
			><span class="label en">Discography</span><span class="label ja">ディスコグラフィー</span></Marquee
		>
	</h2>

	<section>
		<CardList categoryId="discography" items={data.discography} --theme-color="rgba(255, 255, 255, 0.6)" />
	</section>

	<SeeAll href="/discography">See All Discography →</SeeAll>
</section>

<style lang="scss">
	.discography {
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

	/* PC */
	@media screen and (min-width: 768px) {
	}
</style>
