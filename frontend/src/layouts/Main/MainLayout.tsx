import styles from './mainLayout.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollToTop from '../../components/ScrollToTop';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const MainLayout = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const resetZoom = () => {
      if (window.visualViewport?.scale != 1) {
        (document.body.style as any).zoom = '100%'
      }
    }

    resetZoom();
    window.addEventListener('resize', resetZoom);
    return () => {
      window.removeEventListener('resize', resetZoom);
    };
  })

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/articles/get-articles`)
      .catch(() => { });
  }, []);

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className={styles.alertDialogContent}>
          <AlertDialogHeader>
            <AlertDialogTitle className={styles.alertDialogContentTitle}>Sveiki! 👋</AlertDialogTitle>
            <AlertDialogDescription className={styles.alertDialogContentDescription}>
              Ši svetainė naudoja nemokamą Microsoft Azure serverį, kuris užmiega po neaktyvumo.
              Pirmasis duomenų užkrovimas gali užtrukti iki 30 sekundžių.
              Ačiū už kantrybę!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className={styles.alertDialogFooter}>
            <AlertDialogAction onClick={() => setOpen(false)}>
              Supratau
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ScrollToTop />
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
