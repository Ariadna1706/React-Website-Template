import React from "react";
import TextAreaComponent from "./TextAreaComponent";
import ImgArea from "./ImgArea";

class TextandImgSectionRight extends React.Component {
  render() {
    const styleContainer = {
      display: "flex",
      maxWidth: "1200px",
      margin: "50px auto",
    };
    return (
      <section style={styleContainer}>
        <ImgArea />
        <TextAreaComponent
          title="Our Mission"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          bibendum eget felis sit amet suscipit. Suspendisse finibus nisi ac
          vestibulum condimentum. Morbi sodales vulputate gravida. Integer dolor
          libero, malesuada id pulvinar at, interdum id tellus. Fusce nulla
          mauris, venenatis a ornare vitae, viverra sit amet enim. Praesent
          hendrerit, felis eget mollis efficitur, erat tortor iaculis felis,
          bibendum faucibus sem sem viverra dolor. Ut porta elementum urna, nec
          venenatis erat. Nunc consectetur erat sed massa lobortis, quis
          tincidunt est laoreet. Fusce ligula ante, congue sit amet odio vitae,
          suscipit placerat mauris. Aenean sit amet lobortis elit. Morbi pretium
          tincidunt posuere. Vivamus."
        />
      </section>
    );
  }
}

export default TextandImgSectionRight;
