import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MainPage.css';
import 'react-router-dom';
import { Helmet } from 'react-helmet';

function MainPage() {
  const [date, setDate] = useState(new Date());

  const events = (e) => {
    window.location.href = '/time';
  };
  return (
    <div className="app">
      <Helmet>
        <title>ERUM-calendar</title>
      </Helmet>
      <div className="text-center">
        <span>ERUM</span>
      </div>
      <Calendar onChange={setDate} value={date} onClickDay={events} />
    </div>
  );
}
export default MainPage;
