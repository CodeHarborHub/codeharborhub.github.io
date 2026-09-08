import React from 'react';
import AntiAdBlock from '@site/src/components/AntiAdBlock';

export default function Root({children}) {
  return (
    <>
      <AntiAdBlock />
      {children}
    </>
  );
}