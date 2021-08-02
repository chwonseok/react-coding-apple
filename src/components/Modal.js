import classes from './modal.module.css';

export default function Modal({ title, clickedNum }) {
  return (
    <div className={classes.modal}>
      <h2>{title[clickedNum]}</h2>
      <p>Date</p>
      <p>Content</p>
    </div>
  );
}
