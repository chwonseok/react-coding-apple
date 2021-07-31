import { useState } from 'react';
import classes from './css/app.module.css';

export default function App() {
  const [title, setTitle] = useState('Untitled');

  return (
    <>
      <div className={classes.header}>
        <div className={classes.container}>
          <h1>Dev Log</h1>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Started building my dev-log</h2>
          <span>July 30th posted</span>
        </div>
        <hr />

        <div>
          <h2>{title}</h2>
          <span>July 30th posted</span>
        </div>
        <hr />
      </div>
    </>
  );
}
