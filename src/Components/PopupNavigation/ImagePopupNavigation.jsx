import React from 'react';

import ImagePopupButton from './ImagePopupButton';

import imagePopupData from '../../DB/imagePopup.json';

function ImagePopupNavigation() {
  return (
    <div className="image-popup-navigation">
      {
        imagePopupData.data.map((data, i) => (
          <ImagePopupButton
            title={data.title}
            icon={data.icon}
            currentValue={i}
          />
        ))
      }
    </div>
  );
}

export default ImagePopupNavigation;
