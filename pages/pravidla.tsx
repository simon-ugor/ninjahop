import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja Hop - Pravidlá</title>
        <meta name="description" content="Pravidlá hry Ninja Hop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.code}>
          Pravidlá
        </h1>
        <p className={inter.className}>Tu sa budú nachádzať pravidlá hry Ninja Hop</p>

        <br/><br/><br/>

        <Link
            href="/"
            className={styles.card}
          >
            <h3 className={inter.className}>
            <span>&lt;-</span> Späť
            </h3>
          </Link>

      </main>
    </div>
  )
}
