import React, { useEffect, useRef } from 'react';
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PomodoroTimer from "./pages/PomodoroTimer";
import AnalogClock from "./pages/AnalogClock";
import Todo from "./pages/Todo";
import Footer from "./pages/Footer";

function VideoMessage() {
  return (
    <div className="video-message">
      <h7>
        <span className="typed-text typing-cursor">Hi! I am Shinzo</span>
      </h7>
      <p>Let's Boost your Productivity together </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <SideBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<><Home /><AnalogClock /></>} />
              <Route path="/todo" element={<><Todo /><AnalogClock /></>} />
              <Route path="/pomodoro" element={<><PomodoroTimer /><AnalogClock /></>} />
              <Route path="*" element={<div>not found</div>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
