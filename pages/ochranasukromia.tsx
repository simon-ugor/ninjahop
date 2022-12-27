import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja Hop - Ochrana súkromia</title>
        <meta name="description" content="Zásady ochrany osobných údajov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.code}>
          Ochrana súkromia
        </h1>
        <p className={inter.className}>Tu sa budú nachádzať zásady ochrany osobných údajov</p>

        <br/><br/><br/>

        <div className={styles.grid}>
            
        </div>
      </main>
    </div>
  )
}
