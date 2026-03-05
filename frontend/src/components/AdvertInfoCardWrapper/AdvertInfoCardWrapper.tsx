import styles from './advertinfocardwrapper.module.scss';
import { ButtonType } from '../Button/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfoCardSkeleton from '../InfoCardSkeleton/InfoCardSkeleton';
import AdvertCard from '../AdvertCard/AdvertCard';

export interface AdvertCardProps {
    id: number;
    jobTitle: string;
    jobDescription: string;
    positionName: string;
    positionDescription: string;
    email: string;
    phoneNumber: string;
    city: string;
    route: string;
}

interface AdvertInfoCardWrapperProps {
    searchQuery: string;
    pageNumber: number;
    onPageChange: (page: number) => void;
}

interface PaginatedResponse {
    items: AdvertCardProps[];
    hasNextPage: boolean;
}

const AdvertInfoCardWrapper = ({ searchQuery, pageNumber, onPageChange }: AdvertInfoCardWrapperProps) => {

    const [data, setData] = useState<AdvertCardProps[] | null>(null);
    const [error, setError] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setData(null);
            try {
                const params = new URLSearchParams();
                if (searchQuery) params.set('search', searchQuery);
                params.set('pageNumber', String(pageNumber));

                const response = await axios.get<PaginatedResponse>(
                    `http://localhost:5249/api/v1/adverts/get-adverts?${params.toString()}`
                );

                if (Array.isArray(response.data.items)) {
                    setData(response.data.items)
                    setHasNextPage(response.data.hasNextPage);
                } else {
                    setError(true)
                }
            } catch (fetchError) {
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
                <div className={styles.noRecordsMessage}>Įrašų nerasta</div>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.infoCardLayout}>
                {data.map((item, index) => (
                    <AdvertCard
                        key={item.id}
                        jobTitle={item.jobTitle}
                        jobDescription={item.jobDescription}
                        city={item.city}
                        route={`/skelbimai/${item.id}`}
                        buttonType={ButtonType.ICONREGULAR}
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

export default AdvertInfoCardWrapper
