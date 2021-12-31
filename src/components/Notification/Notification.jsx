import PropTypes from 'prop-types';
import { Notice } from './Notification.styled';

function Notification({ message }) {
  return <Notice>{message}</Notice>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
