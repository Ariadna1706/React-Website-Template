import React from "react";
import Menu from "./Menu";
import Copyright from "./Footer_Components/Copyright";

class Footer extends React.Component {
  render() {
    const styleFooter = {
      backgroundColor: "#FDF2EF",
      display: "flex",
      textAlign: "center",
      flexWrap: "wrap",
      justifyContent: "center",
     
    };
    return (
      <section style={styleFooter}>
        <Copyright text="copyright 2023" />
        <Menu
          items={[
            { text: "Home" },
            { text: "Offer" },
            { text: "About Us" },
            { text: "Contact" },
          ]}
        />
      </section>
    );
  }
}

export default Footer;
