import React, { useState } from 'react';
import assetsData from '../DB/assets.json';

import RouterButton from '../Components/RouterButton';

function Start() {
  const [currentValue, setCurrentValue] = useState(false);

  return (
    <div className="start-page">
      <RouterButton
        link="/video"
        buttonName="VIDEO"
        buttonClassName="right-router-button"
        icon={assetsData.icons[0].arrowRight}
      />
      <div
        className="container"
        onClick={() => {
          setCurrentValue(true);
        }}
        role="presentation"
      >
        <div className="content">
          <h3 className={`heading-small ${currentValue ? '' : 'show-text'}`}>
            럭셔리 호텔, 리조트의 새로운 패러다임의 정의, 해석 그리고 개발.
          </h3>
          <h3 className={`heading-small ${currentValue ? 'show-text' : ''}`}>
            원산도에서 시작합니다.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Start;
