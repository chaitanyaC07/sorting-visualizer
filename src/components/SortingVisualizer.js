import React from "react";

import "../style/SortingVisualizer.css";

const SortingVisualizer = (props) => {
  const { dataArray } = props;
  return (
    <div className="sorting-container">
      <div className="array-container">
        {dataArray.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px` }}
          >
            {/* {value} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
