import PropTypes from "prop-types";

const Alert = ({type = "success", children, className=""}) => {
  return <div className={`alert alert-${type} ${className}`.trim()}>{children}</div>;
};

Alert.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(["primary","danger", "success"]),
    className: PropTypes.string
};

export default Alert;
