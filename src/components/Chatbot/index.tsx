import React, { useEffect } from 'react';
import styles from './styles.module.css';

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://mediafiles.botpress.cloud/4e10f671-b66c-4211-a966-8d2a4b404513/webchat/config.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <div id="bp-web-widget" className={styles.bpwLayoutLeft} />
    </div>
  );
};

export default Chatbot;
