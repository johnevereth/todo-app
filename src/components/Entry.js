import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Entry = () => {
  return (
    <div className="entry">
      <BsFillPlusCircleFill className="plus" />
      <input placeholder="Create a new todo..." />
    </div>
  );
};

export default Entry;
