import React, { useState } from "react";
import { apiCall, loginOrRegister } from "../utilities/api";

// Got the frontend of the account login section working, now we need to incorporate the api calls to be able to log in a user properly.

// For reference, see class 30 about 25 minutes into the class.

const Account = ({ user, setUser, token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let returnedToken;

    if (isRegistering) {
      returnedToken = await loginOrRegister("register", username, password);
      console.log("registering", username, password);
    } else {
      returnedToken = await loginOrRegister("login", username, password);
      console.log("logged in", username, password);
    }

    setToken(returnedToken);
  };

  const toggleRegistration = () => {
    console.log("toggling", isRegistering);
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      {user && token ? (
        <>
          <h1>Profile</h1>
          <p>{user.username}</p>
        </>
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
