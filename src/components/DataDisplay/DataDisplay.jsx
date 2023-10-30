import React from 'react';

const DataDisplay = () => {
  const data = [
    {
      "name": "朝倉未来",
      "entranceSong": "Battle Scars",
      "images": ""
    },
    {
      "name": "朝倉海",
      "entranceSong": "Forever Young",
      "images": ""
    }
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.entranceSong}</p>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
