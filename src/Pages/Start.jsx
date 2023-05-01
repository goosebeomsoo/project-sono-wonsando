import React, { useState, useRef } from 'react';
import assetsData from '../DB/assets.json';

import RouterButton from '../Components/RouterButton';

function Start() {
  const [firstInteraction, setFirstInteraction] = useState(false);
  const [secondInteraction, setSecondInteraction] = useState(false);
  const [thirdInteraction, setThirdInteraction] = useState(false);

  const audioRef = useRef();

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
          setFirstInteraction(true);
          if (firstInteraction) {
            setFirstInteraction(false);
            setSecondInteraction(true);
          }

          if (secondInteraction) {
            setFirstInteraction(false);
            setSecondInteraction(false);
            setThirdInteraction(true);
          }

          audioRef.current.play();
        }}
        role="presentation"
      >
        <div className="content">
          <h3 className={`heading-small ${firstInteraction ? 'show-text' : ''}`}>
            세계 최고의 럭셔리 호텔, 리조트의 새로운 패러다임의 정의, 해석 그리고 개발.
          </h3>
          <h3 className={`
            heading-small
            ${secondInteraction ? 'show-text' : ''}
            ${thirdInteraction ? 'hide-text' : ''}
            `}
          >
            원산도에서 시작합니다.
          </h3>
        </div>

      </div>
      <audio controlsList="nodownload" ref={audioRef}>
        <track kind="captions" />
        <source src={process.env.PUBLIC_URL + assetsData.audio[0].introAudio} type="audio/mpeg" />
        <code />
      </audio>
    </div>
  );
}

export default Start;
