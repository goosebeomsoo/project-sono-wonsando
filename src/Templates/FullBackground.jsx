/* eslint-disable max-len */
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import FunctionButton from '../Components/FunctionButton';

import assetsData from '../DB/assets.json';

function FullBackground({
  brandStoryData,
}) {
  const dataArray = brandStoryData.brandStory.length;
  const [currentValue, setCurrentValue] = useState(0);

  const currentPage = brandStoryData.brandStory[currentValue];

  const slideLeft = () => {
    if (currentValue > 0) {
      setCurrentValue(currentValue - 1);
    }
  };

  const slideRight = () => {
    if (dataArray - 1 > currentValue) {
      setCurrentValue(currentValue + 1);
    }
  };
  return (
    <div className="full-background template scroll-hook">
      <div className="button-navigation">
        <FunctionButton
          clickEvent={slideLeft}
          icon={assetsData.icons[0].arrowLeft}
        />
        <FunctionButton
          clickEvent={slideRight}
          icon={assetsData.icons[0].arrowRight}
        />
      </div>
      <div className="container">
        <p className="body-medium caption">
          {`${currentPage.page} ${currentPage.caption}`}
        </p>
        <div className="header-area" key="react-transition-group">
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={`value ${currentValue}`}
              timeout={700}
              classNames="slide-right"
            >
              <h2 className="heading-medium">
                {currentPage.heading}
              </h2>
            </CSSTransition>
          </TransitionGroup>
        </div>

        <TransitionGroup>
          <CSSTransition
            key={`value ${currentValue}`}
            timeout={700}
            classNames="fade"
          >
            <div className="content-area">
              {currentPage.contentArea.map((data) => (
                <div className="content" key={data.subHeading}>
                  <h3 className="sub-heading">
                    {data.subHeading}
                  </h3>
                  <p className="body-small">
                    {data.content}
                  </p>
                </div>
              ))}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="background-image">
        <TransitionGroup>
          <CSSTransition
            key={`value ${currentValue}`}
            timeout={700}
            classNames="fade-scale"
          >
            <img src={`${process.env.PUBLIC_URL + currentPage.background}`} alt={currentPage.caption} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

FullBackground.propTypes = {
  brandStoryData: PropTypes.objectOf.isRequired,
};

export default FullBackground;
