import React from 'react';
import assetsData from '../DB/assets.json';

import RouterButton from '../Components/RouterButton';

function Video() {
  return (
    <div className="video-page">
      <RouterButton
        link="/intro"
        buttonName="INTRO"
        buttonClassName="left-router-button"
        icon={assetsData.icons[0].arrowLeft}
      />
      <RouterButton
        link="/brand-story"
        buttonName="BRAND STORY"
        buttonClassName="right-router-button"
        icon={assetsData.icons[0].arrowRight}
      />
      <video
        controls
        src={process.env.PUBLIC_URL + assetsData.video[0].wonsando}
      >
        <track kind="captions" />
      </video>
    </div>
  );
}

export default Video;
