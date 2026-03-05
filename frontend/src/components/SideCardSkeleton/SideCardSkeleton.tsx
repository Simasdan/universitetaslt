import styles from './sidecardwrapper.module.scss';

const SideCardSkeleton = () => {
  return (
    <div className={styles.sideCardsWrapper} style={{ opacity: 0.6 }}>
      {/* Skeleton for PopularCard */}
      <div className={styles.popularCardSkeleton}>
        <div className={styles.popularCardImage} />
        <div className={styles.popularCardContent}>
          <div className={styles.popularCardTitle} />
          <div className={styles.popularCardButtonWrapper}>
            <div className={styles.popularCardButton} />
            <div className={styles.popularCardIconButton} />
          </div>
        </div>
      </div>
      {/* Conditionally render SocialCard skeleton */}
      {window.innerWidth > 950 && (
        <div className={styles.socialCardSkeleton}>
          <div className={styles.socialCardContent} />
        </div>
      )}
    </div>
  );
};

export default SideCardSkeleton;
