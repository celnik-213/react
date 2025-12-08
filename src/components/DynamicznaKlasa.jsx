import PropTypes from "prop-types";

const Alert = ({ children }) => {
  return <div className="alert alert-primary">{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.node
};

export default Alert;
