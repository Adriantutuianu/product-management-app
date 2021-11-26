import React from "react";
import { Route, HashRouter } from "react-router-dom";
import "./antd.css";
import "./App.css";
import { Layout } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./routes/Products";
import Categories from "./routes/Categories";
import Users from "./routes/Users";
import About from "./routes/About";

function App() {
  const { Content } = Layout;

  return (
    <HashRouter>
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <Header />
          <Content style={{ height: "100%" }}>Content</Content>
          <Footer />
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
