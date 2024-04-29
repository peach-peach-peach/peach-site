<script lang="ts">
	export let blur: boolean = false
</script>

<main class:blur>
	<slot></slot>
</main>

<style>
	main {
		width: 100%;
		margin: 0 auto;
	}

	.blur {
		/* background-color: rgba(#fff, 0.3); */
		backdrop-filter: blur(16px) brightness(1.08);
	}

	/* PC */
	@media screen and (min-width: 768px) {
		main {
			/* Sidebar分引く */
			width: calc(100vw - (160px + 24px * 2));
			margin: 0 auto;
		}
	}
</style>
