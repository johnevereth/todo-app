import React from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <Entry />
      <TodoList />
    </div>
  );
}

export default App;
