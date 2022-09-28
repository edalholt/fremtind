import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";


const Fakturaoversikt: NextPage = () => {
    const router = useRouter();

    const customer_data = {
        name: "Per Andreas Hansen",
        contract: 123456789,
        paid: [{
            date: "10.01.2021",
            amount: 249
        },
        {
            date: "09.02.2021",
            amount: 249
        },
        {
            date: "11.03.2021",
            amount: 249
        }]
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Reiseforsikring - Fakturaoversikt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>
        <p style={{cursor: "pointer"}} onClick={() => router.push('/')}>← Tilbake</p>
        <h2 className={styles.title}>
        Fakturaoversikt
        </h2>
        <p>{customer_data.name}</p>
        <p>For avtale: {customer_data.contract}</p>
        </div>

        <div className={styles.fakturaoversikt}>
            <div className={styles.fakturaTop}>
            <p>Gjennomførte betalinger:</p>
            </div>
            <div style={{fontWeight: "600"}} className={styles.fakturaLine}>
                <h5>Dato:</h5>
                <p>Beløp:</p>
            </div>
            {customer_data.paid.map(payment => (
            <div className={styles.fakturaLine}>
                <h5>{payment.date}</h5>
                <p>{payment.amount} kr</p>
            </div>
            ))}
        </div>
        <div className={styles.coverIMG}/>
      </main>
    </div>
  )
}

export default Fakturaoversikt
