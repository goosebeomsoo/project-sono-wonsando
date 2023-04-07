import React from 'react';

import FullBackground from '../Templates/FullBackground';

import outOfSonoBrandStoryData from '../DB/outOfSonoBrandStory.json';

import RouterButton from '../Components/RouterButton';

import assetsData from '../DB/assets.json';

function WonsandoBrandStory() {
  return (
    <div className="wonsando-brand-story-page">
      <RouterButton
        link="/video"
        buttonName="VIDEO"
        buttonClassName="left-router-button"
        icon={assetsData.icons[0].arrowLeft}
      />
      <RouterButton
        link="/masterplan"
        buttonName="MASTER PLAN"
        buttonClassName="right-router-button"
        icon={assetsData.icons[0].arrowRight}
      />

      <FullBackground
        brandStoryData={outOfSonoBrandStoryData}
      />
    </div>
  );
}

export default WonsandoBrandStory;
