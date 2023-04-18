/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  setPopupValueCurrentList,
  setPopupValueCurrentNumber,
} from '../Store/popupValueState';

function ListGallery() {
  const dispatch = useDispatch();

  const popupData = useSelector((state) => state.popupDataState.value);
  const currentList = useSelector((state) => state.popupValueState.currentList); // Navigation list
  const currentNumber = useSelector((state) => state.popupValueState.currentNumber); // Detail category number

  return (
    <div className="list-gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title sub-heading">
            GALLERY TITLE
          </h2>
          <ul className="gallery-navigation">
            {
                currentList === undefined ? null
                  : popupData?.map((item, i) => (
                    <li
                      className={`body-small-bold ${currentList === i ? 'highlight' : ''}`}
                      onClick={() => {
                        dispatch(setPopupValueCurrentList(i));

                        if (currentNumber !== undefined) {
                          dispatch(setPopupValueCurrentNumber(0));
                        }
                      }}
                      role="presentation"
                    >
                      {item.title}
                      <i className="mark" />
                    </li>
                  ))
            }
          </ul>
        </div>

        <div className="gallery-body">
          <div className="list-item-container">
            <ul className="item-numbers">
              {currentNumber === undefined ? undefined
                : popupData[currentList]?.images.map((el, n) => (
                  <li
                    className={`body-large-bold item-number ${currentNumber === n ? 'highlight' : ''}`}
                    onClick={() => {
                      dispatch(setPopupValueCurrentNumber(n));
                    }}
                    role="presentation"
                  >
                    {`0${n + 1}`}
                    <i className="mark" />
                  </li>
                ))}
            </ul>
            <h3 className="item-name sub-heading">
              {currentNumber === undefined ? undefined
                : popupData[currentList]?.images[currentNumber]?.name}
            </h3>
          </div>

          <div className="gallery-image">
            {currentNumber !== undefined
              ? <img src={process.env.PUBLIC_URL + popupData[currentList].images[currentNumber].image} alt="" />
              : currentList !== undefined ? <img src={process.env.PUBLIC_URL + popupData[currentList].image} alt="" /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListGallery;
