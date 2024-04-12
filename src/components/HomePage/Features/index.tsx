import React from 'react';
import styles from "../home.module.css";

type Feature = {
  icon: string; 
  title: string;
  description: string;
};

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div className={styles.feature_container}>      
      {features.map((feature) => (
        <div className={styles.feature_item} key={feature.title}>
          <img src={feature.icon} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
