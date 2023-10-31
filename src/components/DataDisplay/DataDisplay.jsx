import React from 'react';
import data from "../../common/data.json";
import { Card, CardContent, Typography } from '@mui/material';

const DataDisplay = () => {
  

  return (
    <div>
      {data.map((item, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body2">入場曲： {item.entranceSong}</Typography>
            <Typography>階級： {item.class}級</Typography>
            <Typography>所属： {item.team}</Typography>
            <img src={item.image} alt={item.name} width={50} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DataDisplay;
