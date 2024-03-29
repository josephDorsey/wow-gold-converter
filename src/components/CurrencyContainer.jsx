import PropTypes from "prop-types";
export default function CurrencyContainer({ type, value, handleEvent, src }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h3>{type}</h3>
        <img src={src} style={{ width: "2rem", height: "2rem" }} />
      </span>
      <input
        placeholder=""
        value={value}
        name={type}
        style={type === "Gold" ? { width: "100px" } : { width: "50px" }}
        onChange={handleEvent}
      />
    </label>
  );
}

CurrencyContainer.propTypes = {
  // Specify the propTypes if there is an error with the component created
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
