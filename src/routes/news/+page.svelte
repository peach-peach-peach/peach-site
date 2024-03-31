<script lang="ts">
	import type { PageData } from './$types'
	import Marquee from '@/components/Marquee.svelte'
	import Footer from '@/components/Footer.svelte'
	import SeeAll from '@/components/SeeAll.svelte'
	import CardList from '@/components/CardList.svelte'

	export let data: PageData
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<h1>
	<Marquee autoFill><span class="label en">News</span><span class="label ja">ニュース</span></Marquee>
</h1>

<section>
	<CardList categoryId="news" items={data.contents} />
</section>

<SeeAll href="/news/N">More</SeeAll>

<Footer />

<style>
	h1 {
		background-color: var(--color-key-green);
		border-bottom: 1px solid var(--color-bg-dark);
		margin: 0;
		padding: 0.6rem 0;

		text-transform: uppercase;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
	}

	.label {
		margin-right: 0.5rem;
		text-transform: uppercase;
		vertical-align: middle;
	}

	.en {
		font-size: 0.8rem;
	}

	.ja {
		font-size: 0.8rem;
	}

	/* PC */
	@media screen and (min-width: 768px) {
	}
</style>
