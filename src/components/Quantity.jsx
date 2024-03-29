import PropTypes from "prop-types";
export default function Quantity({ value, handleEvent }) {
  return (
    <div
      style={{
        margin: "24px 0",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <label
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span>Quantity</span>
        <input
          placeholder=""
          name="Quantity"
          value={value}
          onChange={handleEvent}
          style={{ width: "50px" }}
        />
      </label>
    </div>
  );
}

Quantity.propTypes = {
  value: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
};
