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
        {title}
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
  title: PropTypes.arrayOf.isRequired,
  area: PropTypes.arrayOf.isRequired,
  buildingArea: PropTypes.arrayOf.isRequired,
  capacity: PropTypes.arrayOf.isRequired,
};

export default DataRow;
