import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Home, Account } from "./index";
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
      </Routes>
    </main>
  );
};

export default App;
