import React, { useState, useEffect } from 'react';

// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { setPopupStateFalse } from '../Store/popupState';

import FunctionButton from '../Components/FunctionButton';

import assetsData from '../DB/assets.json';

function SlideGallery() {
  const dispatch = useDispatch();
  const popupData = useSelector((state) => state.popupDataState.value);
  const maximumImage = popupData.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

  });

  return (
    <div className="slide-gallery">
      <div className="slide-navigation">
        <FunctionButton
          clickEvent={() => {
            dispatch(setPopupStateFalse());
          }}
          icon={assetsData.icons[0].arrowLeft}
          functionButtonClassName="close-button"
        />
        <div className="container">
          <FunctionButton
            clickEvent={() => {
              if (currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
              } else { setCurrentSlide(0); }
            }}
            icon={assetsData.icons[0].arrowUp}
            functionButtonClassName="slide-button pre-slide-button"
          />
          <h3 className="page heading-small">
            {`${currentSlide + 1}`}
          </h3>
          <FunctionButton
            clickEvent={() => {
              if (currentSlide < maximumImage - 1) {
                setCurrentSlide(currentSlide + 1);
              } else {
                setCurrentSlide(maximumImage - 1);
              }
            }}
            icon={assetsData.icons[0].arrowDown}
            functionButtonClassName="slide-button next-slide-button"
          />
        </div>
      </div>
      <div className="gallery-body" style={{ top: `${currentSlide * -100}vh` }}>
        {
            popupData.map((data, i) => (
              <div className={`gallery-item ${currentSlide === i ? 'show-item' : ''}`}>
                <img
                  src={process.env.PUBLIC_URL + data.image}
                  alt={data.title}
                />
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default SlideGallery;
