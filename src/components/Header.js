import React from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>TODO</h1>
        <BsFillBrightnessHighFill className="brightness" />
      </div>
    </div>
  );
};

export default Header;
