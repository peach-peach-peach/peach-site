<script lang="ts">
	export let flex: number
</script>

<div style="--flex: {flex}" />

<style>
	div {
		flex: var(--flex);
	}
</style>
