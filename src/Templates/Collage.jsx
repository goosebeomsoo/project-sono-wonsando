import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

function Collage({
  data,
  currentHeight,
  backgroundColor,
  headingFontColor,
  bodyFontColor,
}) {
  const collageRef = useRef();

  const currentScroll = useSelector((state) => state.detailPageScroll.currentScroll);

  const [collageStyle, setCollageStyle] = useState({
    opacityValue: 0,
    topValue: -12,
  });

  useEffect(() => {
    if (collageRef.current.offsetTop === currentScroll * currentHeight) {
      setTimeout(() => {
        setCollageStyle({
          opacityValue: 1,
          topValue: 0,
        });
      }, 300);
    }
    if (collageRef.current.offsetTop !== currentScroll * currentHeight) {
      setCollageStyle({
        opacityValue: 0,
        topValue: -12,
      });
    }
  }, [setCollageStyle, currentScroll, currentHeight]);
  return (
    <div
      className={`collage-template collage-template-0${data[0]?.gallery?.length} scroll-hook`}
      style={{ background: `#${backgroundColor}` }}
      ref={collageRef}
    >
      <div
        className="caption body-medium"
        style={{
          color: `#${bodyFontColor}`,
        }}
      >
        {data[0]?.caption}
      </div>
      <div className="body-section">
        <div
          className="header-content"
          style={{
            left: `${collageStyle.topValue}px`,
            opacity: `${collageStyle.opacityValue}`,
          }}
        >
          <h2
            className="heading-large"
            style={{ color: `#${headingFontColor}` }}
          >
            {data[0]?.heading ? data[0]?.heading : null}
          </h2>
        </div>
        <div
          className="body-content"
          style={{
            opacity: `${collageStyle.opacityValue}`,
          }}
        >
          <p
            className="body-small"
            style={{
              color: `#${bodyFontColor}`,
            }}
          >
            {data[0]?.content ? data[0]?.content : null}
          </p>
        </div>
      </div>
      <div className="gallery-section">
        {
        data[0]?.gallery?.map((el) => (
          <div className="image-content">
            <img src={process.env.PUBLIC_URL + el.image} alt={data[0]?.caption} />
          </div>
        ))
      }
      </div>
    </div>
  );
}
Collage.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  currentHeight: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  headingFontColor: PropTypes.string.isRequired,
  bodyFontColor: PropTypes.string.isRequired,
};

export default Collage;
