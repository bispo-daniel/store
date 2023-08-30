import React from 'react';

export const Container = (props) => {
  const token = '12345678';

  const handleIframeLoad = () => {
    const iframe = document.getElementById('iframe');
    iframe.contentWindow.postMessage(token, '*');
  };

  return (
    <iframe
      id='iframe'
      className='w-full bg-white min-h-screen'
      title='page'
      src={props.website}
      onLoad={handleIframeLoad}
    />
  );
};
