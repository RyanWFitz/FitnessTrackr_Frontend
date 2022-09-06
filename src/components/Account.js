import React, { useState } from "react";
import { loginOrRegister } from "../utilities/api";
import { UserProfile } from "./index";
// add allerts for issues logging In
const Account = ({ user, setUser, token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response;

    if (isRegistering) {
      response = await loginOrRegister("register", username, password);
    } else {
      response = await loginOrRegister("login", username, password);
    }

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", response.user);

    setToken(response.token);
    setUser(response.user);

    setUsername("");
    setPassword("");
  };

  const toggleRegistration = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      {user && token ? (
        <UserProfile
          user={user}
          setUser={setUser}
          token={token}
          setToken={setToken}
        />
      ) : (
        <>
          <h1>{isRegistering ? "Registration" : "Login"}</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(event) => setUsername(event.target.value)}
              required
              name="username"
              type="text"
              placeholder="Username"
              value={username}
            ></input>
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              name="password"
              type="password"
              placeholder="Password"
              value={password}
            ></input>
            <button type="submit">submit</button>
          </form>
          <button onClick={toggleRegistration}>Toggle Register/Login</button>
        </>
      )}
    </>
  );
};

export default Account;
