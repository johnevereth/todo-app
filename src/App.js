import React, { useState } from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import TodoList from "./components/TodoList";
import { updateDoc, doc, addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [brightness, setBrightness] = useState(false);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const [input, setInput] = useState("");

  const createTodo = async () => {
    if (input === "") {
      alert("Please enter a valid todo item.");
      return;
    }

    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
  };

  document.body.style.backgroundColor = brightness ? "#d3d3d3" : "#0b090a";
  return (
    <div className="App">
      <Header brightness={brightness} setBrightness={setBrightness} />
      <Entry
        brightness={brightness}
        createTodo={createTodo}
        setInput={setInput}
        input={input}
      />
      <TodoList brightness={brightness} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
