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
<MetaTags
	robots="noindex"
	additionalMetaTags={[
		// StatusBarの色を指定
		{ name: 'theme-color', content: '#ff3998' /* = color-key-pink-deep */ },
		// ホームに追加対応
		{ name: 'mobile-web-app-capable', content: 'yes' },
		{ name: 'apple-mobile-web-app-capable', content: 'yes' }
	]}
/>

<div class="app">
	<aside>
		<SidebarNav />
	</aside>

	<slot />

	<GradientBackground />
</div>

<style>
	/* SP */
	.app {
		min-height: 100vh;
		contain: paint;
	}

	aside {
		background-color: var(--color-key-pink-deep);
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.app {
			min-height: 100vh;
			display: grid;
			grid-template-areas: 'sidebar main';
			grid-template-columns: calc(24px + 103px + 24px) 1fr;
			margin-top: 0;
		}

		aside {
			border-right: 1px solid #331832;
		}
	}
</style>
