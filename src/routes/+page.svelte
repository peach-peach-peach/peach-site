<script lang="ts">
	import { onMount } from 'svelte'
	import { createScene1, subscribeResize, unsubscribeResize } from '$lib/three/scene1'
	import type { PageData } from './$types'

	const formatDate = (dateStr: string | undefined) => {
		if (dateStr == null) return ''
		const date = new Date(dateStr)
		return new Intl.DateTimeFormat('ja-JP').format(date)
	}

	export let data: PageData
	const newArrivals = data.feature.new_arrivals

	let el: HTMLCanvasElement

	onMount(() => {
		subscribeResize()
		createScene1(el)

		return () => {
			unsubscribeResize()
		}
	})

	/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>Peach Peach Peach</title>
	<meta name="description" content="Peach Peach Peach website" />
</svelte:head>

<section>
	<h1 class="visually-hidden">Peach Peach Peach</h1>

	<div class="catch">
		<canvas bind:this={el} />
	</div>

	<section>
		<h2>Information</h2>
		<section>
			<h3>News</h3>
			<ul>
				{#each data.news as item}
					<li>
						<a href={`/news/${item.id}/`}>{item.title}</a>
						<time>{formatDate(item.publishedAt)}</time>
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<h3>Schedule</h3>
			<ul>
				{#each data.schedule as item}
					<li>
						<a href={`/schedule/${item.id}/`}>{item.title}</a>
						<time>{formatDate(item.publishedAt)}</time>
					</li>
				{/each}
			</ul>
		</section>
	</section>

	<section>
		<h2>Video</h2>
		<ul>
			{#each data.videos as item}
				<li>
					<a href={`/videos/${item.id}/`}>{item.title}</a>
					<time>{formatDate(item.publishedAt)}</time>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>New arrivals</h2>
		<img
			src={newArrivals.catch_image.url}
			width={newArrivals.catch_image.width}
			height={newArrivals.catch_image.height}
			alt={newArrivals.title}
			style="width: 100%; height: auto;"
		/>
		<h3>{newArrivals.title}</h3>
		<div>
			{@html newArrivals.description}
		</div>
	</section>

	<section>
		<h3>Discography</h3>
		<ul>
			{#each data.discography as item}
				<li>
					<a href={`/discography/${item.id}/`}>{item.title}</a>
					<time>{formatDate(item.publishedAt)}</time>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Store -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.catch {
		width: 100%;
		height: 600px;
	}
</style>
