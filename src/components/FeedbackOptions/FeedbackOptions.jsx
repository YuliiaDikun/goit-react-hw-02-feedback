import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsBtn = Object.keys(options);
  return (
    <ul className={css.btnList}>
      {optionsBtn.map(option => (
          <li key={ option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
};
