/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  setListGalleryCurrentNumber,
  setListGalleryCurrentList,
} from '../Store/listGalleryValueState';
import { setPopupStateFalse } from '../Store/popupState';
import FunctionButton from '../Components/FunctionButton';
import assetsData from '../DB/assets.json';

function ListGallery() {
  const dispatch = useDispatch();

  const currentList = useSelector((state) => state.listGalleryValueState.currentList); // Navigation list
  const currentNumber = useSelector((state) => state.listGalleryValueState.currentNumber); // Detail category number
  const popupData = useSelector((state) => state.popupDataState.value);
  const dataLength = popupData.length;

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
          {
              currentList === undefined ? null
                : (
                  <div className="gallery-navigation">
                    <FunctionButton
                      icon={assetsData.icons[0].arrowUp}
                      functionButtonClassName="dec-button button"
                      clickEvent={() => {
                        if (currentNumber !== undefined) {
                          dispatch(setListGalleryCurrentNumber(0));
                        }

                        if (currentList > 1) {
                          dispatch(setListGalleryCurrentList(currentList - 1));
                        } else {
                          dispatch(setListGalleryCurrentList(0));
                        }
                      }}
                    />
                    <div className="pager-container">
                      {
                        currentNumber === undefined
                          ? (
                            <p>
                              {currentList + 1}
                            </p>
                          )
                          : popupData.map((data, i) => (
                            <p
                              className={currentList === i ? 'focus body-small-bold' : 'body-small'}
                              onClick={() => {
                                dispatch(setListGalleryCurrentList(i));
                                dispatch(setListGalleryCurrentNumber(0));
                              }}
                              role="presentation"
                            >
                              {data.title}
                            </p>
                          ))
                      }
                    </div>
                    <FunctionButton
                      icon={assetsData.icons[0].arrowDown}
                      functionButtonClassName="inc-button button"
                      clickEvent={() => {
                        if (currentNumber !== undefined) {
                          dispatch(setListGalleryCurrentNumber(0));
                        }

                        if (currentList < dataLength - 1) {
                          dispatch(setListGalleryCurrentList(currentList + 1));
                        } else {
                          dispatch(setListGalleryCurrentList(dataLength - 1));
                        }
                      }}
                    />
                    {
                      currentNumber === undefined ? null
                        : (
                          <div className="pager">
                            <FunctionButton
                              icon={assetsData.icons[0].arrowLeft}
                              functionButtonClassName="dec-button button"
                              clickEvent={() => {
                                if (currentNumber > 1) {
                                  dispatch(setListGalleryCurrentNumber(currentNumber - 1));
                                } else {
                                  dispatch(setListGalleryCurrentNumber(0));
                                }
                              }}
                            />
                            <FunctionButton
                              icon={assetsData.icons[0].arrowRight}
                              functionButtonClassName="inc-button button"
                              clickEvent={() => {
                                if (currentNumber < popupData[currentList].images.length - 1) {
                                  dispatch(setListGalleryCurrentNumber(currentNumber + 1));
                                } else {
                                  dispatch(setListGalleryCurrentNumber(popupData[currentList].images.length - 1));
                                }
                              }}
                            />
                          </div>
                        )
                    }
                  </div>
                )
            }
        </div>

        <div className="gallery-image">
          <div className="copy-content">
            <p
              className="image-caption heading-body-large"
              style={{
                color:
                  currentNumber !== undefined
                    ? popupData[currentList].images?.[currentNumber].color : currentList !== undefined ? popupData[currentList].color
                      : 'black',
              }}
            >
              {
                currentNumber !== undefined
                  ? popupData[currentList].images?.[currentNumber].caption : currentList !== undefined ? popupData[currentList].caption : null
                }
            </p>
            <h2
              className="image-title heading-large"
              style={{
                color:
                  currentNumber !== undefined
                    ? popupData[currentList].images?.[currentNumber].color : currentList !== undefined ? popupData[currentList].color
                      : 'black',
              }}
            >
              {
                currentNumber !== undefined
                  ? popupData[currentList].images?.[currentNumber].title : currentList !== undefined ? popupData[currentList].title : null
                }
            </h2>
            <h3
              className="image-sub-title heading-small"
              style={{
                color:
                  currentNumber !== undefined
                    ? popupData[currentList].images?.[currentNumber].color : currentList !== undefined ? popupData[currentList].color
                      : 'black',
              }}
            >
              {
                currentNumber !== undefined
                  ? popupData[currentList].images?.[currentNumber].subTitle : currentList !== undefined ? popupData[currentList].subTitle : null
                }
            </h3>
            <p
              className="image-desc body-medium"
              style={{
                color:
                  currentNumber !== undefined
                    ? popupData[currentList].images?.[currentNumber].color : currentList !== undefined ? popupData[currentList].color
                      : 'black',
              }}
            >
              {
                currentNumber !== undefined
                  ? popupData[currentList].images?.[currentNumber].desc : currentList !== undefined ? popupData[currentList].desc : null
                }
            </p>
          </div>
          {currentNumber === undefined
            ? null
            : (popupData[currentList].images[currentNumber].video
              ? (
                <video loop autoPlay muted>
                  <source src={process.env.PUBLIC_URL + popupData[currentList].images[currentNumber].video} type="video/mp4" />
                </video>
              )
              : <img src={process.env.PUBLIC_URL + popupData[currentList].images[currentNumber].image} alt="" />
            )}
          {currentList === undefined
            ? null
            : (popupData[currentList].video
              ? (
                <video loop autoPlay muted>
                  <source src={process.env.PUBLIC_URL + popupData[currentList].video} type="video/mp4" />
                </video>
              ) : <img src={process.env.PUBLIC_URL + popupData[currentList].image} alt="" />
            )}
        </div>

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
                          {n + 1}
                          <i className="mark" />
                        </li>
                      ))}
                  </ul>
                  {/* <h3 className="item-name sub-heading">
                    {currentNumber === undefined ? undefined
                      : popupData[currentList]?.images[currentNumber]?.name}
                    </h3> */}
                </div>
              )
          }
      </div>
    </div>
  );
}

export default ListGallery;
