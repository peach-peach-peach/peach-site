<script lang="ts">
	import { browser } from '$app/environment'
	import Footer from '@/components/feature/Footer.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import { site } from '@/constants/site'

	function goBack() {
		if (browser) window.history.back()
	}

	/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>Profile | {site.title}</title>
</svelte:head>

<MarqueeHeader contentType="profile" />

<div class="bg-wrapper">
	<article>
		<h1>Profile</h1>

		<img src="/ppp.jpg" alt="Peach Peach Peachのアーティスト画像" class="eyecatch" />

		<h2>プロフィール / Profile</h2>

		<p>
			2021年秋、東京で活動を開始。<br />
			from福岡の昔からの友だち2人が 一緒に遊んでた果てに、音楽をつくる事に。<br />
			hiphopもindie rockもneo soulも、好きなジャンルを自在にオーライ。 <br />
			とにかく楽しみたくて音楽をやってる。
		</p>

		<p lang="en">
			2021, autumn. Started in Tokyo.<br />
			2 old friends from Fukuoka, hanging out and playing, end up making songs together.<br />
			From hiphop to indie rock, freely open genre is welcome to us.<br />
			We just wanna play music ‘cause we want to have fun!!!
		</p>

		<h2>メンバー / Member</h2>
		<p>
			川関浩司:<br />
			1999年福岡でオルタナティブバンドNANANINEを結成。2001年ワーナーミュージックよりメジャーデビュー、海外フェスや国内大型フェスに出演。2006年バンド活動休止後はマイペースに音楽に関わり続けている。
		</p>
		<p>
			西尾大介:<br />
			2004年、ソロプロジェクトALOHAとして福岡で始動。その後東京に活動拠点を移し、2011年に曽我部恵一主宰のROSE RECORDSより『うたのゆくえ』をリリース。自身の楽曲制作の他に、プロデュースやマスタリングなども手掛ける。
		</p>

		<p lang="en">
			Hiroshi Kawaseki:<br />
			In 1999, formed Alternative Band “NANANINE” in Fukuoka. In 2001, major debut in Warner Music. Performed in international/domestic
			music festivals.
		</p>
		<p lang="en">
			Daisuke Nishio:<br />
			In 2004, start Solo project as ALOHA in Fukuoka. Afterwards, moved the base to Tokyo. In addition to producing my own
			music, I also produce other peoples producing and mastering.
		</p>
	</article>
</div>

<div class="back">
	<a href={`/`} on:click={goBack}>← Back</a>
</div>

<Footer />

<style lang="scss">
	.bg-wrapper {
		/* background-color: rgba(#fff, 0.3); */
		backdrop-filter: blur(16px) brightness(1.08);
	}

	article {
		padding: 3rem;
	}

	h1 {
		font-weight: bold;
		font-size: 1.5rem;
		margin: 0 0 2rem;
	}

	.eyecatch {
		width: 100%;
		height: auto;
		margin: 1rem 0;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
	}

	h2 {
		font-weight: bold;
		font-size: 1.2rem;
		margin: 3rem 0 1rem;
	}

	.back {
		margin: 0;
		padding: 0.5rem;

		text-align: center;
		font-family: 'Montserrat', sans-serif;
		background-color: var(--color-bg-dark);

		a {
			color: var(--color-text-highlight);
			text-decoration: none;
		}

		a:hover {
			background-color: transparent;
			text-decoration: underline;
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		article {
			max-width: 768px;
			margin: 0 auto;
		}

		.eyecatch {
			margin-bottom: 3rem;
		}
	}
</style>
