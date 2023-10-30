import React from 'react';
import data from "../../common/data.json";

const DataDisplay = () => {
  

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.entranceSong}</p>
          <img src={item.image} alt={item.name} width={50} />
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
