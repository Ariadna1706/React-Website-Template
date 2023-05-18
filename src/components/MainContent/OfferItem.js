import React from "react";

const OfferItem = (props) => {
  const { text } = props;
  const itemStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "violet",
    textAlign: "center",
  };

  const textStyle = {
    textAlign: "center",
  };

  return (
    <div>
      <div style={itemStyle}></div>
      <h3 style={textStyle}>{text}</h3>
    </div>
  );
};

export default OfferItem