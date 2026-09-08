import React, { useState, useEffect } from 'react';

export default function AntiAdBlock(): React.JSX.Element | null {
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  useEffect(() => {
    const fakeAd: HTMLDivElement = document.createElement('div');
    fakeAd.className = 'adsbox ad-zone doubleclick-ad';
    fakeAd.style.position = 'absolute';
    fakeAd.style.left = '-999px';
    fakeAd.style.height = '1px';
    fakeAd.style.width = '1px';
    
    document.body.appendChild(fakeAd);

    const checkAdBlock = (): void => {
      if (fakeAd) {
        const computedStyle = window.getComputedStyle(fakeAd);
        if (
          fakeAd.offsetHeight === 0 ||
          computedStyle.display === 'none' ||
          computedStyle.visibility === 'hidden'
        ) {
          setIsBlocked(true);
        }

        if (document.body.contains(fakeAd)) {
          document.body.removeChild(fakeAd);
        }
      }
    };

    const timeout = setTimeout(checkAdBlock, 1500);
    
    // Cleanup
    return () => {
      clearTimeout(timeout);
      if (document.body.contains(fakeAd)) {
        document.body.removeChild(fakeAd);
      }
    };
  }, []);

  if (!isBlocked) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#ff4d4d',
      color: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 9999,
      maxWidth: '350px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>⚠️ AdBlocker Detected!</h3>
      <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.4' }}>
        हमारी टेक और DSA वेबसाइट को फ्री रखने में मदद करें। कृपया अपने AdBlocker को{' '}
        <strong>Disable (Whitelist)</strong> करें ताकि हम आपके लिए ऐसा ही बेहतरीन कंटेंट लाते रहें।
      </p>
    </div>
  );
}
