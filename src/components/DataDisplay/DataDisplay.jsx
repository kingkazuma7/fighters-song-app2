import React from 'react';

const DataDisplay = () => {
  const data = [
    {
      "name": "朝倉未来",
      "entranceSong": "Battle Scars",
      "image": "/images/5bd5a5ff98d12967709d9a95387d60a2342e7235_large.jpeg"
    },
    {
      "name": "朝倉海",
      "entranceSong": "Forever Young",
      "image": "/images/644a893108f33b616d32c8085756d627dab9dda4_large.jpeg"
    }
  ];

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
