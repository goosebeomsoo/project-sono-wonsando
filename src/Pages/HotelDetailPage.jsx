/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, {
  useState, useRef, useEffect,
} from 'react';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { detailPageNavigationShow } from '../Store/detailPageNavigationState';
import { detailPageScrollInc, detailPageScrollDec, detailPageScrollAction } from '../Store/detailPageScroll';

// COMPONENTS
import FunctionButton from '../Components/FunctionButton';
import RouterButton from '../Components/RouterButton';

// TEMPLATES
import FullBackground from '../Templates/FullBackground';
import Title from '../Templates/Title';
import Collage from '../Templates/Collage';
import Overview from '../Templates/Overview';
import DetailPageNavigation from '../Templates/DetailPageNavigation';

// DATA
import theBunkersData from '../DB/HotelAndSpace/theBunkersData.json';
import assetsData from '../DB/assets.json';

function TheBunkers() {
  // REDUX
  const dispatch = useDispatch();
  const currentScroll = useSelector((state) => state.detailPageScroll.currentScroll);

  // useRef
  const pageRef = useRef();
  const containerRef = useRef();
  const overviewRef = useRef([]);

  // useState
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
  const [eventScrollValue, setEventScrollValue] = useState();

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
    for (let i = 0; i < theBunkersData.information.length; i += 1) {
      if ((i + theBunkersData.information.length) * currentHeight <= currentScroll * currentHeight) {
        overviewRef.current[i].classList.add('current-page');
      } else {
        overviewRef.current[i].classList.remove('current-page');
      }
    }
  });

  return (
    <div
      className="the-bunkers-page"
      ref={pageRef}
    >
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
        data={theBunkersData.information}
        setEventScrollValue={setEventScrollValue}
        eventScrollValue={eventScrollValue}
      />

      <div className="container" ref={containerRef}>
        {
        theBunkersData.information.map((data) => (
          JSON.stringify(Object.keys(data)) === '["title"]' ? (
            <Title
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
                />
              )
                : JSON.stringify(Object.keys(data)) === '["theme"]' ? (
                  <Collage
                    currentHeight={currentHeight}
                    data={data.theme}
                  />
                )
                  : JSON.stringify(Object.keys(data)) === '["branding"]' ? (
                    <Collage
                      currentHeight={currentHeight}
                      data={data.branding}
                    />
                  )
                    : null
        ))
        }

        {
        theBunkersData.information[theBunkersData.information.length - 1]?.overview.map((data, i) => (
          <Overview
            caption={data.caption}
            heading={data.heading}
            content={data.content}
            currentHeight={currentHeight}
            ref={(el) => { overviewRef.current[i] = el; }}
          />
        ))
        }
      </div>

      <div className="background-image">
        <div className={`overlay ${
          currentScroll > theBunkersData.information.length ? 'show-overlay' : ''
        }`}
        />
        <img
          src={
            currentScroll < theBunkersData.information.length - 1
              ? process.env.PUBLIC_URL + theBunkersData.information[0].title[0].background
              : process.env.PUBLIC_URL + theBunkersData.information[0].title[0].overviewBackground
              }
          alt=""
        />
      </div>

      <FunctionButton
        clickEvent={() => {
          dispatch(detailPageNavigationShow());
          dispatch(detailPageScrollAction(0));
          setEventScrollValue(0);
        }}
        icon={assetsData.icons[0].arrowUp}
        functionButtonClassName="fixed-button"
      />
    </div>
  );
}

export default TheBunkers;
