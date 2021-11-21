import React from "react";
import "./antd.css";
import "./App.css";
import { DatePicker } from "antd";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <p style={{ color: "var(--primary-color)" }}>Hello!! </p>
      <DatePicker />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
