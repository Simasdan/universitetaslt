import styles from './articlepage.module.scss';
import Button, { ButtonType } from '../../components/Button/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticlePageSkeleton from '../../components/ArticlePageSkeleton/ArticlePageSkeleton';

export interface ArticlePageProps {
    title: string;
    buttonType: ButtonType;
    buttonText: string;
    content: string;
    imageUrl: string;
}

const ArticlePage = () => {

    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<ArticlePageProps | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/articles/get-article/${id}`);
                const foundArticle = response.data;

                if (foundArticle) {
                    setArticle({
                        title: foundArticle.title,
                        buttonType: foundArticle.buttonType as ButtonType,
                        buttonText: foundArticle.buttonText,
                        content: foundArticle.content,
                        imageUrl: foundArticle.imageUrl
                    });
                }

                setLoading(false);
            } catch (fetchError) {
                setError(true);
                setLoading(false);
            }
        }

        fetchArticle();
    }, [id])

    if (loading) return <ArticlePageSkeleton />;
    if (error) return <div>Įvyko klaida</div>;

    if (!article) {
        return (
            <div style={{ margin: 'auto', textAlign: 'center', paddingTop: '25px' }}>
                <div className={styles.noRecordsMessage}>Straipsnis nerastas</div>
            </div>
        );
    }

    const { title, buttonType, buttonText, content } = article;

    const handleSearch = (query: string) => {
        navigate(`/straipsniai?search=${encodeURIComponent(query)}`);
    };

    return (
        <section className={styles.ArticlePage}>
            <div className={styles.headerWrapper}>
                <figure>
                    <img src={article.imageUrl} alt={title} />
                </figure>
                <div className={styles.headerTitleWrapper}>
                    <h1>{title}</h1>
                    <Button text={buttonText} type={buttonType} onClick={() => handleSearch(buttonText)} />
                </div>
            </div>
            <article className={styles.articleSummary}>
                <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </section>
    )
}

export default ArticlePage