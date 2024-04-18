<script lang="ts">
	import './reset.css'
	import './styles.css'
	import '@fontsource/zen-kaku-gothic-new/400.css'
	import '@fontsource/zen-kaku-gothic-new/700.css'
	import '@fontsource/montserrat/500.css'
	import '@fontsource/montserrat/600.css'
	import '@fontsource/montserrat/700.css'
	import '@fontsource/montserrat/800.css'
	import { MetaTags } from 'svelte-meta-tags'
	import SidebarNav from '@/components/feature/SidebarNav.svelte'
	import GradientBackground from '@/components/primitive/GradientBackground.svelte'
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

	<GradientBackground />
</div>

<style>
	/* SP */
	.app {
		min-height: 100vh;
		overflow-x: hidden;
	}

	aside {
		background-color: var(--color-key-pink-deep);
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
			border-right: 1px solid #331832;
		}

		main {
			/* Sidebar分引く */
			width: calc(100vw - (160px + 24px * 2));
			margin: 0 auto;
		}
	}
</style>
