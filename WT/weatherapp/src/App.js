import WeatherApp from './WeatherApp';
import React, { useState } from "react";
import Signup from "./Signup";
import Login from './Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<WeatherApp />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;