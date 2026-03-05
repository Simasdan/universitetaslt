import styles from './homepage.module.scss';
import Button, { ButtonType } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import OurTeam from '../../components/OurTeam/OurTeam';
import JoinUs from '../../components/JoinUs/JoinUs';
import HereYouWillFind from '../../components/HereYouWillFind/HereYouWillFind';

const HomePage = () => {

    const navigate = useNavigate();

    const handleButton = (route: string) => {
        navigate(route)
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <header className={styles.homepageWrapper}>
                <div className={styles.homepageTextWrapper}>
                    <h1>Išmok verslauti
                        ir siekti tikslų su
                        universitetas.lt
                    </h1>
                    <p>
                        Internetinis portalas, suteikiantis įvairios informacijos verslo kūrimo klausimais, galintis pagelbėti tiek pradedantiesiems, tiek verslo veteranams!
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <Button text='Skaityti straipsnius' type={ButtonType.TITLE} onClick={() => handleButton('/straipsniai')} />
                        <Button text='Peržiūrėti skelbimus' type={ButtonType.TITLE} onClick={() => handleButton('/skelbimai')} />
                    </div>
                </div>
                <figure className={styles.headerImageWrapper}>
                    <img src="../../assets/images/Hero Banner.png" alt="Header Image" />
                </figure>
            </header>
            <OurTeam />
            <JoinUs />
            <HereYouWillFind />
        </>
    )
}

export default HomePage
