import React from "react";


const Logo = props => {
  const myStyles = {
    fontSize: "35px",
    fontWeight: "bold",
    color: "purple",
    textDecoration: "none",
  };
  return (
    <a href="#" style={myStyles}>
      {props.text}
    </a>
  );
};

export default Logo
