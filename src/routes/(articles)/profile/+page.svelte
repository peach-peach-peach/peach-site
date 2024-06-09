<script lang="ts">
	import Footer from '@/components/feature/Footer.svelte'
	import GoBack from '@/components/feature/GoBack.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import Main from '@/components/feature/Main.svelte'
	import SnsAccount from '@/components/primitive/SnsAccount.svelte'
</script>

<MarqueeHeader contentType="profile" fixed wrapperStyle="width: 100%" />

<Main blur>
	<article>
		<h1>Profile</h1>

		<img
			src="/artist-photo.jpg"
			alt="Peach Peach Peachのアーティスト画像"
			class="eyecatch"
			width="1920"
			height="1280"
		/>

		<h2>プロフィール / Profile</h2>

		<p>
			2021年秋、東京で活動を開始。<br />
			from 福岡の昔からの友だち2人が 一緒に遊んでた果てに、音楽をつくる事に。<br />
			hiphop も indie rock も neo soul も、好きなジャンルを自在にオーライ。 <br />
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
			1999年福岡でオルタナティブロックバンド NANANINE を結成。2001年ワーナーミュージックよりメジャーデビュー、海外フェスや国内大型フェスに出演。2006年バンド活動休止後はマイペースに音楽に関わり続けている。
		</p>
		<div class="sns-accounts">
			<SnsAccount snsType="x" accountId="79hiroshi" />
			<SnsAccount snsType="instagram" accountId="phiroshi79" />
		</div>
		<p>
			西尾大介:<br />
			2004年、ソロプロジェクト ALOHA として福岡で始動。その後東京に活動拠点を移し、2011年に曽我部恵一主宰の ROSE RECORDS
			より『うたのゆくえ』をリリース。自身の楽曲制作の他に、プロデュースやマスタリングなども手掛ける。
		</p>
		<div class="sns-accounts">
			<SnsAccount snsType="x" accountId="ALOHA_NISHIO" />
			<SnsAccount snsType="instagram" accountId="aloha_nishio" />
		</div>

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

	<GoBack href={'/'} />

	<Footer />
</Main>

<style lang="scss">
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

	.sns-accounts {
		margin: 0.5rem 0 1.5rem;
		display: flex;
		column-gap: 0.4rem;
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
