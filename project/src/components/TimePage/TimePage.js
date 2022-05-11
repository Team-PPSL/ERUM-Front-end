import './TimePage.css';
import { BsArrowLeftCircle } from 'react-icons/bs';
import PopupDom from './PopupDom';
import PopupContent from './PopupContent';
import React, { Component } from 'react';
import './PopupContent.css';
class TimePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenPopup: false,
    };

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup() {
    this.setState({
      isOpenPopup: true,
    });
  }

  closePopup() {
    this.setState({
      isOpenPopup: false,
    });
  }

  render() {
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
            <button type="button" id="popupDom" onClick={this.openPopup}>
              시간표 추가
            </button>
            {this.state.isOpenPopup && (
              <PopupDom>
                <PopupContent onClose={this.closePopup} />
              </PopupDom>
            )}
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
  }
}

export default TimePage;
