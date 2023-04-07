import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import hotelAndSpaceData from './DB/hotelAndSpace.json';

import Intro from './Pages/Intro';
import Video from './Pages/Video';
import WonsandoBrandStory from './Pages/WonsandoBrandStory';
import Masterplan from './Pages/Masterplan';

import PrivateRoutes from './Router/PrivateRoutes';
import PublicRoutes from './Router/PublicRoutes';

import HotelDetailPage from './Pages/HotelDetailPage';

import Confidential from './Components/Confidential';

import './_style.scss';

function App() {
  const location = useLocation();
  return (
    <div className="main">
      <TransitionGroup>
        <CSSTransition
          classNames="page-fade"
          timeout={500}
          key={location.pathname}
        >
          <Routes location={location}>
            <Route element={<PublicRoutes />}>
              <Route exact path="/" element={<Intro />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/video" element={<Video />} />
              <Route path="/brand-story" element={<WonsandoBrandStory />} />
              <Route path="/masterplan/" element={<Masterplan />} />
              {
              hotelAndSpaceData.data.map((data) => (
                <Route path={`/masterplan${data.anchor}`} element={<HotelDetailPage />} />
              ))
            }
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Confidential />
    </div>
  );
}

export default App;
