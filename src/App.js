import React from "react";
import "./antd.css";
import { Layout } from "antd";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const { Content } = Layout;

  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <Header />
        <Content style={{ height: "100%" }}>Content</Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
