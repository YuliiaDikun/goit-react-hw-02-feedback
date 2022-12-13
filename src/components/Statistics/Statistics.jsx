import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.subtitle}>Statistics:</h2>
      {total ? (
        <>
          <p className={css.item}>Good: {good}</p>
          <p className={css.item}>Neutral: {neutral}</p>
          <p className={css.item}>Bad: {bad}</p>
          <p className={css.item}>Total: {total}</p>
          <p className={css.item}>Positive feedback: {positive}%</p>
        </>
      ) : (
        <Notification message="There is no feedback"/>
      )}
    </div>
  );
};
