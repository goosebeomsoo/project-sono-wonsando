import React from 'react';
import PropTypes from 'prop-types';

function DataRow({
  title,
  area,
  buildingArea,
  capacity,
}) {
  return (
    <div className="row data-row">
      <p className="element element-data-01 micro">
        {title || null}
      </p>
      <p className="element element-data-02 micro">
        {area}
      </p>
      <p className="element element-data-03 micro">
        {buildingArea}
      </p>
      <p className="element element-data-04 micro">
        {capacity}
      </p>
    </div>
  );
}

DataRow.propTypes = {
  title: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  buildingArea: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
};

export default DataRow;
