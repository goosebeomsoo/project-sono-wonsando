/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, {
  useState, useRef, useEffect,
} from 'react';

import { useLocation } from 'react-router-dom';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { detailPageNavigationShow } from '../Store/detailPageNavigationState';
import { detailPageScrollInc, detailPageScrollDec, detailPageScrollAction } from '../Store/detailPageScroll';

// COMPONENTS
import FunctionButton from '../Components/FunctionButton';
import RouterButton from '../Components/RouterButton';
import PopupDetail from '../Components/PopupDetail';

// TEMPLATES
import FullBackground from '../Templates/FullBackground';
import Title from '../Templates/Title';
import Collage from '../Templates/Collage';
import Overview from '../Templates/Overview';
import DetailPageNavigation from '../Templates/DetailPageNavigation';

// DATA
import assetsData from '../DB/assets.json';

function TheBunkers() {
  const location = useLocation();
  const { hotelData } = location.state;
  const { backgroundColor } = location.state;
  const { headingFontColor } = location.state;
  const { bodyFontColor } = location.state;
  const { resetValue } = location.state;

  // const wholePage = hotelData.information.length + hotelData.information[hotelData.information.length - 1].overview.length - 1;

  // REDUX
  const dispatch = useDispatch();
  const currentScroll = useSelector((state) => state.detailPageScroll.currentScroll);

  // useRef
  const pageRef = useRef();
  const containerRef = useRef();
  const overviewRef = useRef([]);

  // useState
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
  const [eventScrollValue, setEventScrollValue] = useState(resetValue);
  const [changeBackground, setChangeBackground] = useState();

  const targetScrollValue = currentScroll * currentHeight;

  // Set current page height when browser resizing
  const setPageSize = () => {
    setCurrentHeight(window.innerHeight);
  };

  // Scroll to location when click button
  useEffect(() => {
    // dispatch(detailPageScrollAction(0));
    pageRef.current.scrollTo({
      top: eventScrollValue,
      behavior: 'smooth',
    });
  });

  // currentPage count when wheel down
  useEffect(() => {
    const downWheelEvent = (e) => {
      setEventScrollValue(undefined);
      if (e.deltaY > 0) {
        if (pageRef.current.scrollTop > targetScrollValue) {
          dispatch(detailPageScrollInc());
        }
      }
    };

    const upWheelEvent = (e) => {
      setEventScrollValue(undefined);
      if (e.deltaY < 0) {
        if (pageRef.current.scrollTop < targetScrollValue) {
          dispatch(detailPageScrollDec());
        }
      }
    };

    window.addEventListener('wheel', downWheelEvent);
    window.addEventListener('wheel', upWheelEvent);
    window.addEventListener('resize', setPageSize);
    return () => {
      window.removeEventListener('wheel', downWheelEvent);
      window.removeEventListener('wheel', upWheelEvent);
      window.removeEventListener('resize', setPageSize);
    };
  });

  // Overview section interaction
  useEffect(() => {
    for (let i = 0; i < hotelData.information[hotelData.information.length - 1].overview.length; i += 1) {
      if ((i + hotelData.information.length) * currentHeight <= currentScroll * currentHeight) {
        overviewRef.current[i].classList.add('current-page');
      } else {
        overviewRef.current[i].classList.remove('current-page');
      }
    }
  });

  useEffect(() => {
    if (currentScroll < hotelData.information.length - 1) {
      setChangeBackground(process.env.PUBLIC_URL + hotelData.information[0].title[0].background);
    } else if (currentScroll > hotelData.information.length - 1) {
      // setTimeout(() => {
      setChangeBackground(process.env.PUBLIC_URL + hotelData.information[0].title[0].overviewBackground);
      // }, 80);
    }
  }, [setChangeBackground, currentScroll, hotelData]);

  return (
    <div
      className="hotel-detail-page"
      ref={pageRef}
    >
      <PopupDetail
        hotelData={hotelData.information[currentScroll]}
      />
      <RouterButton
        link="/masterplan"
        icon={assetsData.icons[0].arrowLeft}
        buttonClassName="left-router-button"
        buttonName="MASTERPLAN"
        onClick={() => {
          dispatch((detailPageScrollAction(0)));
          console.log(currentScroll);
        }}
      />

      <DetailPageNavigation
        targetScrollValue={targetScrollValue}
        currentScroll={currentScroll}
        currentHeight={currentHeight}
        data={hotelData.information}
        setEventScrollValue={setEventScrollValue}
        eventScrollValue={eventScrollValue}
      />

      <div className="container" ref={containerRef}>
        {
        hotelData.information.map((data) => (
          JSON.stringify(Object.keys(data)) === '["title"]' ? (
            <Title
              data={data}
              eventScrollValue={eventScrollValue}
            />
          )
            : JSON.stringify(Object.keys(data)) === '["brandStory"]' ? (
              <FullBackground brandStoryData={data} />
            )
              : JSON.stringify(Object.keys(data)) === '["concepts"]' ? (
                <Collage
                  currentHeight={currentHeight}
                  data={data.concepts}
                  backgroundColor={backgroundColor}
                  headingFontColor={headingFontColor}
                  bodyFontColor={bodyFontColor}
                />
              )
                : JSON.stringify(Object.keys(data)) === '["theme"]' ? (
                  <Collage
                    currentHeight={currentHeight}
                    data={data.theme}
                    backgroundColor={backgroundColor}
                    headingFontColor={headingFontColor}
                    bodyFontColor={bodyFontColor}
                  />
                )
                  : JSON.stringify(Object.keys(data)) === '["branding"]' ? (
                    <Collage
                      currentHeight={currentHeight}
                      data={data.branding}
                      backgroundColor={backgroundColor}
                      headingFontColor={headingFontColor}
                      bodyFontColor={bodyFontColor}
                    />
                  )
                    : null
        ))
        }

        {
        hotelData.information[hotelData.information.length - 1]?.overview.map((data, i) => (
          <Overview
            caption={data.caption}
            heading={data.heading}
            content={data.content}
            currentHeight={currentHeight}
            ref={(el) => { overviewRef.current[i] = el; }}
          />
        ))
        }

        <div className={`overview-list ${
          currentScroll > hotelData.information.length - 1 ? 'show-overview-list' : ''
        }`}
        >
          <ul>
            {
              hotelData.information[hotelData.information.length - 1]?.overview.map((data, i) => (
                <li
                  className="overview-list-item"
                >
                  <i className={`mark ${currentScroll === i + hotelData.information.length ? 'show-mark' : ''}`} />

                  <p
                    className={`
                      micro
                      list-item-title
                      ${currentScroll === i + hotelData.information.length ? 'highlight-list-item-title' : ''}
                      ${currentScroll}
                      ${i + currentScroll}
                      `}
                    onClick={() => {
                      dispatch(detailPageScrollAction(i + hotelData.information.length));
                      setEventScrollValue((i + hotelData.information.length) * currentHeight);
                    }}
                    role="presentation"
                  >
                    {data.heading}
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="background-image">
        <div className={`overlay ${
          currentScroll > hotelData.information.length ? 'show-overlay' : ''
        }`}
        />
        <img
          src={changeBackground}
          alt=""
        />
      </div>

      <FunctionButton
        clickEvent={() => {
          dispatch(detailPageNavigationShow());
          dispatch(detailPageScrollAction(resetValue));
          setEventScrollValue(resetValue);
        }}
        icon={assetsData.icons[0].arrowUp}
        functionButtonClassName="fixed-button"
      />
    </div>
  );
}

export default TheBunkers;
