import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// PAGES
import Intro from './Pages/Intro';
import Video from './Pages/Video';
import WonsandoBrandStory from './Pages/WonsandoBrandStory';
import Masterplan from './Pages/Masterplan';
import HotelDetailPage from './Pages/HotelDetailPage';

// COMPONENTS
import Confidential from './Components/Confidential';

// ROUTES
import PrivateRoutes from './Router/PrivateRoutes';
import PublicRoutes from './Router/PublicRoutes';

// DB
import hotelAndSpaceData from './DB/hotelAndSpace.json';

// SCSS
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
              <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Intro />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path={`${process.env.PUBLIC_URL}/video`} element={<Video />} />
              <Route path={`${process.env.PUBLIC_URL}/brand-story`} element={<WonsandoBrandStory />} />
              <Route path={`${process.env.PUBLIC_URL}/masterplan`} element={<Masterplan />} />
              {
                hotelAndSpaceData.data.map((data) => (
                  <Route
                    path={`${process.env.PUBLIC_URL}/masterplan${data.anchor}`}
                    element={<HotelDetailPage />}
                    key={data.anchor}
                  />
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
