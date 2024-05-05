<script lang="ts">
	import Spinner from '@/components/primitive/Spinner.svelte'
	import { paginate } from '@/constants/site'
	import type { CategoryId } from '@/domain/Category/CategoryId'
	import type { Article } from '@/domain/contents/Article'
	import { fetchMoreThruApi } from '@/lib/sdk/cms/fetchMoreThruApi'
	import { throttle } from '@/lib/utils/throttle'
	import { onMount } from 'svelte'

	export let contents: Article[]
	export let categoryId: CategoryId
	export let totalCount: number
	export let onChange: (contents: Article[]) => void

	$: hasMore = contents.length < totalCount
	$: loading = false

	const handleScroll = async () => {
		// No more contents to fetch
		if (!hasMore) return

		const scrollPosition = window.innerHeight + window.scrollY
		const documentHeight = document.documentElement.scrollHeight

		if (scrollPosition >= documentHeight) {
			loading = true

			try {
				const nextPageRes = await fetchMoreThruApi({
					categoryId,
					limit: paginate.list.limit,
					offset: contents.length
				})
				const updatedContents = [...contents, ...nextPageRes.contents]
				onChange(updatedContents)
			} catch (error) {
				console.error(error)
			} finally {
				loading = false
			}
		}
	}

	const throttledScroll = throttle(handleScroll, 300)

	onMount(() => {
		window.addEventListener('scroll', throttledScroll)
		return () => {
			window.removeEventListener('scroll', throttledScroll)
		}
	})
</script>

{#if loading}
	<div role="status">
		<Spinner --color="var(--color-key-pink)" />
	</div>
{/if}

<style>
	[role='status'] {
		padding: 2rem;
		display: flex;
		justify-content: center;
		backdrop-filter: blur(16px) brightness(1.08);
	}
</style>
