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
      <Layout>
        <Header />
        <Content>Content</Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
