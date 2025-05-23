import '../../styles/AddtimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
import React, { useState } from 'react';
import randomColor from 'randomcolor';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import axios from 'axios';
import AddtimeList from './AddtimeList';
import styled from 'styled-components';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// 더미 데이터
const DataList = [
  {
    subject: '수학',
    starttime: 110,
    endtime: 120,
    drowsiness: 0,
    color: 1,
    created_at: '20220601',
  },
  {
    subject: '국어',
    starttime: 240,
    endtime: 410,
    drowsiness: 0,
    color: 2,
    created_at: '20220601',
  },
  {
    subject: '과학',
    starttime: 410,
    endtime: 600,
    drowsiness: 0,
    color: 3,
    created_at: '20220601',
  },
  {
    subject: '국어',
    starttime: 1300,
    endtime: 1420,
    drowsiness: 0,
    color: 4,
    created_at: '20220601',
  },
  {
    subject: '국어',
    starttime: 1500,
    endtime: 1600,
    drowsiness: 0,
    color: 5,
    created_at: '20220601',
  },
  {
    subject: '논리회로',
    starttime: 1910,
    endtime: 2230,
    drowsiness: 0,
    color: 6,
    created_at: '20220601',
  },
];

const AddTimePage = () => {
  // 데이터 받아오기
  const [Data, setData] = useState([]);
  // const [subject, setsubject] = useState('');
  // const [starttime, setStarttime] = useState(0);
  // const [endtime, setEndtime] = useState(0);
  // const [createAt, setCreatedAt] = useState(0);

  // 현재 쿼리 스티링 받아오기
  let qs = queryString.parse(window.location.search);

  // 과목 이름 상태관리
  const [subjectName, setSubjectName] = useState('');

  // 렌덤 색상 변수들
  // const color = [randomColor(), randomColor(), randomColor(), randomColor()];
  const color = [
    '#ffafb0',
    '#fdd0ac',
    '#fdfa87',
    '#bee9b4',
    '#aee4ff',
    '#caa6fe',
  ];

  // 현재 url에서 쿼리값 받아서 다시 라우팅
  const logout_onclick = (e) => {
    // let qs = queryString.parse(window.location.search);
    // console.log(Object.values(qs));
    window.location.href = `/plan?created_at=${Object.values(qs)}`;
  };

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

  // 현재 날짜정보 get해와서 데이터 가져오기
  // axios
  //   .get(`http://127.0.0.1:8000/report?created_at=${Object.values(qs)}`)
  //   .then((response) => {
  //     setData(DataList);
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(() => {
  //     // always executed
  //   });

  // 시간표 구성 div
  let i = 0;
  const listItem = timelist.map((key) => (
    <div
      key={key}
      style={{
        width: '15%',
        height: '30.5px',
        borderColor: 'black',
        borderStyle: 'solid',
        float: 'left',
        color:
          i < Data.length &&
          key >= Data[i].starttime &&
          key < Data[i].endtime &&
          Data[i].drowsiness === 0
            ? color[i]
            : 'white',
        backgroundColor:
          i < Data.length &&
          key >= Data[i].starttime &&
          key < Data[i].endtime &&
          Data[i].drowsiness === 0
            ? color[i]
            : 'white',
      }}
    >
      {i < Data.length && key === Data[i].endtime ? (i += 1) : null}
    </div>
  ));

  // 과목 이름 데이터 가져오는 함수
  const getData = (subjectName) => {
    setSubjectName(subjectName);
  };

  const back_onclick = (e) => {
    window.location.href = '/';
  };

  //기준 시간
  const stdlist = [];
  for (let std = 0; std < 24; std++) {
    stdlist.push(('00' + std).slice(-2));
  }
  const stdItem = stdlist.map((key) => <div key={key}>{key}</div>);

  // 총 공부시간
  const number = 0;

const [T, setT] = useState(0);
const [H, setH] = useState(0);
const [M, setM] = useState(0);
const [S, setS] = useState(0);

  const onClick = (e) => {
    // setData(DataList);
    axios
      .get(`http://127.0.0.1:8000/report?created_at=${Object.values(qs)}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

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
              <span>논리회로</span>
            </button>
            <button
              style={{
                backgroundColor: color[1],
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
            */}
            <AddtimeList users={Data} />
          </div>
        </div>
        <div className="timelist-box">{stdItem}</div>
        {/* 시간표 나타내는 박스 */}
        <div className="second-box">{listItem}</div>
        <div className="third-box">
          <div className="Addsubject-box">
            <button className="test-button1" onClick={onClick}>
              데이터 불러오기
            </button>
            <div>오늘의 공부시간</div>
            <span style={{ margin: '0 auto' }}>{i} 시간</span>
            <div>오늘의 졸음시간</div>
            <span style={{ margin: '0 auto' }}>
              0시간 12분 0초
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTimePage;

