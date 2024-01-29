import Head from 'next/head'
// import Link from 'next/link'
export default function Home() {

  const redirectToSpotify = () => {
    // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // window.open('https://open.spotify.com/', '_blank');
    
    // if (isMobile) {
      try {
        window.location.href = 'spotify://open';
      } catch (error) {
        const appStoreLink = 'https://apps.apple.com/us/app/spotify-music/id324684580'; 
        const playStoreLink = 'https://play.google.com/store/apps/details?id=com.spotify.music';
        const storeLink = isMobile && /iPhone|iPad|iPod/i.test(navigator.userAgent) ? appStoreLink : playStoreLink;
        window.location.href = storeLink;
      }
    // } else {
    //   window.open('https://open.spotify.com/', '_blank');
    // }
  };
  return (
    <div >
      <Head>
        <title>Playground</title>
      </Head>

      <main>
      {/* <div> <Link href='/redi'>Redirect (Local Pages)</Link></div>
        <div> <Link href='/ssg'>SSG</Link></div>
        <div> <Link href='/SsgGetStaticPaths'>SSGgetStaticPaths</Link></div>
        <div> <Link href='/isg'>ISG</Link></div>
        <div> <Link href='/ssr'>SSR</Link></div>
        <div> <Link href='/mui'>MUI</Link></div> */}

        <button onClick={redirectToSpotify}> Redirect to Spotify</button>
      </main>

      <footer>

      </footer>
    </div>
  )
}

