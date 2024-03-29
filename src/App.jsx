import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import goldIcon from "./assets/convertedGold.png";
import silverIcon from "./assets/convertedSilver.png";
import copperIcon from "./assets/convertedCopper.png";
import PrimaryButton from "./components/PrimaryButton";
import CurrencyContainer from "./components/CurrencyContainer";
import Quantity from "./components/Quantity";
import AuctionHouseCut from "./components/AuctionHouseCut";

function App() {
  const [count, setCount] = useState({
    gold: "",
    silver: "",
    copper: "",
    quantity: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [auctionHouseCut, setAuctionHouseCut] = useState(false);
  const [typeOfCalc, setTypeOfCalc] = useState("Multiply");
  function handleInputChange(e) {
    switch (e.target.name) {
      case "Gold":
        setCount((prev) => ({
          ...prev,
          gold: e.target.value,
        }));
        break;
      case "Silver":
        setCount((prev) => ({
          ...prev,
          silver: e.target.value,
        }));
        break;
      case "Copper":
        setCount((prev) => ({
          ...prev,
          copper: e.target.value,
        }));
        break;
      case "Quantity":
        setCount((prev) => ({
          ...prev,
          quantity: e.target.value,
        }));
        break;
    }
  }
  function handleCalcNewAmount() {
    let gold = count.gold === "" ? 0 : count.gold;
    let silver = count.silver === "" ? 0 : count.silver / 100;
    let copper = count.copper === "" ? 0 : count.copper / 10000;
    let quantity = count.quantity;
    if (
      count.quantity !== "" &&
      (count.gold !== "" || count.silver !== "" || count.copper !== "")
    ) {
      let newAmount;

      switch (typeOfCalc) {
        case "Multiply":
          newAmount =
            (parseFloat(gold) + parseFloat(silver) + parseFloat(copper)) *
            parseFloat(quantity);
          break;
        case "Divide":
          newAmount =
            (parseFloat(gold) + parseFloat(silver) + parseFloat(copper)) /
            parseFloat(quantity);
          break;
        default:
          alert(`Please update the use case`);
      }
      if (auctionHouseCut) {
        newAmount = newAmount * (1 - 5 / 100);
      }

      console.log(newAmount.toFixed(4));
      // console.log(quantity);
      let [convertedGold, convertedSilverCopper] = newAmount
        .toFixed(4)
        .toString()
        .split(".");
      console.log(convertedGold);
      console.log(convertedSilverCopper);
      setCount((prev) => ({
        ...prev,
        gold: convertedGold,
        silver: convertedSilverCopper.slice(0, 2),
        copper: convertedSilverCopper.slice(2),
      }));
      setShowResults(true);
    } else {
      setErrorMessage(true);
    }

    // When adding silver we divide by 100
    // When adding copper we divide by 10,000
  }
  function handleClearInput() {
    setCount((prev) => ({
      ...prev,
      gold: "",
      silver: "",
      copper: "",
      quantity: "",
    }));
    setShowResults(false);
    setTypeOfCalc("Multiply");
    setAuctionHouseCut(false);
  }
  function handleAuctionHouseCut() {
    setAuctionHouseCut((prev) => !prev);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "18px",
          marginLeft: "24px",
          marginBottom: "64px",
          gap: "8px",
        }}
      >
        <h1>World of Warcraft</h1>
        <p>Gold Calculator Companion</p>
      </div>
      {/* <AppMessage /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <CurrencyContainer
          type="Gold"
          value={count.gold}
          handleEvent={handleInputChange}
          src={goldIcon}
        />
        <CurrencyContainer
          type="Silver"
          value={count.silver}
          handleEvent={handleInputChange}
          src={silverIcon}
        />
        <CurrencyContainer
          type="Copper"
          value={count.copper}
          handleEvent={handleInputChange}
          src={copperIcon}
        />
      </div>
      {showResults && (
        <div className="calculated-results-container">
          <h3>Results!</h3>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: "24px" }}>
                {count.gold === "" ? 0 : count.gold}g
              </p>
              <img
                src={goldIcon}
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: "24px" }}>
                {count.silver === "" ? 0 : count.silver}s
              </p>
              <img
                src={silverIcon}
                style={{ width: "2.25rem", height: "2.25rem" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: "24px" }}>
                {count.copper === "" ? 0 : count.copper}c
              </p>
              <img src={copperIcon} style={{ width: "2rem", height: "2rem" }} />
            </div>
          </div>
        </div>
      )}
      <Quantity value={count.quantity} handleEvent={handleInputChange} />
      <TypeOfCalculation handleEvent={setTypeOfCalc} type={typeOfCalc} />
      {typeOfCalc === "Multiply" && (
        <AuctionHouseCut
          cut={auctionHouseCut}
          handleEvent={handleAuctionHouseCut}
        />
      )}

      <div
        style={{
          display: "flex",
          marginTop: "24px",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <PrimaryButton onClick={handleCalcNewAmount}>Calculate</PrimaryButton>
        <PrimaryButton onClick={handleClearInput}>Clear</PrimaryButton>
      </div>
      {errorMessage && (
        <p>
          Please enter a quantity or a value in the gold, silver, or copper
          input
        </p>
      )}
    </div>
  );
}

export default App;

// function AppMessage() {
//   return (
//     <div className="app-main-message">
//       <p>
//         <span style={{ fontWeight: "bold" }}>Forge your wealth</span>, multiply
//         joy, divide effort, subtract stress, and add prosperity – transforming
//         gold, silver, and copper into your virtual empire!
//       </p>
//     </div>
//   );
// }

function TypeOfCalculation({ type, handleEvent }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginBottom: "12px",
      }}
    >
      {/* <TypeOfCalculationLabel name="Add" /> */}
      {/* <TypeOfCalculationLabel name="Subtract" /> */}
      <TypeOfCalculationLabel
        name="Multiply"
        type={type}
        handleEvent={handleEvent}
      />
      <TypeOfCalculationLabel
        name="Divide"
        type={type}
        handleEvent={handleEvent}
      />
    </div>
  );
}

function TypeOfCalculationLabel({ name, handleEvent }) {
  function setHandleEvent() {
    handleEvent(name);
  }
  return (
    <label style={{ display: "flex", gap: "4px" }}>
      <input type="radio" name="type-of-calc" onClick={setHandleEvent} />
      <span>{name}</span>
    </label>
  );
}

TypeOfCalculation.propTypes = {
  type: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
};

TypeOfCalculationLabel.propTypes = {
  name: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
};
