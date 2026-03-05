import styles from './advertpage.module.scss';
import Button, { ButtonType } from '../../components/Button/Button';
import ProgramuotojasLImage from '../../assets/images/ProgramuotojasLImage.png';
import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface AdvertPageProps {
    jobTitle: string;
    jobDescription: string;
    positionName: string;
    positionDescription: string;
    email: string;
    phoneNumber: string;
    city: string;
    route: string;
    buttonType?: ButtonType;
    index?: number;
}

const AdvertPAge = () => {

    const { id } = useParams<{ id: string }>();
    const [advert, setAdvert] = useState<AdvertPageProps | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdvert = async () => {
            try {
                const response = await axios.get(`http://localhost:5249/api/v1/adverts/get-advert/${id}`);
                const foundAdvert = response.data;

                if (foundAdvert) {
                    setAdvert({
                        jobTitle: foundAdvert.jobTitle,
                        jobDescription: foundAdvert.jobDescription,
                        positionName: foundAdvert.positionName,
                        positionDescription: foundAdvert.positionDescription,
                        email: foundAdvert.email,
                        phoneNumber: foundAdvert.phoneNumber,
                        city: foundAdvert.city,
                        route: foundAdvert.route,
                        buttonType: foundAdvert.buttonType as ButtonType,
                    });
                }

                setLoading(false);
            } catch (fetchError) {
                setError(true);
                setLoading(false);
            }
        }

        fetchAdvert();

    }, [id])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Įvyko klaida</div>;

    if (!advert) {
        return (
            <div style={{ margin: 'auto', textAlign: 'center', paddingTop: '25px' }}>
                <div className={styles.noRecordsMessage}>Skelbimas nerastas</div>
            </div>
        );
    }

    return (
        <section className={styles.articlePage}>
            <div className={styles.headerWrapper}>
                <figure>
                    <img src={ProgramuotojasLImage} alt={advert.jobTitle} />
                </figure>
                <div className={styles.headerTitleWrapper}>
                    <h1>{advert.jobTitle}</h1>
                </div>
            </div>
            <article className={styles.articleSummary}>
                <p>Pilnas pozicijos pavadinimas: <strong>{advert.positionName}</strong></p>
                <div className={styles.articleSummaryDescription}>
                    <p>{advert.jobDescription}</p>
                    <div
                        dangerouslySetInnerHTML={{ __html: advert.positionDescription }}
                    />
                </div>
                <p><strong>Kontaktai:</strong></p>
                <div className={styles.contactInfoFooter}>
                    <div className={styles.contactInfo}>
                        <p><strong>El. paštas:</strong> <a href={`mailto:${advert.email}`}>{advert.email}</a></p>
                        <p><strong>Telefono numeris:</strong> <a href={`tel:${advert.phoneNumber}`}>{advert.phoneNumber}</a></p>
                        <p><strong>Miestas:</strong> {advert.city}</p>
                    </div>
                    <Button text='Grįžti' type={ButtonType.REGULAR} onClick={() => navigate('/skelbimai')} />
                </div>
            </article>
        </section>
    )
}

export default AdvertPAge