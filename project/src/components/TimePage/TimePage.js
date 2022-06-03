import './TimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
import React, { createElement, useEffect, useState } from 'react';
import MyModal from './Mymodal';
import randomColor from 'randomcolor';
import { Helmet } from 'react-helmet';
import TimeTable from './TimeTable';
import queryString from 'query-string';

// 더미 데이터
const DataList = [
  {
    subject: '수학',
    starttime: 110,
    endtime: 120,
    color: 1,
    created_at: '20220601',
  },
  {
    subject: '국어',
    starttime: 240,
    endtime: 410,
    color: 2,
    created_at: '20220601',
  },
  {
    subject: '과학',
    starttime: 800,
    endtime: 900,
    color: 3,
    created_at: '20220601',
  },
];

const TimePage = () => {
  // modal창 열고 닫는 상태관리
  const [isOpen, setOpen] = useState(false);

  // 과목 이름 상태관리
  const [subjectName, setSubjectName] = useState('');

  // 렌덤 색상 변수들
  const color = [randomColor(), randomColor(), randomColor()];

  const NameList = [];

  // 시간표 추가 클릭시 실행되는 함수
  const handlerClick = (e) => {
    setOpen(true);
  };

  // modal창에서 뒤로 가기 버튼 클릭 시 실행되는 함수
  const handleModalCancel = () => {
    setOpen(false);
  };

  // modal창에서 제출 버튼 클릭 시 실행되는 함수
  const handleModalSubmit = () => {
    setOpen(false);
  };

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
    window.location.href = `/report?created_at=${Object.values(qs)}`;
  };

  //기준 시간
  const stdlist = [];
  for (let std = 0; std < 24; std++) {
    stdlist.push(('00' + std).slice(-2));
  }
  const stdItem = stdlist.map((num) => <div key={num}>{num}</div>);

  // 시간 리스트
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

  // 시간표 구성 div
  let i = 0;
  const listItem = timelist.map((idx) => (
    <div
      index={idx}
      style={{
        width: '15%',
        height: '30.5px',
        borderColor: 'black',
        borderStyle: 'solid',
        float: 'left',
        color:
          i < DataList.length &&
          idx >= DataList[i].starttime &&
          idx <= DataList[i].endtime
            ? color[i]
            : 'white',
        backgroundColor:
          i < DataList.length &&
          idx >= DataList[i].starttime &&
          idx <= DataList[i].endtime
            ? color[i]
            : 'white',
      }}
    >
      {i < DataList.length && idx === DataList[i].endtime ? (i += 1) : null}
    </div>
  ));

  const NameItem = NameList.map((name) => (
    <button
      style={{
        width: '150px',
        height: '50px',
        color: 'black',
        marginBottom: '30px',
        borderRadius: '30px',
        border: 0,
        outline: 0,
        backgroundColor: 'pink',
      }}
    >
      name
    </button>
  ));

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
            REPORT
          </button>
        </div>
      </div>

      <div className="container">
        <div className="first-box">
          <div className="subject-box">
            {/* <button
              style={{
                backgroundColor: color[0],
                width: '150px',
                height: '50px',
                color: 'black',
                marginBottom: '30px',
                borderRadius: '30px',
                border: 0,
                outline: 0,
              }}
            >
              <span>{DataList[0].subject}</span>
            </button>
            <button
              style={{
                backgroundColor: color[1],
                width: '150px',
                height: '50px',
                color: 'black',
                marginBottom: '30px',
                borderRadius: '30px',
                border: 0,
                outline: 0,
              }}
            >
              <span>{DataList[1].subject}</span>
            </button>
            <button
              style={{
                backgroundColor: color[2],
                width: '150px',
                height: '50px',
                color: 'black',
                marginBottom: '30px',
                borderRadius: '30px',
                border: 0,
                outline: 0,
              }}
            >
              <span>{DataList[2].subject}</span>
            </button> */}
          </div>
        </div>
        <div className="timelist-box">{stdItem}</div>
        <div className="second-box">{listItem}</div>
        <div className="third-box">
          <button className="Addsubject-button" onClick={handlerClick}>
            시간표 추가
          </button>
          <MyModal
            isOpen={isOpen}
            onSubmit={handleModalSubmit}
            onCancel={handleModalCancel}
            getData={getData}
          />
        </div>
      </div>
    </>
  );
};

export default TimePage;
