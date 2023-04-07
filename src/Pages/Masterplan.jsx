/* eslint-disable no-nested-ternary */
import React from 'react';

import RouterButton from '../Components/RouterButton';
import Pin from '../Components/Pin';
import Table from '../Components/Table/Table';
import PopupImage from '../Components/PopupImage';
import ImagePopupNavigation from '../Components/PopupNavigation/ImagePopupNavigation';

import assetsData from '../DB/assets.json';
import hotelAndSpaceData from '../DB/hotelAndSpace.json';

// const [currentValue, setCurrentValue] = useState();

function Masterplan() {
  return (
    <div className="masterplan-page">
      <RouterButton
        link="/brand-story"
        buttonName="BRAND STORY"
        buttonClassName="left-router-button"
        icon={assetsData.icons[0].arrowLeft}
      />
      <div className="masterplan-container">
        <div className="pin-container">
          {
            hotelAndSpaceData.data.map((data, i) => (
              <Pin
                title={hotelAndSpaceData.data[i].title}
                icon={hotelAndSpaceData.data[i].icon}
                anchor={`/masterplan${hotelAndSpaceData.data[i].anchor}`}
              />
            ))
          }
        </div>
        <img
          className="masterplan-image"
          src={process.env.PUBLIC_URL + assetsData.img[0].masterplan}
          alt="masterplan"
        />
      </div>
      <ImagePopupNavigation />
      <Table />
      <PopupImage />
    </div>
  );
}

export default Masterplan;
