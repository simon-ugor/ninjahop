import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja Hop - Dostupnosť</title>
        <meta name="description" content="Dostupnosť hry Ninja Hop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.code}>
          Dostupnosť
        </h1>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Kde je hra Ninja Hop dostupná?</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Hra Ninja Hop je dostupná na <a href='https://play.google.com/store/apps/details?id=com.coldendev.ninjahop' style={{"textDecoration": "underline"}} target="_blank" rel="noreferrer">Google Play Store</a> a <a href='https://apps.apple.com/sk/app/ninja-hop/id1661586190' style={{"textDecoration": "underline"}} target="_blank" rel="noreferrer">Apple App Store</a> a je výhradne určená pre mobilné zariadenia. Tablety a iné podobné zariadenia momentálne nie sú podporované.</p>

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
