import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [darkMode, setDarkMode] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setDarkMode("Enable Dark Mode");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setDarkMode("Enable Light Mode");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextFunctions"
          home="Home"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          darkMode={darkMode}
        />
        <div className="container">
          <Switch>
            <Route path="/about">
              <AboutUs mode={mode} toggleMode={toggleMode} />
            </Route>
            <Route path="/">
              <TextForm
                heading="Enter Text To Convert"
                mode={mode}
                toggleMode={toggleMode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
