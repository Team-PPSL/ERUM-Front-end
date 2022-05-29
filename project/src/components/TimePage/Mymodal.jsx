import React, { useState } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';

import ReactModal from 'react-modal';
import './Mymodal.css';

// submit 하면 인스턴스 변수에 저장하는 클래스를 만들어서 거기서 데이터를 불러오는 형식으로 사용

const Mymodal = ({ isOpen, onSubmit, onCancel, getData }) => {
  //-------------------------------//

  // 시간 선택 변수, 함수
  const [Selected1, setSelected1] = useState('');
  const [Selected2, setSelected2] = useState('');
  const [Selected3, setSelected3] = useState('');
  const [Selected4, setSelected4] = useState('');

  // 클릭시 제출
  const handleClickSubmit = (e) => {
    onSubmit();
    getData('수학');
  };

  // 클릭시 뒤로 가기
  const handleClickCancel = () => {
    onCancel();
  };

  // 박스 스타일
  const MiddleBox = {
    width: '300px',
    margin: '0 auto',
  };

  const InputStyle = {
    width: '265px',
    height: '70px',
    borderRadius: '40px',
    borderStyle: 'none',
    margin: '0 0 30px',
    fontSize: '25px',
    paddingLeft: '35px',
  };
  // ----option 테스트------//

  const HourOptions = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  const MinuteOptions = ['00', '10', '20', '30', '40', '50'];

  const handleSelect1 = (e) => {
    setSelected1(e.target.value);
  };
  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
  };
  const handleSelect3 = (e) => {
    setSelected3(e.target.value);
  };
  const handleSelect4 = (e) => {
    setSelected4(e.target.value);
  };
  //---------------------//

  return (
    <ReactModal
      style={{
        content: {
          width: '400px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f0faee',
          borderRadius: '50px',
          borderStyle: 'none',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        },
      }}
      isOpen={isOpen}
    >
      <form>
        <div
          style={{
            height: '80px',
          }}
        >
          <button
            onClick={handleClickCancel}
            style={{
              borderStyle: 'none',
              backgroundColor: '#f0faee',
            }}
          >
            <BsArrowLeftCircle size={50} color={'#17a934'} />
          </button>
        </div>
        <div style={MiddleBox}>
          <input
            name="SubjectName"
            type="text"
            style={InputStyle}
            placeholder={'과목명'}
          />
          <div className="select-time">
            <div>
              시작
              <select onChange={handleSelect1} value={Selected1}>
                {HourOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select onChange={handleSelect2} value={Selected2}>
                {MinuteOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="select-time">
            <div>
              종료
              <select onChange={handleSelect3} value={Selected3}>
                {HourOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select onChange={handleSelect4} value={Selected4}>
                {MinuteOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="bottom-box">
          <button
            className="subject-button"
            type="submit"
            onClick={handleClickSubmit}
          >
            시간표 추가
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default Mymodal;
