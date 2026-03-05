import styles from './infocard.module.scss';

const InfoCardSkeleton = () => {
  return (
    <div className={styles.infocardWrapper} style={{ opacity: 0.6 }}>
      <figure className={styles.infocardFigure} style={{ backgroundColor: '#e0e0e0' }}>
        <div style={{ width: '100%', height: '100%', backgroundColor: '#c0c0c0' }} />
      </figure>
      <div className={styles.infocardContent} style={{ backgroundColor: '#e0e0e0' }}>
        <div style={{ width: '60%', height: '1.5rem', backgroundColor: '#c0c0c0', marginBottom: '1rem' }} />
        <div className={styles.infocardButtonWrapper}>
          <div style={{ width: '30%', height: '2rem', backgroundColor: '#c0c0c0', borderRadius: '0.25rem' }} />
          <div style={{ width: '2rem', height: '2rem', backgroundColor: '#c0c0c0', borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  );
};

export default InfoCardSkeleton;
