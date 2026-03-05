import { useEffect } from 'react';
import styles from './socialcard.module.scss';

declare global {
  interface Window {
    FB: any;
  }
}

const SocialCard = () => {

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className={styles.socialCardWrapper} style={{ maxWidth: "400px" }}>
      <div className="fb-page"
           data-href="https://www.facebook.com/universitetas.lt"
           data-tabs=""
           data-width="305"
           data-height="250"
           data-small-header="false"
           data-adapt-container-width="true"
           data-hide-cover="false"
           data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/universitetas.lt" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/universitetas.lt">universitetas.lt</a>
        </blockquote>
      </div>
    </div>
  )
}

export default SocialCard
