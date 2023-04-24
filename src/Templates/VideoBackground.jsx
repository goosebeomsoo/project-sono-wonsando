/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';

import assetsData from '../DB/assets.json';

function VideoBackground() {
  const videoRef = useRef();
  const [videoClear, setVideoClear] = useState('');
  const [showWhiteLogo, setShowWhiteLogo] = useState(true);

  useEffect(() => {
    videoRef.current.play();
    setTimeout(() => {
      setVideoClear('after-video-disappear');
      setShowWhiteLogo(false);
    }, 6500);
  });

  return (
    <div className="video-background">
      <div className="container">
        <div className="logo">
          <img className={`${showWhiteLogo ? 'show-logo' : 'hide-logo'}`} src={process.env.PUBLIC_URL + assetsData.img[0].outOfSonoLogoWhite} alt="logo-white" />
          <img className={`${showWhiteLogo ? 'hide-logo' : 'show-logo'}`} src={process.env.PUBLIC_URL + assetsData.img[0].outOfSonoLogoColor} alt="logo-color" />
        </div>
        <div className="contents">
          <p className={`micro ${videoClear}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dui mollis, gravida mauris iaculis, mollis ipsum. Fusce tortor felis,
          </p>
        </div>
      </div>
      <div className="background-video">
        <video ref={videoRef} className={videoClear}>
          <source src={process.env.PUBLIC_URL + assetsData.video[0].outOfSonoBackground} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoBackground;
