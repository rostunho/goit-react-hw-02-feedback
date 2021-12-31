import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonLabels = Object.keys(options);

  return (
    <ul>
      {buttonLabels.map(label => {
        return (
          <li key={label}>
            <button type="button" onClick={() => onLeaveFeedback(label)}>
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
