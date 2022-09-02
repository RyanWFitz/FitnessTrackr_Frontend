import React from "react";

const UserProfile = ({ user, setUser, token, setToken }) => {
  return (
    <>
      <h1>Profile</h1>
      <p>{user.username}</p>
      <button
        onClick={() => {
          setToken("");
          setUser(false);
          localStorage.clear();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserProfile;
