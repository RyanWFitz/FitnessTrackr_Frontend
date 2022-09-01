import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./index";

const App = () => {

  const [ user, setUser ] = useState(false);
  const [ token, setToken ] = useState('');
  const [ activities, setActivities ] = useState([]);
  const [ routines, setRoutines ] = useState([]);
  const [ routineActivities, setRoutineActivities ] = useState([]);

  return (

  <main>
    {/* NavLink example below in react 18 format */}
    <NavLink
      to="/account"
      style={isActive => ({
        color: isActive ? "blue" : "red"
    })}
    ></NavLink>

    <NavLink
      to="/"
      style={isActive => ({
        color: isActive ? "blue" : "red"
    })}
    ></NavLink>

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route 
      user={user} setUser={setUser} 
      token={token} setToken={setToken}
      path='/account' element={<Account />} />
    </Routes>
  </main>
  );
};

export default App;
