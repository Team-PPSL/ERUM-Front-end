import React, { Component } from 'react';
import styled from 'styled-components';
import randomColor from 'randomcolor';

const TimeTable = () => {
  // 시간 테이블
  let t = 0;
  const timelist = [];
  while (t < 2400) {
    timelist.push(t);
    if ((t - 50) % 100 === 0) {
      t += 50;
    } else if (t - 50 === 0) {
      t += 50;
    } else {
      t += 10;
    }
  }
  const isStart = 600;
  const isEnd = 640;

  const listItem = timelist.map((key) => (
    <div
      key={key}
      style={{
        width: '15%',
        height: '30.5px',
        borderColor: 'black',
        borderStyle: 'solid',
        float: 'left',
        backgroundColor: key >= isStart && key <= isEnd ? 'pink' : 'white',
      }}
    ></div>
  ));

  return <>{listItem}</>;
};

export default TimeTable;
