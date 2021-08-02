import { useState } from 'react';
import classes from './css/app.module.css';
import Modal from './components/Modal';

export default function App() {
  const [titles] = useState([
    "About men's fashion",
    'Nice restaurant in Daegu',
    'Study React.js',
  ]);
  const [modal, setModal] = useState(false);
  const [numTitle, setNumTitle] = useState(0);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.container}>
          <h1>DevLog</h1>
        </div>
      </div>

      {/* CONTENT AREA ⬇️ */}
      <div className={classes.container}>
        {titles.map((title, i) => {
          return (
            <div className={classes.titles}>
              <h2
                onClick={() => {
                  setModal(!modal);
                  setNumTitle(i);
                }}
              >
                {title}
              </h2>
              <span>July 30th posted</span>
              <hr />
            </div>
          );
        })}

        {/* MODAL AREA */}
        {modal ? <Modal title={titles} clickedNum={numTitle} /> : null}
      </div>
    </>
  );
}
