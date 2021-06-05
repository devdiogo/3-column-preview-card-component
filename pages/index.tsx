import Head from "next/head"
import Card from "../components/Card"
import styles from "./main.module.sass"

const IndexPage = () => (
  <main className={styles.container}>
    <Head>
      <title>Car Rentals</title>
      <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      <meta name="description" content="The most reliable car rental website" />
    </Head>
    <div className={styles.cards}>
      <Card
        heading="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        buttonText="Learn More"
        icon="sedans"
      />

      <Card
        heading="Suvs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        buttonText="Learn More"
        icon="suvs"
      />

      <Card
        heading="Luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        buttonText="Learn More"
        icon="luxury"
      />
    </div>
  </main>
)

export default IndexPage
