import React from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h1 style={{ color: props.brightness ? "#ffffff" : "#0b090a" }}>
          TODO
        </h1>
        <BsFillBrightnessHighFill
          className="brightness"
          style={{ color: props.brightness ? "#ffffff" : "#0b090a" }}
          onClick={() =>
            props.setBrightness((prevBrightness) => !prevBrightness)
          }
        />
      </div>
    </div>
  );
};

export default Header;
