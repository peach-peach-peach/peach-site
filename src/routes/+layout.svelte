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
	import { site } from '@/constants/site'
</script>

<MetaTags
	title={site.title}
	description={site.description}
	additionalMetaTags={[
		// StatusBarの色を指定
		{ name: 'theme-color', content: '#ff3998' /* = color-key-pink-deep */ },
		// ホームに追加対応
		{ name: 'mobile-web-app-capable', content: 'yes' },
		{ name: 'apple-mobile-web-app-capable', content: 'yes' }
	]}
	openGraph={{
		url: site.url,
		title: site.title,
		siteName: site.title,
		description: site.description,
		images: [{ url: site.ogpImage }]
	}}
	twitter={{
		cardType: 'summary',
		title: site.title,
		description: site.description,
		image: site.ogpImage,
		imageAlt: 'Peach Peach Peach site logo'
	}}
/>

<div class="app">
	<SidebarNav />

	<slot />

	<GradientBackground />
</div>

<style>
	/* SP */
	.app {
		min-height: 100vh;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.app {
			margin-top: 0;
		}
	}
</style>
