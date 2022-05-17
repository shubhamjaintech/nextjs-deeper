import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Playground</title>
      </Head>

      <main>
        <div> <Link href='/ssg'>SSG</Link></div>
        <div> <Link href='/SsgGetStaticPaths'>SSGgetStaticPaths</Link></div>
        <div> <Link href='/isg'>ISG</Link></div>
        <div> <Link href='/ssr'>SSR</Link></div>
      </main>

      <footer>

      </footer>
    </div>
  )
}

