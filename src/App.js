import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { DatePicker } from "antd";

function App() {
  return (
    <div className="App">
      <p style={{ color: "var(--primary-color)" }}>Hello!! </p>
      <DatePicker />
    </div>
  );
}

export default App;
