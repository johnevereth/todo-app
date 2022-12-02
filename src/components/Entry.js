import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Entry = (props) => {
  return (
    <div
      className="entry"
      style={{ backgroundColor: props.brightness ? "#b1a7a6" : "#161a1d" }}
    >
      <BsFillPlusCircleFill
        className="plus"
        onClick={() => {
          props.createTodo();
          props.setInput("");
        }}
      />
      <input
        onChange={(e) => props.setInput(e.target.value)}
        value={props.input}
        placeholder="Create a new todo..."
        style={{
          backgroundColor: props.brightness ? "#b1a7a6" : "#161a1d",
          color: props.brightness ? "#161a1d" : "#d3d3d3",
        }}
      />
    </div>
  );
};

export default Entry;
