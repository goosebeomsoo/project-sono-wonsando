/* eslint-disable no-nested-ternary */
import React from 'react';

import Popup from './Popup';

import PopupButton from '../Components/PopupButton';
import RouterButton from '../Components/RouterButton';
import Pin from '../Components/Pin';
import Table from '../Components/Table/Table';

import assetsData from '../DB/assets.json';
import hotelAndSpaceData from '../DB/hotelAndSpace.json';

import mepPlanData from '../DB/mepPlan.json';
import roadPlanData from '../DB/roadPlan.json';
import landscapePlanData from '../DB/landscapePlan.json';
import renders from '../DB/renders.json';

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
                id={hotelAndSpaceData.data[i].id}
                backgroundColor={hotelAndSpaceData.data[i].backgroundColor}
                headingFontColor={hotelAndSpaceData.data[i].headingFontColor}
                bodyFontColor={hotelAndSpaceData.data[i].bodyFontColor}
                key={hotelAndSpaceData.data[i].title}
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
      <div className="image-popup-navigation">
        <PopupButton
          data={renders.gallery}
          icon={assetsData.icons[0].galleryIcon}
        />
        <PopupButton
          data={mepPlanData.gallery}
          icon={assetsData.icons[0].mepIcon}
        />
        <PopupButton
          data={mepPlanData.gallery}
          icon={assetsData.icons[0].lightIcon}
        />
        <PopupButton
          data={mepPlanData.gallery}
          icon={assetsData.icons[0].parkingIcon}
        />
        <PopupButton
          data={roadPlanData.gallery}
          icon={assetsData.icons[0].roadIcon}
        />
        <PopupButton
          data={landscapePlanData.gallery}
          icon={assetsData.icons[0].landscapeIcon}
        />
      </div>
      <Table />
      <Popup />
    </div>
  );
}

export default Masterplan;
