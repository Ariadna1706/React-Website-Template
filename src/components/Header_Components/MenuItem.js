import React from "react";
import PropTypes from "prop-types";

class MenuItem extends React.Component {
  render() {
    const { text } = this.props;
    const myStyles = {
      padding: "25px",
      fontSize: "17px",
      textTransform: "uppercase",
      fontWeight: "bold",
      color: "purple",
      textDecoration: "none",
    };
    return (
      <li>
        <a href="#" style={myStyles}>
          {text}
        </a>
      </li>
    );
  }
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired
}

export default MenuItem;
