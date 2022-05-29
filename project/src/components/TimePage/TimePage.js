import './TimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
import React, { createElement, useState } from 'react';
import MyModal from './Mymodal';
import randomColor from 'randomcolor';
import { Helmet } from 'react-helmet';
import TimeTable from './TimeTable';

// 박스 생성하는 함수
// function CreateDiv() {
//   const div = document.createElement('div');
//   div.innerHTML = '이것이 추가될 문장입니다.';
//   document.querySelector('#myDIV').appeadChild(div);
// }

const TimePage = () => {
  // modal창 열고 닫는 상태관리
  const [isOpen, setOpen] = useState(false);

  // 과목 이름 상태관리
  const [subjectName, setSubjectName] = useState('');

  // 렌덤 색상 변수들
  const color1 = randomColor();
  const color2 = randomColor();
  const color3 = randomColor();
  const color4 = randomColor();

  // 시간표 추가 클릭시 실행되는 함수
  const handlerClick = () => {
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

  const logout_onclick = (e) => {
    window.location.href = '/addtime';
  };

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

  // const divId = [1, 2, 3, 4, 5, 6];
  const listItem = timelist.map((id) => (
    <div
      id={id}
      style={{
        width: '67px',
        height: '30px',
        borderColor: 'black',
        borderStyle: 'solid',
        float: 'left',
      }}
    ></div>
    // <tr>
    //   <td
    //     id={id}
    //     style={{
    //       width: '67px',
    //       height: '30px',
    //       borderColor: 'black',
    //       borderStyle: 'solid',
    //       float: 'left',
    //     }}
    //   ></td>
    // </tr>
  ));

  // const divId = [1, 2, 3, 4, 5, 6];
  // const listItem = divId.map((id) => (
  //   <div
  //     id={id}
  //     style={{
  //       width: '67px',
  //       height: '30px',
  //       borderColor: 'black',
  //       borderStyle: 'solid',
  //       float: 'left',
  //     }}
  //   ></div>
  // ));

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
            실제 현황
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
          <table>{listItem}</table>
          {/* <table class="tg">
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
          </table> */}
        </div>
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
