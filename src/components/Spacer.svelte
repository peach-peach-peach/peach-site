<script lang="ts">
	export let size: string
	export let sizeSP: string = size
	export let horizontal: boolean = false
</script>

<div class:horizontal class:vertical={!horizontal} style="--space-size: {size}; --space-size-sp: {sizeSP};" />

<style>
	.vertical {
		width: auto;
		height: var(--space-size-sp);
		flex-shrink: 0;
	}

	.horizontal {
		width: var(--space-size-sp);
		height: auto;
		display: inline-block;
		flex-shrink: 0;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.vertical {
			height: var(--space-size);
		}

		.horizontal {
			width: var(--space-size);
		}
	}
</style>
