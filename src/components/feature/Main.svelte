<script lang="ts">
	export let blur: boolean = false
</script>

<main class:blur>
	<slot></slot>
</main>

<style>
	main {
		padding: 0px;
		overflow-x: hidden;
	}

	.blur {
		/* background-color: rgba(#fff, 0.3); */
		backdrop-filter: blur(16px) brightness(1.08);
	}

	/* PC */
	@media screen and (min-width: 768px) {
		main {
			/* Same as the width of the sidebar */
			margin-left: 150px;
			padding: 0px;
			overflow-x: hidden;
		}
	}
</style>
