<script lang="ts">
	import type { Article } from '@/domain/contents/Article'
	import SeeAll from '@/components/SeeAll.svelte'
	import CardList from '@/components/CardList.svelte'
	import MarqueeHeader from '../MarqueeHeader.svelte'

	type Data = {
		discography: Article[]
	}

	export let data: Data
</script>

<section class="discography">
	<h2 class="visually-hidden">Discography</h2>
	<MarqueeHeader contentType="discography" marqueeProps={{ direction: 'left' }} />

	<section>
		<CardList categoryId="discography" items={data.discography} squaredImage --theme-color="rgba(255, 255, 255, 0.6)" />
	</section>

	<SeeAll href="/discography">See All Discography →</SeeAll>
</section>

<style lang="scss">
	.discography {
		border-top: 1px solid var(--color-bg-dark);
	}

	/* PC */
	@media screen and (min-width: 768px) {
	}
</style>
