import React, { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const link = document.querySelector('a[href*="utm_campaign=free-widget"]');
      if (link) {
        link.style.setProperty('background-color', 'white', 'important');
        link.style.setProperty('color', 'white', 'important');
        link.style.setProperty('pointer-events', 'none', 'important');
        const svg = link.querySelector('svg');
        if (svg) {
          svg.style.setProperty('fill', 'white', 'important');
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>
        {`
          div.elfsight-app-77ef122f-6821-4c50-9073-0924a5711990 + a[href*="utm_campaign=free-widget"] {
            background-color: white !important;
            color: white !important;
            pointer-events: none !important;
          }
          div.elfsight-app-77ef122f-6821-4c50-9073-0924a5711990 + a[href*="utm_campaign=free-widget"] svg {
            fill: white !important;
          }
        `}
      </style>
      <div className="elfsight-app-77ef122f-6821-4c50-9073-0924a5711990" data-elfsight-app-lazy></div>
    </>
  );
};

export default InstagramFeed; 