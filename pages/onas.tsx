import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja Hop - O nás</title>
        <meta name="description" content="O hre Ninja Hop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.code}>
          O nás
        </h1>
        <p className={inter.className}>toto je test, bude sa tu nachádzať text o nás</p>

        <br/><br/><br/>

        <div className={styles.grid}>
            
        </div>
      </main>
    </div>
  )
}
