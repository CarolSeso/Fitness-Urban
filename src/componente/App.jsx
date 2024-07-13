import React, { useEffect } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import WorkoutPage from "./WorkoutPage.jsx";
import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workouts" element={<WorkoutPage/>}/>
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
