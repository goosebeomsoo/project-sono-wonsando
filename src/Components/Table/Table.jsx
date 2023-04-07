import React from 'react';

import TitleRow from './TitleRow';
import DataRow from './DataRow';

import hotelAndSpaceData from '../../DB/hotelAndSpace.json';

function Table() {
  return (
    <div className="chart-table">
      <TitleRow />
      <hr className="break-line" />
      <div className="data-row-container">
        {
        hotelAndSpaceData.data.map((data) => (
          <DataRow
            title={data.title}
            area={data.area}
            buildingArea={data.buildingArea}
            capacity={data.capacity}
          />
        ))
      }
      </div>
    </div>
  );
}

export default Table;
