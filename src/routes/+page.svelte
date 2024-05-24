<script lang="ts">
	import type { PageData } from './$types'
	import HeaderAnimation from '@/components/feature/Top/HeaderAnimation.svelte'
	import InformationSection from '@/components/feature/Top/InformationSection.svelte'
	import VideoSection from '@/components/feature/Top/VideoSection.svelte'
	import NewArrivalsSection from '@/components/feature/Top/NewArrivalsSection.svelte'
	import DiscographySection from '@/components/feature/Top/DiscographySection.svelte'
	import Footer from '@/components/feature/Footer.svelte'
	import Main from '@/components/feature/Main.svelte'
	import CatchSection from '@/components/feature/Top/CatchSection.svelte'

	export let data: PageData
</script>

<Main>
	<section>
		<h1 class="visually-hidden">Peach Peach Peach</h1>

		<CatchSection />

		<InformationSection {data} />

		<VideoSection {data} />

		<NewArrivalsSection {data} />

		<DiscographySection {data} />

		<Footer />

		<!-- Store -->
	</section>
</Main>
