import withLogger from "./withLogger";
import PropTypes from 'prop-types';

const Component = ({ message }) => {
  return <div>{message}</div>;
};

Component.propTypes = {
  message: PropTypes.string.isRequired
};

export default withLogger(Component);
