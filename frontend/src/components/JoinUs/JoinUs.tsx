import styles from './joinUs.module.scss';
import JoinUsImage from '../../assets/images/JoinUs.png';
import Button, { ButtonType } from '../Button/Button';

const JoinUs = () => {
  return (
    <section className={styles.joinusWrapper}>
      <figure className={styles.joinusImageWrapper}>
        <img src={JoinUsImage} alt="Prisijunkite prie mūsų!" />
      </figure>
      <div className={styles.joinusTextWrapper}>
        <h2>
          Prisijunk prie universitetas.lt
          komandos!
        </h2>
        <p>
          Norite pritaikyti turimus įgūdžius kuriant komandą? Parašykite mums ir aptarsime galimybes drauge!
        </p>
        <Button text='Susisiekti' type={ButtonType.TITLE} />
      </div>
    </section>
  )
}

export default JoinUs