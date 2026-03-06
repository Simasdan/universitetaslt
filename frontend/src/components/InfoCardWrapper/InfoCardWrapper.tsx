import styles from './infocardwrapper.module.scss';
import InfoCard from '../InfoCard/InfoCard';
import Button, { ButtonType } from '../Button/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfoCardSkeleton from '../InfoCardSkeleton/InfoCardSkeleton';
import { useNavigate } from 'react-router';

interface Article {
    id: number;
    title: string;
    description: string;
    content: string;
    buttonType: string;
    buttonText: string;
    iconButtonType: string;
    imageUrl: string;
    qnAs: QnA[];
}

interface QnA {
    question: string;
    answer: string;
}

interface InfoCardWrapperProps {
    searchQuery: string;
    pageNumber: number;
    onPageChange: (page: number) => void;
}

interface PaginatedResponse {
    items: Article[];
    hasNextPage: boolean;
}

const InfoCardWrapper = ({ searchQuery, pageNumber, onPageChange }: InfoCardWrapperProps) => {

    const [data, setData] = useState<Article[] | null>(null);
    const [error, setError] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setData(null);
            try {
                const params = new URLSearchParams();
                if (searchQuery) params.set('search', searchQuery);
                params.set('pageNumber', String(pageNumber));

                const response = await axios.get<PaginatedResponse>(
                    `${import.meta.env.VITE_API_URL}/api/v1/articles/get-articles?${params.toString()}`
                );

                if (Array.isArray(response.data.items)) {
                    setData(response.data.items);
                    setHasNextPage(response.data.hasNextPage);
                } else {
                    setError(true);
                }
            } catch {
                setError(true);
            }
        };

        fetchData();
    }, [searchQuery, pageNumber]);

    if (error) return <div>Įvyko klaida</div>

    if (!data) {
        return (
            <div className={styles.infoCardLayout}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <InfoCardSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className={styles.infoCardLayout}>
                <div className={styles.noRecordsMessage}>
                    Šiuo metu straipsnių nėra
                    <Button text='Grįžti' type={ButtonType.REGULAR} onClick={() => navigate('/')} />
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.infoCardLayout}>
                {data.map((item, index) => (
                    <InfoCard
                        key={item.id}
                        title={item.title}
                        buttonType={item.buttonType as ButtonType}
                        buttonText={item.buttonText}
                        iconButtonType={item.iconButtonType as ButtonType}
                        imageUrl={item.imageUrl}
                        route={`/straipsniai/${item.id}`}
                        index={index}
                    />
                ))}
            </div>
            <div className={styles.pagination}>
                {pageNumber > 1 && (
                    <button onClick={() => onPageChange(pageNumber - 1)}>Previous</button>
                )}
                <span>Puslapis {pageNumber}</span>
                {hasNextPage && (
                    <button onClick={() => onPageChange(pageNumber + 1)}>Next</button>
                )}
            </div>
        </div>
    )
}

export default InfoCardWrapper