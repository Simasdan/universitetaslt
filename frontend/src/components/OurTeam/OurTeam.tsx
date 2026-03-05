import MemberCard from '../MemberCard/MemberCard';
import styles from './ourTeam.module.scss';
import MemberImage from '../../assets/memberImages/memberImg.jpg';
import SimonasImage from '../../assets/memberImages/Simonas.jpg';
import IconRight from '../../assets/icons/icon_chevron-right.svg?react';
import IconLeft from '../../assets/icons/icon_chevron-left.svg?react';
import Button, { ButtonType } from '../Button/Button';
import { useEffect, useState } from 'react';

interface TeamMember {
    image: string;
    name: string;
    profession: string;
    facebookLink: string;
    linkedinLink: string;
}

const teamMembers: TeamMember[] = [
    {
        image: MemberImage,
        name: 'Vardenis Pavardenis',
        profession: 'Projektų vadovas',
        facebookLink: 'https://www.facebook.com/',
        linkedinLink: 'https://www.linkedin.com/',
    },
    {
        image: MemberImage,
        name: 'Vardenis Pavardenis',
        profession: 'Projektų vadovas',
        facebookLink: 'https://www.facebook.com/',
        linkedinLink: 'https://www.linkedin.com/',
    },
    {
        image: MemberImage,
        name: 'Vardenis Pavardenis',
        profession: 'Projektų vadovas',
        facebookLink: 'https://www.facebook.com/',
        linkedinLink: 'https://www.linkedin.com/',
    },
    {
        image: SimonasImage,
        name: 'Simonas Danielius',
        profession: 'Programuotojas',
        facebookLink: 'https://www.facebook.com/',
        linkedinLink: 'https://www.linkedin.com/',
    },
];

const OurTeam = () => {
    const [isCarousel, setIsCarousel] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1070) {
                setIsCarousel(true);
            } else {
                setIsCarousel(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
    };

    const renderMemberCards = () => {
        return teamMembers.map((member, index) => (
            <MemberCard
                key={index}
                image={member.image}
                name={member.name}
                profession={member.profession}
                facebookLink={member.facebookLink}
                linkedinLink={member.linkedinLink}
            />
        ));
    };

    return (
        <section className={styles.ourTeamWrapper}>
            <h2>Mūsų komanda</h2>
            {!isCarousel ? (
                <div className={styles.memberCardsWrapper}>
                    {renderMemberCards()}
                </div>
            ) : (
                <div className={styles.carousel}>
                    <div className={styles.carouselInner}>
                        <div className={styles.carouselItem}>
                            <button className={styles.carouselButton} onClick={goToPrevious}>
                                <IconLeft />
                            </button>
                            <MemberCard
                                image={teamMembers[currentIndex].image}
                                name={teamMembers[currentIndex].name}
                                profession={teamMembers[currentIndex].profession}
                                facebookLink={teamMembers[currentIndex].facebookLink}
                                linkedinLink={teamMembers[currentIndex].linkedinLink}
                            />
                            <button className={styles.carouselButton} onClick={goToNext}>
                                <IconRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.ourteamCarButton}>
                <Button text="Susisiekti" type={ButtonType.TITLE}/>
            </div>
        </section>
    );
};

export default OurTeam
