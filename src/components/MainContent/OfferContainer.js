import React from "react";
import OfferItem from "./OfferItem";

const OfferContainer = () => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "10vh auto",
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <section style={containerStyle}>
      <OfferItem text="Offer 1" />
      <OfferItem text="Offer 2" />
      <OfferItem text="Offer 3" />
    </section>
  );
}

export default OfferContainer
