import './TimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
import React, { useState } from 'react';
import MyModal from './Mymodal';

const TimePage = () => {
  const [isOpen, setOpen] = useState(false);

  const handlerClick = () => {
    setOpen(true);
  };
  const handleModalSubmit = () => {
    setOpen(false);
  };
  const handleModalCancel = () => {
    setOpen(false);
  };

  const back_onclick = (e) => {
    window.location.href = '/';
  };

  const logout_onclick = (e) => {
    window.location.href = '/login';
  };

  return (
    <>
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
            LOGOUT
          </button>
        </div>
      </div>

      <div className="container">
        <div className="subject">
          <button onClick={handlerClick}>시간표 추가</button>
          <MyModal
            isOpen={isOpen}
            onSubmit={handleModalSubmit}
            onCancel={handleModalCancel}
          />
        </div>
        <div className="time">
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
        <div className="result"></div>
      </div>
    </>
  );
};

export default TimePage;
