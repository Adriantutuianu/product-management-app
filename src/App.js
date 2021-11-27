import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <Header />
          {/* <Content style={{ height: "100%" }}>Content</Content> */}
          <Routes>
            <Route path="/" component={Products} />
            <Route path="/categories" component={Categories} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
          </Routes>

          <Footer />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
