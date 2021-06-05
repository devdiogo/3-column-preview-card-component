import styles from "./Card.module.sass"

type CardInfo = { heading: string; description: string; buttonText: string; icon: string }

const Card = ({ heading, description, buttonText, icon }: CardInfo) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={`/images/icon-${icon}.svg`} />
      </div>
      <div>
        <h2>{heading}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <button>{buttonText}</button>
      </div>
    </div>
  )
}

export default Card
