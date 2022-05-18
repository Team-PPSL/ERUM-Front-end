import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

import { BsArrowLeftCircle } from 'react-icons/bs';
import ReactModal from 'react-modal';

const Mymodal = ({ isOpen, onSubmit, onCancel }) => {
  const [value, onChange] = useState('10:00');

  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onCancel();
  };

  const MiddleBox = {
    width: '300px',
    margin: '0 auto',
  };

  const InputStyle = {
    width: '300px',
    height: '70px',
    borderRadius: '40px',
    borderStyle: 'none',
    margin: '0 0 30px',
  };

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
        <input style={InputStyle} placeholder={'과목명'} />
        <input style={InputStyle} />
        <input style={InputStyle} />
        <TimePicker onChange={onChange} value={value} />
        <TimePicker onChange={onChange} value={value} />
      </div>
      <button style={InputStyle} onClick={handleClickSubmit}>
        시간표 추가
      </button>
    </ReactModal>
  );
};

export default Mymodal;
