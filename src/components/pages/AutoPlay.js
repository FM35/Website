import React from 'react';


var AutoPlay = function (props) {
  return (
    <div className={props.className} dangerouslySetInnerHTML={{
      __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${props.src}"
          class="${props.className}"
        />,
      ` }}></div>
  )
};

export default AutoPlay;
