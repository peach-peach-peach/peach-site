<script>
	import MediaQuery from '@/components/primitive/MediaQuery.svelte'
</script>

<aside>
	<MediaQuery query="all and (min-width: 768px)" let:matches>
		{#if matches}
			<video poster="/videos/easy-thumb.jpg" autoplay muted loop playsinline>
				<source src="/videos/easy.mp4" type="video/mp4" />
				<track kind="captions" />
			</video>
		{/if}
	</MediaQuery>
	<MediaQuery query="all and (max-width: 767px)" let:matches>
		{#if matches}
			<video poster="/videos/easy_sp-thumb.jpg" autoplay muted loop playsinline>
				<source src="/videos/easy_sp.webm" type="video/webm" />
				<source src="/videos/easy_sp.mp4" type="video/mp4" />
				<track kind="captions" />
			</video>
		{/if}
	</MediaQuery>
</aside>

<style>
	aside {
		margin-top: -43px;
		display: flex;
		justify-content: center;
		height: calc(100vh + 45px);
	}

	video {
		display: block;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		aside {
			height: calc(100vh);
		}
	}
</style>
