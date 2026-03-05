import styles from './infocard.module.scss';
import { ButtonType } from '../Button/Button';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import TimeLogo from '../../assets/icons/timeLogo.svg?react';

export interface InfoCardProps {
  title: string;
  buttonType: ButtonType;
  buttonText: string;
  iconButtonType: ButtonType;
  imageUrl: string;
  route: string;
  index: number;
}

const InfoCard = ({ title, buttonType, buttonText, iconButtonType, imageUrl, route, index }: InfoCardProps) => {

  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  const handleClick = () => {
    navigate(route)
  }

  const handleSearch = (query: string) => {
    navigate(`/straipsniai?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className={styles.infocardWrapper} onClick={handleClick}>
      {isEven ? (
        <figure
          className={styles.infocardFigure}
          style={{ backgroundColor: '#3835FF', paddingLeft: '25px' }}>
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            style={{ borderBottomLeftRadius: '70px', borderTopLeftRadius: '70px' }}
          />
        </figure>
      ) : (
        <figure
          className={styles.infocardFigure}
          style={{ backgroundColor: '#3835FF', paddingRight: '25px' }}>
          <img
            src={imageUrl}  
            alt={title}
            loading="lazy"
            style={{ borderBottomRightRadius: '70px', borderTopRightRadius: '70px' }}
          />
        </figure>
      )}
      <div className={styles.infocardContent}>
        <div className={styles.timeWrapper}>
          <TimeLogo />
          <span>3 min.</span>
        </div>
        <h2>{title}</h2>
        <div className={styles.infocardButtonWrapper}>
          <Button
            text={buttonText}
            type={buttonType}
            onClick={(event) => {
              event.stopPropagation();
              handleSearch(buttonText);
            }}
          />
          <Button type={iconButtonType} icon={true} onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default InfoCard
