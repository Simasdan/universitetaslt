import styles from './mainLayout.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from '../../components/ScrollToTop';


const MainLayout = () => {

  useEffect(() => {
    const resetZoom = () => {
      if(window.visualViewport?.scale != 1) {
        (document.body.style as any).zoom = '100%'
      }
    }

    resetZoom();

    window.addEventListener('resize', resetZoom);

    return () => {
      window.removeEventListener('resize', resetZoom);
    };
  })

  return (
    <>
      <ScrollToTop/>
      <Navigation />
      <div className={styles.container}>
        <main className={styles.mainWrapper}>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default MainLayout
