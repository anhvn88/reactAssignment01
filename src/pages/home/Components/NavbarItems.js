import React from "react";

const NavbarItems = (props) => {
  return (
    <div className="NavbarItems">
      <button
        className="buttonItem"
        style={
          props.active === true
            ? { borderRadius: "5vw", borderColor: "white" }
            : { border: "rgb(69, 119, 226)" }
        }
      >
        {props.icon} {props.type}
      </button>
    </div>
  );
};

export default NavbarItems;
