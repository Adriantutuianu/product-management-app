import React, { useState } from "react";
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
import NotLoggedIn from "./components/NotLoggedIn";
import NotFoundRoute from "./routes/NotFoundRoute";

function App() {
  const { Content } = Layout;
  const [token, setToken] = useState("");

  return (
    <Router>
      <div className="App">
        <Layout className="app-layout">
          <Header credentials={{ token, setToken }} />
          <Content style={{ height: "100%" }}>
            <Routes>
              <Route
                path="/"
                element={token ? <Products /> : <NotLoggedIn />}
              />

              {token && <Route path="/categories" element={<Categories />} />}
              {token && <Route path="/users" element={<Users />} />}
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFoundRoute />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
