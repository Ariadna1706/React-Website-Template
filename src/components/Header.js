import React from "react";
import Logo from "./Header_Components/Logo";
import Menu from "./Menu";

class Header extends React.Component {
  render() {
    const headerStyle = {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
    };
    return (
      <header style={headerStyle}>
        <Logo text="Logo" />
        <Menu
          items={[
            { text: "Home" },
            { text: "Offer" },
            { text: "About Us" },
            { text: "Contact" },
          ]}
        />
      </header>
    );
  }
}

export default Header;
