<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/CardList.svelte'
	import Footer from '@/components/Footer.svelte'
	import MarqueeHeader from '@/components/MarqueeHeader.svelte'
	import type { APIFetchMoreResponse } from '../api/fetch-more/+server'
	import Spinner from '@/components/Spinner.svelte'
	import { paginate } from '@/constants/site'

	export let data: PageData
	$: contents = data.contents
	$: hasMore = contents.length < data.totalCount
	$: fetchMoreLoading = false

	const handleClick = async () => {
		if (hasMore) {
			fetchMoreLoading = true

			const params = new URLSearchParams({
				categoryId: 'schedule',
				limit: `${paginate.list.limit}`,
				offset: `${contents.length}`
			})
			const nextPageRes: APIFetchMoreResponse = await fetch(`/api/fetch-more?${params.toString()}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			}).then(res => res.json())
			contents = [...contents, ...nextPageRes.contents]

			fetchMoreLoading = false
		}
	}
</script>

<svelte:head>
	<title>Schedule</title>
</svelte:head>

<h1 class="visually-hidden">スケジュール</h1>

<MarqueeHeader contentType="schedule" />

<section>
	<CardList categoryId="schedule" items={contents} --theme-color="var(--color-key-blue)" />
</section>

{#if hasMore}
	<div class="see-all">
		<a on:click={handleClick} href="#top">
			{#if fetchMoreLoading}
				<Spinner backgroundColor="var(--color-bg-dark)" size="2rem" />
			{:else}
				See More
			{/if}
		</a>
	</div>
{/if}

<Footer />

<style lang="scss">
	.see-all {
		margin: 0;
		padding: 0.5rem;

		text-align: center;
		font-family: 'Montserrat', sans-serif;
		background-color: var(--color-bg-dark);

		a {
			color: var(--color-text-highlight);
			text-decoration: none;
		}

		a:hover {
			background-color: transparent;
			text-decoration: underline;
		}
	}
</style>
