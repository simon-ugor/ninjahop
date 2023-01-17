import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja Hop - Ochrana súkromia</title>
        <meta name="description" content="Zásady ochrany osobných údajov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.code} style={{"marginBottom": "2vh", "textAlign": "center"}}>
          Ochrana súkromia
        </h1>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Zásady ochrany osobných údajov</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>ColdenDev vytvorili aplikáciu Ninja Hop ako bezplatnú aplikácie. Táto stránka slúži na informovanie návštevníkov o našich zásadách týkajúcich sa zhromažďovania, používania a zverejňovania osobných údajov, ak sa niekto rozhodne používať našu aplikáciu. Ak sa rozhodnete používať našu aplikáciu, potom súhlasíte so zhromažďovaním a používaním informácií v súvislosti s týmito zásadami. Osobné údaje, ktoré zhromažďujeme, sa používajú na poskytovanie a zlepšovanie aplikácie. Vaše informácie nepoužívame ani neposkytujeme nikomu inému, ako je uvedené v týchto Zásadách ochrany osobných údajov.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Zhromažďovanie a používanie informácií</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Pre lepší zážitok vás pri používaní našej služby môžeme požiadať, aby ste nám poskytli určité osobné údaje. Informácie, ktoré požadujeme, sa uchovávajú vo vašom zariadení a nijakým spôsobom ich nezhromažďujeme. Aplikácie využívajú služby tretích strán, ktoré môžu zhromažďovať informácie slúžiace na vašu identifikáciu. Odkaz na zásady ochrany osobných údajov poskytovateľov služieb tretích strán, ktoré aplikácie používajú - <a href="https://unity.com/legal/privacy-policy" style={{"color": "blue", "textDecoration": "underline"}}>Unity</a></p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Záznamové údaje</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Chceme vás informovať, že vždy, keď používate našu aplikáciu, v prípade chyby v aplikáciách zhromažďujeme údaje a informácie (prostredníctvom produktov tretích strán) vo vašom telefóne, ktoré sa nazývajú Log Data. Tieto Log Data môžu obsahovať informácie, ako je adresa internetového protokolu vášho zariadenia (&quot;IP&quot;), názov zariadenia, verzia operačného systému, konfigurácia aplikácie pri používaní, čas a dátum používania aplikácie a ďalšie štatistické údaje.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Súbory cookie</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Súbory cookie sú súbory s malým množstvom údajov, ktoré sa bežne používajú ako anonymné jedinečné identifikátory. Odosielajú sa do vášho prehliadača z navštívených webových stránok a ukladajú sa do vnútornej pamäte vášho zariadenia. Táto služba tieto &quot;cookies&quot; explicitne nepoužíva. Aplikácie však môžu používať kód a knižnice tretích strán, ktoré používajú &quot;cookies&quot; na zhromažďovanie informácií a zlepšovanie svojich služieb. Máte možnosť tieto súbory &quot;cookie&quot; prijať alebo odmietnuť a vedieť, kedy sa súbor &quot;cookie&quot; odosiela do vášho zariadenia. Ak sa rozhodnete odmietnuť naše súbory cookie, možno nebudete môcť používať niektoré časti tejto aplikácie.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Poskytovatelia služieb</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Môžeme využívať služby spoločností a jednotlivcov tretích strán z nasledujúcich dôvodov: Na uľahčenie našej aplikácie; Na poskytovanie aplikácie v našom mene; Na vykonávanie služieb súvisiacich s aplikáciou; Na pomoc pri analýze používania našej aplikácie. Chceme informovať používateľov tejto aplikácie, že tieto tretie strany majú prístup k ich Osobným údajom. Dôvodom je vykonávanie úloh, ktoré im boli pridelené v našom mene. Sú však povinné tieto informácie nezverejňovať ani nepoužívať na iné účely.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Bezpečnosť</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Vážime si vašu dôveru, s ktorou nám poskytujete svoje Osobné údaje, preto sa snažíme používať komerčne prijateľné prostriedky na ich ochranu. Nezabúdajte však, že žiadny spôsob prenosu cez internet ani spôsob elektronického uchovávania nie je stopercentne bezpečný a spoľahlivý a nemôžeme zaručiť jeho absolútnu bezpečnosť.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Odkazy na iné stránky</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Táto aplikácia môže obsahovať odkazy na iné stránky. Ak kliknete na odkaz tretej strany, budete presmerovaní na túto stránku. Upozorňujeme, že tieto externé stránky nie sú prevádzkované nami. Preto vám dôrazne odporúčame, aby ste si prečítali zásady ochrany osobných údajov týchto webových stránok. Nemáme žiadnu kontrolu nad obsahom, zásadami ochrany osobných údajov ani postupmi akýchkoľvek webových stránok alebo služieb tretích strán a nenesieme za ne žiadnu zodpovednosť.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Ochrana osobných údajov detí</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Tieto služby nie sú určené osobám mladším ako 13 rokov. Vedome nezhromažďujeme osobné údaje od detí mladších ako 13 rokov. V prípade, že zistíme, že nám dieťa mladšie ako 13 rokov poskytlo osobné údaje, okamžite ich z našich serverov vymažeme. Ak ste rodič alebo opatrovník a viete, že nám vaše dieťa poskytlo osobné údaje, kontaktujte ma, aby sme mohli vykonať potrebné kroky.</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Zmeny týchto zásad ochrany osobných údajov</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Naše zásady ochrany osobných údajov môžeme z času na čas aktualizovať. Preto vám odporúčame, aby ste si pravidelne prezerali túto stránku, či nedošlo k nejakým zmenám. O všetkých zmenách vás budeme informovať uverejnením nových Zásad ochrany osobných údajov na tejto stránke. Tieto zásady sú účinné od 2023-01-01</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh", "fontWeight": "bold"}}>Kontaktujte nás</p>
        <p className={inter.className} style={{"textAlign": "center", "marginBottom": "1vh"}}>Ak máte akékoľvek otázky alebo návrhy týkajúce sa našich Zásad ochrany osobných údajov, neváhajte nás kontaktovať na adrese coldenwebdev@gmail.com.</p>


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
