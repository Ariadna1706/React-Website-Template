import React from 'react';


class ImgArea extends React.Component {
  render() {
    const palceHolderImgStyle = {
      flexBasis: "40%",
      backgroundColor: "pink",
      width: "400px",
      height: "400px",
    };
    return <img style={palceHolderImgStyle} />;
  }
}

export default ImgArea