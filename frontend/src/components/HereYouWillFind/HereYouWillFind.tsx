import styles from './hereyouwillfind.module.scss';
import TitlePhoto from '../../assets/images/PasMusRasite.png';
import Button, { ButtonType } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const HereYouWillFind = () => {

  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/straipsniai?search=${encodeURIComponent(query)}`)
  }

  return (
    <section className={styles.hereyouwillfindWrapper}>
      <h2>Pas mus rasite</h2>
      <figure className={styles.hereyouwillfindPhoto}>
        <img src={TitlePhoto} alt="Pas mus rasite" />
      </figure>
      <div className={styles.buttonWrapper}>
        <Button text='Individuali veikla' type={ButtonType.REGULAR} onClick={(e) => {
          e.stopPropagation();
          handleSearch('Individuali veikla')
        }}/>
        <Button text='Mažoji bendrija' type={ButtonType.REGULAR} onClick={(e) => {
          e.stopPropagation();
          handleSearch('Mažoji bendrija')
        }}/>
        <Button text='Asmeninis tobulėjimas' type={ButtonType.REGULAR} onClick={(e) => {
          e.stopPropagation();
          handleSearch('Asmeninis tobulėjimas')
        }}/>
        <Button text='Mentorystė' type={ButtonType.REGULAR} onClick={(e) => {
          e.stopPropagation();
          handleSearch('Mentorystė')
        }}/>
      </div>
    </section>
  )
}

export default HereYouWillFind