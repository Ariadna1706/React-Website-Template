import React from 'react'


const Copyright = (props) => {
  const { text } = props;
  const styleP = {
    width: "100%"
  }
  return <p style={styleP}>{text}</p>;
};

export default Copyright
