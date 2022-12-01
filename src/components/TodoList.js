import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

const TodoList = (props) => {
  const [list, setList] = useState([
    { checked: false, description: "Example 1 of list item" },
    { checked: false, description: "Example 2 of list item" },
    { checked: false, description: "Example 3 of list item" },
    { checked: false, description: "Example 4 of list item" },
  ]);

  const printedList = list.map((listItem) => {
    return (
      <div
        className="listitem"
        style={{ backgroundColor: props.brightness ? "#b1a7a6" : "#161a1d" }}
      >
        <div className="main">
          {listItem.checked ? (
            <Checkbox
              className="checkbox"
              checked={true}
              icon={
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor: "#e5383b",
                    alignSelf: "stretch",
                  }}
                >
                  <FiCheck
                    style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}
                    size={24}
                  />
                </div>
              }
              borderColor="#e5383b"
              // borderWidth={0}
              borderRadius={24}
              style={{ overflow: "hidden" }}
              size={20}
              label={
                <p style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}>
                  {listItem.description}
                </p>
              }
            />
          ) : (
            <Checkbox
              className="checkbox"
              checked={false}
              icon={
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor: "#e5383b",
                    alignSelf: "stretch",
                  }}
                >
                  <FiCheck
                    style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}
                    size={24}
                  />
                </div>
              }
              borderColor="#e5383b"
              // borderWidth={0}
              borderRadius={24}
              style={{ overflow: "hidden" }}
              size={24}
              label={
                <p style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}>
                  {listItem.description}
                </p>
              }
            />
          )}
        </div>
        <BsFillTrashFill
          className="trash"
          style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}
        />
      </div>
    );
  });

  return (
    <div className="todolist">
      {printedList}
      <div
        className="bottom"
        style={{ backgroundColor: props.brightness ? "#b1a7a6" : "#161a1d" }}
      >
        <p style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}>
          {list.length} items left
        </p>
        <button
          style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}
          className="btn"
          onClick={() => setList([])}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TodoList;
