import React from "react";
import PropTypes from "prop-types";

class TextAreaComponent extends React.Component {
  render() {
    const { title, text } = this.props;
    const textStyle = {
      flexBasis: "60%",
      padding: "0 20px",
      fontSize: "20px",
      lineHeight: "30px",
    };
    return (
      <section style={textStyle}>
        <h2>{title}</h2>
        <p>{text}</p>
      </section>
    );
  }
}

TextAreaComponent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextAreaComponent;
