<script>
	import './reset.css'
	import './styles.css'

	import { MetaTags } from 'svelte-meta-tags'
	import { onNavigate } from '$app/navigation'
	import SidebarNav from '@/components/SidebarNav.svelte'

	// use Transition API (https://svelte.dev/blog/view-transitions)
	onNavigate(navigation => {
		if (!document.startViewTransition) return

		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<!-- FIXNE: とりあえずnoindex -->
<MetaTags robots="noindex" />

<div class="app">
	<aside>
		<SidebarNav />
	</aside>

	<main>
		<slot />
	</main>
</div>

<style>
	/* SP */
	.app {
		min-height: 100vh;
	}

	aside {
		background-color: #fff;
	}

	main {
		width: 100%;
		margin: 0 auto;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.app {
			min-height: 100vh;
			display: grid;
			grid-template-areas: 'sidebar main';
			grid-template-columns: calc(24px + 160px + 24px) 1fr;
		}

		aside {
			border-right: 1px solid #ccc;
		}

		main {
			width: 100%;
			max-width: 64rem;
			margin: 0 auto;
		}
	}
</style>
