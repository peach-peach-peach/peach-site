<script lang="ts">
	import type { Article } from '@/domain/contents/Article'
	import SeeAll from '@/components/feature/SeeAll.svelte'
	import CardList from '@/components/feature/CardList.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'

	type Data = {
		videos: Article[]
	}

	export let data: Data
</script>

<section>
	<h2 class="visually-hidden">Video</h2>
	<MarqueeHeader contentType="videos" />

	<section>
		<CardList categoryId="videos" items={data.videos} --theme-color="rgba(255, 255, 255, 0.6)" />
	</section>

	<SeeAll href="/videos">See All Videos →</SeeAll>
</section>

<style lang="scss">
	section {
		border-top: 1px solid var(--color-bg-dark);
		border-top: none;
		backdrop-filter: blur(16px) brightness(1.08);
	}

	/* PC */
	@media screen and (min-width: 768px) {
	}
</style>
