import styles from './mainadvertspage.module.scss';
import SideCardWrapper from '../../components/SideCardWrapper/SideCardWrapper';
import { useSearchParams } from 'react-router-dom';
import AdvertInfoCardWrapper from '../../components/AdvertInfoCardWrapper/AdvertInfoCardWrapper';

const MainAdvertsPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const pageNumber = parseInt(searchParams.get('page') || '1');

  const handlePageChange = (newPage: number) => {
    setSearchParams(prev => {
      prev.set('page', String(newPage));
      return prev;
    })
  };

  return (
    <section className={styles.cardsWrapper}>
    <AdvertInfoCardWrapper searchQuery={searchQuery} pageNumber={pageNumber} onPageChange={handlePageChange}/>
    {!searchQuery && <SideCardWrapper/>}
</section>
  )
}

export default MainAdvertsPage
