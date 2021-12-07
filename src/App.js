import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./antd.css";
import "./App.css";
import { Layout } from "antd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./routes/Products";
import Categories from "./routes/Categories";
import Users from "./routes/Users";
import About from "./routes/About";

function App() {
  const { Content } = Layout;

  return (
    <Router>
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Content style={{ height: "100%" }}>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/users" element={<Users />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
