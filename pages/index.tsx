import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja Hop</title>
        <meta name="description" content="Oficiálna stránka hry Ninja Hop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p className={styles.welcome}>
            Vitaj Ninja!
            
          </p>
          <div className={styles.ninjahopdiv}>
            <a
              href="https://instagram.com/coldendev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.code}
            >
              By{' '}
              <h1 className={styles.coldendev}>ColdenDev</h1>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={styles.codeBigger}>Ninja Hop</h1>
        </div>

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target=""
            rel=""
          >
            <h3 className={inter.className}>
              Stiahnuť <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Stiahni si hru Ninja Hop a zapoj sa do súťaže.
            </p>
          </a>

          <Link
            href="/pravidla"
            className={styles.card}
          >
            <h3 className={inter.className}>
              Pravidlá <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Prečítajte si pravidlá hry Ninja Hop a ako sa zapojiť.
            </p>
          </Link>

          <Link
            href="/onas"
            className={styles.card}
          >
            <h3 className={inter.className}>
              O nás <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Bližšie informácie o nás a o našej hre Ninja Hop.
            </p>
          </Link>

          <Link
            href="/ochranasukromia"
            className={styles.card}
          >
            <h3 className={inter.className}>
              Ochrana súkromia <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Prečítajte si naše zásady ochrany osobných údajov.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
