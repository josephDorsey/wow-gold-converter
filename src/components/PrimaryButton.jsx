import PropTypes from "prop-types";
export default function PrimaryButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="primary-button">
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  // Specify the propTypes if there is an error with the component created
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
