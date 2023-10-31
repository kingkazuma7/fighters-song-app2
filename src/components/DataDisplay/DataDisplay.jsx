import React, { useState } from 'react';
import data from "../../common/data.json";
import { Card, CardContent, Typography } from '@mui/material';

const DataDisplay = () => {
  const [selectedClass, setSelectedClass] = useState(""); // 階級の状態変数
  const [selectedTeam, setSelectedTeam] = useState(""); // 所属の状態変数
  
  const filteredData = data.filter(item =>
    (selectedClass === "" || item.class === selectedClass) &&
    (selectedTeam === "" || item.team === selectedTeam)
  );
  
  const classes = [...new Set(data.map(item => item.class))];
  const teams = [...new Set(data.map(item => item.team))];
  
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    console.log(e.target.value);
  }
  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
    console.log(e.target.value);
  }
  const resetFilters = () => {
    setSelectedClass("");
    setSelectedTeam("");
    console.log('リセット');
  }

  return (
    <div>
      {/* filter */}
      <select value={selectedClass} onChange={handleClassChange}>
        <option value="">階級で絞り込み</option>
        {classes.map(className => (
          <option key={className} value={className}>{className}</option>
        ))}
      </select>
      <select value={selectedTeam} onChange={handleTeamChange}>
        <option value="">チームで絞り込み</option>
        {teams.map(teamName => (
          <option key={teamName} value={teamName}>{teamName}</option>
        ))}
      </select>
      <button onClick={resetFilters}>リセット</button>
      
      {filteredData.map((item, index) => (
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
