import React from 'react';
import PropTypes from 'prop-types';

function DataRow({
  title,
  siteArea,
  buildingArea,
  grossArea,
  roomKeys,
}) {
  return (
    <div className="row data-row">
      <p className="element element-data-01 micro">
        {title || null}
      </p>
      <p className="element element-data-02 micro">
        {siteArea}
      </p>
      <p className="element element-data-03 micro">
        {buildingArea}
      </p>
      <p className="element element-data-03 micro">
        {grossArea}
      </p>
      <p className="element element-data-04 micro">
        {roomKeys}
      </p>
    </div>
  );
}

DataRow.propTypes = {
  title: PropTypes.string.isRequired,
  siteArea: PropTypes.string.isRequired,
  buildingArea: PropTypes.string.isRequired,
  grossArea: PropTypes.string.isRequired,
  roomKeys: PropTypes.string.isRequired,
};

export default DataRow;
