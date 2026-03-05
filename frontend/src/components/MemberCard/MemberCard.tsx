import styles from './memberCard.module.scss';
import SmallFacebookIcon from '../../assets/icons/smallFacebookIcon.svg?react';
import SmallLinkedinIcon from '../../assets/icons/smallLinkedinIcon.svg?react';

export interface MemberCardProps {
    image: string;
    name: string;
    profession: string;
    facebookLink?: string;
    linkedinLink?: string;
}

const MemberCard = ({image, name, profession, facebookLink, linkedinLink}: MemberCardProps) => {
  return (
    <div className={styles.memberCard}>
        <figure>
            <img src={image} alt={name} />
        </figure>
        <h4>{name}</h4>
        <h5>{profession}</h5>
        <div className={styles.memberCardButtonWrapper}>
          {facebookLink && (
            <a href={facebookLink} target="_blank">
              <SmallFacebookIcon />
            </a>
          )}
          {linkedinLink && (
            <a href={linkedinLink} target="_blank">
                <SmallLinkedinIcon/>
            </a>
          )}
        </div>
    </div>
  )
}

export default MemberCard
