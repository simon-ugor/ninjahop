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
        <h1 className={styles.code} style={{"marginBottom": "2vh", "textAlign": "center"}}>
          Pravidlá
        </h1>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Čo je Ninja Hop?</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Ninja Hop je zábavná 2D skákacia hra kde je tvojou úlohou dostať ninju čo najvyššie. Tvoju cestu sa ti budú snažiť prekaziť padajúce ostnaté guľe , pichliače alebo rozopadajúce sa platformy. Tvoju cestu neminie aj návšteva vo vesmíre.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Ako hrať?</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Tvojim cieľom je dostať sa čo najvyššie a nazbierať čo najviac bodov pomocou nakláňania telefónu vľavo a vpravo. Počas celej doby sa musíš vyhnút ostrovčekom s pichliačmi a zároveň sa vyhýbať padajúcim ostnatým gulám. Hríbiky ti pomôžu dostať sa rýchlejšie hore a tým získať viacej bodov. V hre sa nachádzajú aj rozpadajúce sa ostrovčeky vďaka čomu na ne môžeš stúpiť len raz. Nevyhnutnou súčasťou je aj vesmírna zóna kde tentokrát nepostupuješ smerom hore ale práve naopak volne padáš dole a vyhýbaš sa nástrahám. Do vesmírnej zóny sa dostaneš pomocou teleportu ktorý slúži tak isto aj ako východ.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Ako často hrať?</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Na začiatku máš 3 životy ktoré prirodzene postupne strácaš. Po strateni života začína hra odznova od prvého ostrovčeka ale tvoje BODY za danú hru nestrácaš ale stále sa ti pripočítavajú do tabuľky. Po každej strate života môžeš svoje aktuálne body zdvojnásobiť a tým si získať náskok od ostaných hráčov. Ak stratíš všetky 3 životy hra nekončí len si Ninja musí chvíľku oddýchnuť. Ak sa ti nechce čakať a chceš hrať hneď ďalej môžeš využiť aj túto možnosť.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Ako získať výhru 100 000€?</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Body do tabuľky zbieraš každý deň a celý mesiac. Čím viac hráš = tým viac bodov máš. Čím viac bodov máš = tým väčšia je tvoja šanca na výhru. Na konci každého mesiaca sa hráč s najvyšším počtom bodov stáva víťaz a získava odmenu 100 000€. Bodová tabuľka sa vynuluje vždy prvý deň v mesiaci o 00:00.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Ako sa stať ultimátny šampión?</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Po vynulovaní tabuľky hra pokračuje ďalej a zbieraš nové body v novom mesiaci. Po 3 mesiacoch sa tvoje body zrátajú dokopy a môžeš sa stať ultimátny šampión a získať rozprávkovú výhru 200 000€.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Ako dlho môžeš zbierať body?</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Zbierať súťažné body do tabuľky môžeš počas mesiacov február - marec - apríl. Hru si ale môžeš zahrať kedykoľvek len tak pre zábavu počas celého roka.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Ako sa dostanem k výhre?</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Na začiatku hry je pre každého hráča vygenerovaný unikátny osobný kód ktorý je špecifický pre dané zariadenie a na konci mesiaca bude použitý na identifikovanie výhercu. Ak sa chceš zapojiť do súťaže je počas hrania vysoko odporúčané mať internetové pripojenie kvôli správnemu zapisovaniu tvojich bodov.</p>

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
