import classes from './modal.module.css';

export default function Modal() {
  return (
    <div className={classes.modal}>
      <h2>Title</h2>
      <p>Date</p>
      <p>Content</p>
    </div>
  );
}
