import { useState } from 'react';
import classes from './css/app.module.css';
import Modal from './components/Modal';

export default function App() {
  const [title, setTitle] = useState([
    "About men's fashion",
    'Nice restaurant in Daegu',
    'Study React.js',
  ]);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.container}>
          <h1>Dev Log</h1>
        </div>
      </div>
      {/* CONTENT AREA ⬇️ */}
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>{title[0]}</h2>
          <span>July 28th posted</span>
        </div>
        <hr />
        <div className={classes.title}>
          <h2>{title[1]}</h2>
          <span>July 29th posted</span>
        </div>
        <hr />
        <div className={classes.title}>
          <h2>{title[2]}</h2>
          <span>July 30th posted</span>
        </div>
        <hr />
      </div>

      <div className={classes.container}>
        <Modal />
      </div>
    </>
  );
}
