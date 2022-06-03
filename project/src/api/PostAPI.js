import axios from 'axios';

const url = `http://127.0.0.1:8000/report?create_at=20220601`;

axios
  .post(url)
  .then((Response) => {
    console.log(Response.data);
  })
  .catch((Error) => {
    console.log(Error);
  });
