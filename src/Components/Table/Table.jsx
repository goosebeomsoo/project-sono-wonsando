import React from 'react';

import TitleRow from './TitleRow';
import DataRow from './DataRow';

import chartData from '../../DB/chart.json';

function Table() {
  return (
    <div className="chart-table">
      <TitleRow />
      <hr className="break-line" />
      <div className="data-row-container">
        {
        chartData.data.map((data) => (
          <DataRow
            title={data.category}
            siteArea={data.siteArea}
            buildingArea={data.buildingArea}
            grossArea={data.grossArea}
            roomKeys={data.roomKeys}
            key={data.title}
          />
        ))
      }
      </div>
    </div>
  );
}

export default Table;
