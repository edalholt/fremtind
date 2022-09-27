import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Reiseforsikring: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Reiseforsikring</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>
        <h2 className={styles.title}>
        Reiseforsikring
        </h2>
        <p>Per Andreas Hansen</p>
        </div>

        <div className={styles.fakturaoversikt}>
            <div className={styles.fakturaTop}>
            <h4>Du betaler 249 kr/mnd</h4>
            <p>Fakturaoversikt</p>
            </div>
            <div className={styles.fakturaLine}>
                <h5>Periode</h5>
                <p>01.01.2021 - 01.01.2022</p>
            </div>
            <div className={styles.fakturaLine}>
                <h5>Avtalenummer</h5>
                <p>1234567789</p>
            </div>
            <div className={styles.fakturaLine}>
                <h5>Dokument</h5>
                <a>Avtaledokument (PDF)</a>
            </div>
        </div>
        <div className={styles.coverIMG}/>
      </main>
    </div>
  )
}

export default Reiseforsikring
