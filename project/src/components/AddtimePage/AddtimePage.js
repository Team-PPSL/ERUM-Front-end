import './AddtimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
import React, { useState } from 'react';
import randomColor from 'randomcolor';
import { Helmet } from 'react-helmet';

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

  const logout_onclick = (e) => {
    window.location.href = '/time';
  };

  const number = 0;

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
            계획표
          </button>
        </div>
      </div>

      <div className="container">
        <div className="first-box">
          <button
            style={{
              backgroundColor: color1,
              width: '100px',
              height: '50px',
              color: 'black',
              borderRadius: '30px',
              border: 0,
              outline: 0,
            }}
          >
            <span>{subjectName}</span>
          </button>
          <button
            style={{
              backgroundColor: color2,
              width: '100px',
              height: '50px',
              color: 'black',
              borderRadius: '30px',
              border: 0,
              outline: 0,
            }}
          >
            <span>과목2</span>
          </button>
          <button
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
          </button>
        </div>
        <div className="second-box">
          <table class="tg">
            <thead>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
              <tr>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
                <td class="time-box"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="third-box">
          <div className="Addsubject-box">
            <div>오늘의 공부시간</div>
            <span>0시간</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimePage;
