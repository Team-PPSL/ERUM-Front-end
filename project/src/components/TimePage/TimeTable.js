import React from 'react';

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

  const listItem = timelist.map((id) => (
    <div
      key={id}
      style={{
        width: '15%',
        height: '30.5px',
        borderColor: 'black',
        borderStyle: 'solid',
        float: 'left',
      }}
    ></div>
  ));

  return <>{listItem}</>;
};

export default TimeTable;
