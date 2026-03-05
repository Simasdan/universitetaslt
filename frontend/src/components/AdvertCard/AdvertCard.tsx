import styles from './advertCard.module.scss';
import { useNavigate } from 'react-router-dom';
import HeaderImage from '../../assets/images/headerImage.png';
import TimeLogo from '../../assets/icons/timeLogo.svg?react';
import Button, { ButtonType } from '../Button/Button';

export interface AdvertCardProps {
    jobTitle: string;
    jobDescription: string;
    city: string;
    route: string;
    buttonType?: ButtonType;
    index?: number;
}

const AdvertCard = ({ jobTitle, jobDescription, city, route }: AdvertCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route)
    }

    return (
        <section className={styles.advertCardWrapper} onClick={handleClick}>
            <div className={styles.advertCardHeader}>
                <figure className={styles.headerImage}>
                    <img src={HeaderImage} alt="Header Image" />
                </figure>
                <div className={styles.headerContent}>
                    <div className={styles.headerTime}>
                        <div className={styles.timeWrapper}>
                            <TimeLogo />
                            <span>3 min.</span>
                        </div>
                        <h4>{city}</h4>
                    </div>
                    <h3>{jobTitle}</h3>
                    <p>{jobDescription}</p>
                    <Button
                        text='Skaityti daugiau'
                        type={ButtonType.REGULAR}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default AdvertCard