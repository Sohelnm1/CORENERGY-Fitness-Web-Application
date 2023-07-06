import LandingPage from "./components/pages/LandingPage";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import ProfilePage from "./components/pages/ProfilePage";
import Protected from "./components/common/Protected";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import firstimg from "../src/images/firstimg.png";
import graph from "../src/images/graph.jpg";
import thirdimg from "../src/images/thirdimg.png";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route
            path="/profilepage"
            element={
              <Protected>
                <ProfilePage />
              </Protected>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
