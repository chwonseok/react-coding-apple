import classes from './modal.module.css';

export default function Modal({ data }) {
  return (
    <div className={classes.modal}>
      <h2>{data}</h2>
      <p>Date</p>
      <p>Content</p>
    </div>
  );
}
