import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Home, Account, Activities, MyRoutines, routines } from "./index";
import "../styles.css";
import Routines from "./Routines";

const App = () => {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState("");
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [routineActivities, setRoutineActivities] = useState([]);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [creatorUsername, setCreatorUsername] = useState({});

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const savedToken = localStorage.getItem("token");

      setUser(savedUser);
      setToken(savedToken);
    } catch (error) {
      console.error();
    }
  }, []);

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
          to="/activities"
          style={(isActive) => ({
            color: isActive ? "blue" : "red",
          })}
        >
          Activities
        </NavLink>

        {user && token && (
          <NavLink
            to={`/${user.username}/routines`}
            style={(isActive) => ({
              color: isActive ? "blue" : "red",
            })}
          >
            My Routines
          </NavLink>
        )}

        <NavLink
          to="/routines"
          style={(isActive) => ({
            color: isActive ? "blue" : "red",
          })}
        >
          Routines
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

        <Route
          path="/activities"
          element={
            <Activities
              activities={activities}
              setActivities={setActivities}
              user={user}
              token={token}
            />
          }
        />

        {user && token && (
          <Route
            path={`/${user.username}/routines`}
            element={<MyRoutines user={user} token={token} />}
          />
        )}

        <Route
          path="/routines"
          element={
            <Routines
              routines={routines}
              setRoutines={setRoutines}
              name={setName}
              goal={setGoal}
              creatorUsername={setCreatorUsername}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default App;
