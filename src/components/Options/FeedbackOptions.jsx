import PropTypes from 'prop-types';
import { Buttons, Button, Item } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonLabels = Object.keys(options);

  return (
    <Buttons>
      {buttonLabels.map(label => {
        return (
          <Item key={label}>
            <Button type="button" onClick={() => onLeaveFeedback(label)}>
              {label}
            </Button>
          </Item>
        );
      })}
    </Buttons>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
