import React, { useState } from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import TodoList from "./components/TodoList";

function App() {
  const [brightness, setBrightness] = useState(false);

  document.body.style.backgroundColor = brightness ? "#d3d3d3" : "#0b090a";
  return (
    <div className="App">
      <Header brightness={brightness} setBrightness={setBrightness} />
      <Entry brightness={brightness} />
      <TodoList brightness={brightness} />
    </div>
  );
}

export default App;
