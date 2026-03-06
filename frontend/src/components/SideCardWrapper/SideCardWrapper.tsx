import styles from './sidecardwrapper.module.scss';
import PopularCard from '../PopularCard/PopularCard';
import { ButtonType } from '../Button/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SocialCard from '../SocialCard/SocialCard';
import SideCardSkeleton from '../SideCardSkeleton/SideCardSkeleton';

interface Article {
    id: number;
    title: string;
    description: string;
    content: string;
    buttonType: string;
    buttonText: string;
    iconButtonType: string;
    imageUrl: string;
    qnAs: { question: string; answer: string; }[];
}

const SideCardWrapper = () => {
    const isMobile = window.innerWidth <= 950;
    const [data, setData] = useState<Article[] | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{ items: Article[], hasNextPage: boolean }>(
                    `${import.meta.env.VITE_API_URL}/api/v1/articles/get-articles`
                );

                if (Array.isArray(response.data.items)) {
                    setData(response.data.items);
                } else {
                    setError(true);
                }
            } catch (fetchError) {
                setError(true);
            }
        }

        fetchData();
    }, [])

    if (error) return <div>Įvyko klaida</div>
    if (!data && !isMobile) return <SideCardSkeleton />;
    if (!data) return <div></div>;

    const popularCardData = data[0];

    if (!popularCardData) return <div>No popular items available</div>

    return (
        <div className={styles.sideCardsWrapper}>
            <PopularCard
                title={popularCardData.title}
                buttonType={popularCardData.buttonType as ButtonType}
                buttonText={popularCardData.buttonText}
                iconButtonType={popularCardData.iconButtonType as ButtonType}
                imageUrl={popularCardData.imageUrl}
                route={`/straipsniai/${popularCardData.id}`}
            />
            {!isMobile && <SocialCard />}
        </div>
    )
}

export default SideCardWrapper