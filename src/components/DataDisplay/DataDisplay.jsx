import React from 'react';
import image1 from '../../assets/images/5bd5a5ff98d12967709d9a95387d60a2342e7235_large.jpeg';
import image2 from '../../assets/images/644a893108f33b616d32c8085756d627dab9dda4_large.jpeg';

const DataDisplay = () => {
  const data = [
    {
      "name": "朝倉未来",
      "entranceSong": "Battle Scars",
      "image": image1
    },
    {
      "name": "朝倉海",
      "entranceSong": "Forever Young",
      "image": image2
    }
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.entranceSong}</p>
          <p><img src={item.image} alt={item.name} /></p>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
