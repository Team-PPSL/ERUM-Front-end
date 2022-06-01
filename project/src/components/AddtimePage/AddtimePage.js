import './AddtimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
import React, { useState } from 'react';
import randomColor from 'randomcolor';
import { Helmet } from 'react-helmet';
import TimeTable from '../TimePage/TimeTable';
import queryString from 'query-string';

const TimePage = () => {
  // 과목 이름 상태관리
  const [subjectName, setSubjectName] = useState('');

  // 렌덤 색상 변수들
  const color1 = randomColor();
  const color2 = randomColor();
  const color3 = randomColor();
  const color4 = randomColor();

  // 과목 이름 데이터 가져오는 함수
  const getData = (subjectName) => {
    setSubjectName(subjectName);
  };

  const back_onclick = (e) => {
    window.location.href = '/';
  };

  // 현재 url에서 쿼리값 받아서 다시 라우팅
  const logout_onclick = (e) => {
    let qs = queryString.parse(window.location.search);
    console.log(Object.values(qs));
    window.location.href = `/plan?create_at=${Object.values(qs)}`;
  };

  //기준 시간
  const stdlist = [];
  for (let std = 0; std < 24; std++) {
    stdlist.push(('00' + std).slice(-2));
  }
  const stdItem = stdlist.map((num) => <div>{num}</div>);

  // cosnt onChange = () => {

  // }
  return (
    <>
      <Helmet>
        <title>ERUM-schedule</title>
      </Helmet>
      <div className="top-box">
        <div>
          <button className="calendar-button" onClick={back_onclick}>
            <BsArrowLeftCircle className="icon" size={50} />
          </button>
        </div>
        <div className="time-ERUM">
          <span>ERUM</span>
        </div>
        <div>
          <button className="login-button" onClick={logout_onclick}>
            PLANNER
          </button>
        </div>
      </div>

      <div className="container">
        <div className="first-box">
          <div className="subject-box">
            <button
              style={{
                backgroundColor: color1,
                width: '150px',
                height: '50px',
                color: 'black',
                marginBottom: '30px',
                borderRadius: '30px',
                border: 0,
                outline: 0,
              }}
            >
              <span>논리회로</span>
            </button>
            <button
              style={{
                backgroundColor: color2,
                width: '150px',
                height: '50px',
                color: 'black',
                borderRadius: '30px',
                border: 0,
                outline: 0,
              }}
            >
              <span>머신러닝</span>
            </button>
            {/* <button 
            style={{
              backgroundColor: color3,
              width: '100px',
              height: '50px',
              color: 'black',
              borderRadius: '30px',
              border: 0,
              outline: 0,
            }}
          >
            <span>과목3</span>
          </button>
          <button
            style={{
              backgroundColor: color4,
              width: '100px',
              height: '50px',
              color: 'black',
              borderRadius: '30px',
              border: 0,
              outline: 0,
            }}
          >
            <span>과목4</span>
          </button> */}
          </div>
        </div>
        <div className="timelist-box">{stdItem}</div>
        <div className="second-box">
          <TimeTable />
        </div>
        <div className="third-box">
          <div className="Addsubject-box">
            <div>오늘의 공부시간</div>
            <span style={{ margin: '0 auto' }}> 0시간</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimePage;
