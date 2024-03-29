import PropTypes from "prop-types";

export default function AuctionHouseCut({ cut, handleEvent }) {
  return (
    <label style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
      <input type="checkbox" checked={cut} onClick={handleEvent} />
      <span>Auction House (5%)</span>
    </label>
  );
}
AuctionHouseCut.propTypes = {
  cut: PropTypes.bool.isRequired,
  handleEvent: PropTypes.func.isRequired,
};
