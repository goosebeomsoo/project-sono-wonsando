/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  setListGalleryCurrentNumber,
  setListGalleryCurrentList,
} from '../Store/listGalleryValueState';
import { setPopupStateFalse } from '../Store/popupState';
import FunctionButton from '../Components/FunctionButton';
import assetsData from '../DB/assets.json';

function ListGallery() {
  const dispatch = useDispatch();

  const popupData = useSelector((state) => state.popupDataState.value);
  const currentList = useSelector((state) => state.listGalleryValueState.currentList); // Navigation list
  const currentNumber = useSelector((state) => state.listGalleryValueState.currentNumber); // Detail category number

  return (
    <div className="list-gallery">
      <FunctionButton
        icon={assetsData.icons[0].arrowLeft}
        functionButtonClassName="close-button"
        clickEvent={() => {
          dispatch(setListGalleryCurrentList(undefined));
          dispatch(setListGalleryCurrentNumber(undefined));
          dispatch(setPopupStateFalse());
        }}
      />
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
                      className={`micro ${currentList === i ? 'highlight' : ''}`}
                      onClick={() => {
                        dispatch(setListGalleryCurrentList(i));

                        if (currentNumber !== undefined) {
                          dispatch(setListGalleryCurrentNumber(0));
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
          {
            currentNumber === undefined ? null
              : (
                <div className="list-item-container">
                  <ul className="item-numbers">
                    {currentNumber === undefined ? undefined
                      : popupData[currentList]?.images.map((el, n) => (
                        <li
                          className={`body-large-bold item-number ${currentNumber === n ? 'highlight' : ''}`}
                          onClick={() => {
                            dispatch(setListGalleryCurrentNumber(n));
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
              )
          }

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
