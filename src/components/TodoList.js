import React, { useState, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const TodoList = (props) => {
  const [list, setList] = useState([]);

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setList(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const printedList = list.map((listItem) => {
    return (
      <div
        key={listItem.id}
        className="listitem"
        style={{ backgroundColor: props.brightness ? "#b1a7a6" : "#161a1d" }}
      >
        <div className="main">
          <Checkbox
            onChange={() => props.toggleComplete(listItem)}
            className="checkbox"
            checked={listItem.completed ? true : false}
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
              <p
                onClick={() => props.toggleComplete(listItem)}
                style={{
                  color: props.brightness ? "#161a1d" : "#d3d3d3",
                  textDecoration: listItem.completed ? "line-through" : "none",
                  textTransform: "capitalize",
                }}
              >
                {listItem.text}
              </p>
            }
          />
        </div>
        <BsFillTrashFill
          onClick={() => deleteTodo(listItem.id)}
          className="trash"
          style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}
        />
      </div>
    );
  });

  return (
    <div className="todolist">
      {printedList}
      {list.length < 1 ? null : (
        <div
          className="bottom"
          style={{ backgroundColor: props.brightness ? "#b1a7a6" : "#161a1d" }}
        >
          <p style={{ color: props.brightness ? "#161a1d" : "#d3d3d3" }}>
            {list.length} items left
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
