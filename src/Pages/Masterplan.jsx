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
import masterplanData from '../DB/masterplan.json';
import lightingData from '../DB/lighting.json';
import parkingData from '../DB/parking.json';
import roadPlanData from '../DB/roadPlan.json';
import landscapePlanData from '../DB/landscapePlan.json';
import renders from '../DB/renders.json';
import fs from '../DB/fs.json';
import positioningData from '../DB/positioning.json';
import specData from '../DB/specPlan.json';

// const [currentValue, setCurrentValue] = useState();

function Masterplan() {
  const popupData = [
    {
      data: fs,
      icon: assetsData.icons[0].fsIcon,
      type: 'slide',
      title: 'feasibility study',
    },
    {
      data: positioningData,
      icon: assetsData.icons[0].fsIcon,
      type: 'list',
      title: 'positioning',
    },
    {
      data: masterplanData,
      icon: assetsData.icons[0].masterplanIcon,
      type: 'list',
      title: 'masterplan',
    },
    {
      data: roadPlanData,
      icon: assetsData.icons[0].roadIcon,
      type: 'list',
      title: 'road plan',
    },
    {
      data: mepPlanData,
      icon: assetsData.icons[0].mepIcon,
      type: 'list',
      title: 'MEP plan',
    },
    {
      data: parkingData,
      icon: assetsData.icons[0].parkingIcon,
      type: 'list',
      title: 'parking plan',
    },
    {
      data: landscapePlanData,
      icon: assetsData.icons[0].landscapeIcon,
      type: 'list',
      title: 'landscape plan',
    },
    {
      data: lightingData,
      icon: assetsData.icons[0].lightIcon,
      type: 'list',
      title: 'lighting plan',
    },
    {
      data: renders,
      icon: assetsData.icons[0].galleryIcon,
      type: 'list',
      title: 'renders gallery',
    },
    {
      data: specData,
      icon: assetsData.icons[0].galleryIcon,
      type: 'list',
      title: 'Specifications',
    },
  ];

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
        {
        popupData.map((list) => (
          <div className="button-container">
            <PopupButton
              data={list.data.gallery}
              icon={list.icon}
              type={list.type}
            />
            <span className="body-small">
              {list.title}
            </span>
          </div>

        ))
      }

      </div>
      <Table />
      <Popup />
    </div>
  );
}

export default Masterplan;
