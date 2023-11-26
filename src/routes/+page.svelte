<script>
	import logoSvg from '$lib/images/logo.svg?raw'
</script>

<svelte:head>
	<title>Peach Peach Peach</title>
	<meta name="description" content="Peach Peach Peach website" />
</svelte:head>

<section>
	<h1>
		<span class="visually-hidden">Peach Peach Peach</span>
		{@html logoSvg}
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		text-indent: 9999;
	}

	:global(#peach-logo) {
		fill: var(--color-theme-1);
	}
</style>
