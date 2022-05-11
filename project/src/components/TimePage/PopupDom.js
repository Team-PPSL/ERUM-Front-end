import React from 'react';
import ReactDOM from 'react-dom';

const PopupDom = ({ children }) => {
  const popup = document.getElementById('popupDom');
  return ReactDOM.createPortal(children, popup);
};

export default PopupDom;
