import React from "react";
import MenuItem from "./Header_Components/MenuItem";

class Menu extends React.Component {
  render() {
    const ulElStyle = {
      listStyleType: "none",
      display: "flex",
    };

    const list = this.props.items.map((item) => {
      return <MenuItem text={item.text} />;
    });
    return <ul style={ulElStyle}>{list}</ul>;
  }
}

export default Menu;
