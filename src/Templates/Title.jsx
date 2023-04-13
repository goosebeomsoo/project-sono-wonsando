import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Title({
  data,
}) {
  const titleRef = useRef();

  const [titleStyle, setTitleStyle] = useState({
    opacityValue: 1,
    fadeInValue: 12,
    spacingValue: 12,
    fadeOutValue: 0,
  });

  const currentScroll = useSelector((state) => state.detailPageScroll.currentScroll);

  useEffect(() => {
    if (currentScroll < 1) {
      setTitleStyle({
        opacityValue: 1,
        fadeInValue: 8,
        spacingValue: 14,
        fadeOutValue: 0,
      });
    }

    if (currentScroll > 0) {
      setTitleStyle({
        opacityValue: 0,
        fadeInValue: 0,
        spacingValue: 48,
        fadeOutValue: 6,
      });
    }
  }, [currentScroll]);

  return (
    <div
      className="title-template scroll-hook"
      role="presentation"
    >
      <div className="empty-box">
        <div className="scroll-hook" />
        <div className="scroll-hook" />
      </div>

      <div className="content-section" ref={titleRef}>
        <div
          className="title-content"
          style={{ opacity: titleStyle.opacityValue }}
        >
          <h2
            className="page-title heading-large"
            style={{
              filter: `blur(${titleStyle.fadeOutValue}px)`,
              letterSpacing: `${titleStyle.spacingValue}px`,
            }}
          >
            {data.title[0].title}
          </h2>
        </div>
        <div
          className="blur-box"
          style={{ backdropFilter: `blur(${titleStyle.fadeInValue}px)` }}
        />
      </div>

    </div>
  );
}

Title.propTypes = {
  data: PropTypes.objectOf.isRequired,
};
export default Title;
