<script>
	import { page } from '$app/stores'
	import Main from '@/components/feature/Main.svelte'
</script>

<Main blur>
	<div>
		<h1>{$page.status} - {$page.error?.message ?? 'リクエストエラー'}</h1>
		<p>
			<a href="/">トップページへ戻る</a>
		</p>
	</div>
</Main>

<style lang="scss">
	div {
		padding: 10rem 2rem;
	}

	h1 {
		font-weight: bold;
		font-size: 1.5rem;
		margin: 0 0 2rem;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		div {
			max-width: 768px;
			margin: 0 auto;
		}
	}
</style>
