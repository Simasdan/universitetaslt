import { useNavigate } from 'react-router-dom';
import Button, { ButtonType } from '../Button/Button';
import styles from './popularcard.module.scss';

export interface PopularCardProps {
    title: string;
    buttonType: ButtonType
    buttonText: string;
    iconButtonType: ButtonType;
    imageUrl: string;
    route: string;
}

const PopularCard = ({ title, buttonType, buttonText, iconButtonType, imageUrl, route }: PopularCardProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route)
    }

    return (
        <div className={styles.popularCardWrapper} onClick={handleClick} style={{ cursor: "pointer" }}>
            <figure className={styles.imageWrapper}>
                <p>Populiaru</p>
                <img src={imageUrl} alt={title} />
            </figure>
            <div className={styles.textWrapper}>
                <h3>{title}</h3>
                <div className={styles.buttonWrapper}>
                    <Button text={buttonText} type={buttonType} onClick={handleClick} />
                    <Button type={iconButtonType} icon={true}/>
                </div>
            </div>
        </div>
    )
}

export default PopularCard
