import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

const TodoList = () => {
  const [list, setList] = useState([
    { checked: false, description: "Example 1 of list item" },
    { checked: false, description: "Example 2 of list item" },
    { checked: false, description: "Example 3 of list item" },
    { checked: false, description: "Example 4 of list item" },
  ]);

  const printedList = list.map((listItem) => {
    return (
      <div className="listitem">
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
                  <FiCheck color="white" size={24} />
                </div>
              }
              borderColor="#e5383b"
              // borderWidth={0}
              borderRadius={24}
              style={{ overflow: "hidden" }}
              size={24}
              label={<p>{listItem.description}</p>}
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
                  <FiCheck color="white" size={24} />
                </div>
              }
              borderColor="#e5383b"
              // borderWidth={0}
              borderRadius={20}
              style={{ overflow: "hidden" }}
              size={24}
              label={<p>{listItem.description}</p>}
            />
          )}
        </div>
        <BsFillTrashFill className="trash" />
      </div>
    );
  });

  return (
    <div className="todolist">
      {printedList}
      <div className="bottom">
        <p>{list.length} items left</p>
        <button className="btn" onClick={() => setList([])}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TodoList;
