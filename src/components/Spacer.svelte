<script lang="ts">
	export let size: string
	export let horizontal: boolean = false
</script>

<div class:horizontal class:vertical={!horizontal} style="--space-size: {size}" />

<style>
	.vertical {
		width: auto;
		height: var(--space-size);
		flex-shrink: 0;
	}

	.horizontal {
		width: var(--space-size);
		height: auto;
		display: inline-block;
		flex-shrink: 0;
	}
</style>
