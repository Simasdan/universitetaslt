import styles from './articlespage.module.scss';
import InfoCardWrapper from '../../components/InfoCardWrapper/InfoCardWrapper';
import SideCardWrapper from '../../components/SideCardWrapper/SideCardWrapper';
import { useSearchParams } from 'react-router-dom';

const ArticlesPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const pageNumber = parseInt(searchParams.get('page') || '1');

  const handlePageChange = (newPage: number) => {
    setSearchParams(prev => {
      prev.set('page', String(newPage));
      return prev;
    })
  }

  return (
    <section className={styles.cardsWrapper}>
    <InfoCardWrapper searchQuery={searchQuery} pageNumber={pageNumber} onPageChange={handlePageChange}/>
    {!searchQuery && <SideCardWrapper/>}
</section>
  )
}

export default ArticlesPage
