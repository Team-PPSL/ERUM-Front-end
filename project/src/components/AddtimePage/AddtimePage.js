import React from 'react';
import './AddtimePage.css';

const AddtimePage = () => {
  const background = {
    backgroundColor: 'white',
    backgroundSize: 'cover',
  };
  return (
    <div style={background}>
      <div className="LoginTemplate">
        <div className="ERUM">ERUM</div>
        <div>
          <div className="LoginId"></div>
          <div className="LoginPassword_1"></div>
          <div className="LoginPassword_2"></div>
          <button className="LoginButton">시간표 추가</button>
        </div>
      </div>
    </div>
  );
};

export default AddtimePage;
