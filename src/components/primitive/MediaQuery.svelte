<script lang="ts">
	import { onMount } from 'svelte'

	export let query: string

	let mql: MediaQueryList | undefined
	let mqlListener: (this: MediaQueryList, ev: MediaQueryListEvent) => void
	let mounted = false
	let matches = false

	onMount(() => {
		mounted = true
		return () => {
			removeActiveListener()
		}
	})

	$: {
		if (mounted) {
			removeActiveListener()
			addNewListener(query)
		}
	}

	function addNewListener(query: string) {
		mql = window.matchMedia(query)
		mqlListener = v => (matches = v.matches)
		mql.addEventListener('change', mqlListener)
		matches = mql.matches
	}

	function removeActiveListener() {
		if (mql && mqlListener) {
			mql.removeEventListener('change', mqlListener)
		}
	}
</script>

<slot {matches} />
