import './TimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';

const TimePage = () => {
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
        <div>
          <span>과목 시간</span>
        </div>

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
    </>
  );
};

export default TimePage;
