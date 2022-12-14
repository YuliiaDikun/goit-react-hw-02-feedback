import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsBtn = Object.keys(options);
  const emojiOption = {
    good: '😍',
    neutral: '👌',
    bad: '😢'
  }
  return (
    <ul className={css.btnList}>
      {optionsBtn.map(option => (
          <li key={ option}>
          <button className={css[option]} type="button" onClick={() => onLeaveFeedback(option)}>
            {option.toUpperCase()} { emojiOption[option]}
          </button>
        </li>
      ))}
    </ul>
  );
};
