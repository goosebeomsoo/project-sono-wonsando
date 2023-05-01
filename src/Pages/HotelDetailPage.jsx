/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, {
  useState, useRef, useEffect,
} from 'react';

import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { detailPageNavigationShow } from '../Store/detailPageNavigationState';
import { detailPageScrollInc, detailPageScrollDec, detailPageScrollAction } from '../Store/detailPageScroll';

// PAGES
import Popup from './Popup';

// TEMPLATES
import FullBackground from '../Templates/FullBackground';
import Title from '../Templates/Title';
import Collage from '../Templates/Collage';
import Overview from '../Templates/Overview';
import DetailPageNavigation from '../Templates/DetailPageNavigation';

// COMPONENTS
import FunctionButton from '../Components/FunctionButton';
import PopupDetail from '../Components/PopupDetail';

// DATA
import assetsData from '../DB/assets.json';
import ImageBackground from '../Templates/ImageBackground';

function HotelDetailPage() {
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
  console.log(currentScroll);

  // useRef
  const pageRef = useRef();
  const containerRef = useRef();
  const overviewRef = useRef([]);

  // useState
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
  const [eventScrollValue, setEventScrollValue] = useState(resetValue);
  const [changeBackground, setChangeBackground] = useState();

  const targetScrollValue = currentScroll * currentHeight;
  const hotelDataLength = hotelData.information.length;

  const [currentOverviewValue, setCurrentOverviewValue] = useState(0);

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

  useEffect(() => {
    for (let i = 0; i < hotelData.information[hotelDataLength - 1].overview.length; i += 1) {
      if (currentScroll - hotelDataLength === i) {
        setCurrentOverviewValue(i);
      }
    }
  }, [currentOverviewValue, setCurrentOverviewValue, currentScroll, hotelDataLength, hotelData.information]);

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
    for (let i = 0; i < hotelData.information[hotelDataLength - 1].overview.length; i += 1) {
      if ((i + hotelDataLength) * currentHeight === currentScroll * currentHeight) {
        overviewRef.current[i].classList.add('current-page');
      } else {
        overviewRef.current[i].classList.remove('current-page');
      }
    }
  });

  // Change background Image
  useEffect(() => {
    const backgroundData = hotelData.information[0].title[0];

    if (currentScroll < hotelDataLength) {
      setChangeBackground(backgroundData.background);
    } else if (currentScroll > hotelDataLength - 2) {
      setChangeBackground(backgroundData.bgProfile);
    }
  }, [setChangeBackground, currentScroll, hotelData.information, hotelDataLength, currentOverviewValue]);

  // Change background Image
  useEffect(() => {
    const backgroundDataType = hotelData.information[hotelDataLength - 1]?.overview[currentOverviewValue].type;
    const backgroundData = hotelData.information[0].title[0];

    if (backgroundDataType === 'overview') {
      setChangeBackground(backgroundData.bgOverview);
    } else if (backgroundDataType === 'accommodation') {
      setChangeBackground(backgroundData.bgAccommodation);
    } else if (backgroundDataType === 'public') {
      setChangeBackground(backgroundData.bgPublic);
    } else if (backgroundDataType === 'floor-plan') {
      setChangeBackground(backgroundData.bgFloorPlan);
    } else if (backgroundDataType === 'section-view') {
      setChangeBackground(backgroundData.bgSectionView);
    } else if (backgroundDataType === 'case01') {
      setChangeBackground(backgroundData.bgCase01);
    } else if (backgroundDataType === 'case02') {
      setChangeBackground(backgroundData.bgCase02);
    }
  }, [hotelData, currentOverviewValue, hotelDataLength]);

  return (
    <div
      className="hotel-detail-page"
      ref={pageRef}
    >
      <PopupDetail
        hotelData={hotelData.information[currentScroll]}
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
            : JSON.stringify(Object.keys(data)) === '["brand"]' ? (
              <ImageBackground data={data} currentScroll={currentScroll} hotelDataLength={hotelDataLength} />
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
        hotelData.information[hotelDataLength - 1]?.overview.map((data, i) => (
          <Overview
            caption={data.caption}
            heading={data.heading}
            content={data.content}
            highlight={data.highlight}
            data={data.gallery}
            theme={data.theme}
            ref={(el) => { overviewRef.current[i] = el; }}
          />
        ))
        }

        <div className={`overview-list ${
          currentScroll > hotelDataLength - 1 ? 'show-overview-list' : ''
        }`}
        >
          <ul>
            {
              hotelData.information[hotelDataLength - 1]?.overview.map((data, i) => (
                <li
                  className="overview-list-item"
                >
                  <i className={`mark ${currentScroll === i + hotelDataLength ? 'show-mark' : ''}`} />

                  <p
                    className={`
                      micro
                      list-item-title
                      ${currentScroll === i + hotelDataLength ? 'highlight-list-item-title' : ''}
                      `}
                    onClick={() => {
                      setCurrentOverviewValue(i);
                      dispatch(detailPageScrollAction(i + hotelDataLength));
                      setEventScrollValue((i + hotelDataLength) * currentHeight);
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
          currentScroll > hotelDataLength ? 'show-overlay' : ''
        }`}
        />
        <TransitionGroup>
          <CSSTransition
            key={changeBackground}
            timeout={700}
            classNames="fade"
          >
            <img src={process.env.PUBLIC_URL + changeBackground} alt="" />
          </CSSTransition>
        </TransitionGroup>
      </div>
      <FunctionButton
        clickEvent={() => {
          dispatch(detailPageNavigationShow());
          dispatch(detailPageScrollAction(resetValue));
        }}
        icon={assetsData.icons[0].arrowUp}
        functionButtonClassName="fixed-button"
      />
      <Popup />
    </div>
  );
}

export default HotelDetailPage;
