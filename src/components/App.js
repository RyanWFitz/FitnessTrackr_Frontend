import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Home, Account, MyRoutines, Routines, Activities } from "./index";
import "../styles.css";

const App = () => {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState("");
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [routineActivities, setRoutineActivities] = useState([]);

  return (
    <main>
      {/* NavLink example below in react 18 format */}
      <nav>
        <NavLink
          to="/account"
          style={(isActive) => ({
            color: isActive ? "blue" : "red",
          })}
        >
          Account
        </NavLink>

        <NavLink
          to="/"
          style={(isActive) => ({
            color: isActive ? "blue" : "red",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/myroutines"
          style={(isActive) => ({
            color: isActive ? "blue" : "red",
          })}
        >
          My Routines
        </NavLink>

        <NavLink
          to="/routines"
          style={(isActive) => ({
            color: isActive ? "blue" : "red",
          })}
        >
          Routines
        </NavLink>

        <NavLink
          to="/activities"
          style={(isActive) => ({
            color: isActive ? "blue" : "red",
          })}
        >
          Activities
        </NavLink>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account"
          element={
            <Account
              user={user}
              setUser={setUser}
              token={token}
              setToken={setToken}
            />
          }
        />
        <Route path="/myroutines" element={<MyRoutines/>} />
        <Route path="/routines" element={<Routines/>} />
        <Route path="/activities" element={<Activities/>} />
    
      </Routes>
    </main>
  );
};

export default App;
