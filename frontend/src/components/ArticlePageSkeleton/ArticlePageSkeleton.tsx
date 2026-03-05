import styles from './articlepageskeleton.module.scss';

const ArticlePageSkeleton = () => {
  return (
    <section className={styles.ArticlePageSkeleton}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerImageSkeleton}></div>
        <div className={styles.headerTitleWrapper}>
          <div className={styles.headerTitleSkeleton}></div>
          <div className={styles.headerButtonSkeleton}></div>
        </div>
      </div>
      <div className={styles.articleSummary}>
        <div className={styles.articleContentSkeleton}></div>
        <div className={styles.articleContentSkeleton}></div>
        <div className={styles.articleContentSkeleton}></div>
      </div>
    </section>
  );
};

export default ArticlePageSkeleton;
