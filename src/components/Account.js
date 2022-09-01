import React, { useState } from "react";

// Got the frontend of the account login section working, now we need to incorporate the api calls to be able to log in a user properly.

// For reference, see class 30 about 25 minutes into the class.

const Account = ({ user, setUser, token, setToken }) => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [isRegistering, setIsRegistering ] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isRegistering){ 
            console.log('registering', username, password);
        }else{    
            console.log('logged in', username, password);
        }
    }

    const toggleRegistration = () =>{
        console.log('toggling', isRegistering);
        setIsRegistering(!isRegistering);
    }

    return <>

        {
            (user && token) ?
            <>
            <h1>Profile</h1>
            <p>{user.username}</p>  
            </> :
            <>
            <h1>{isRegistering ? "Registration" : "Login"}</h1>
        <form onSubmit={handleSubmit}>
            <input
                onChange={(event) => setUsername(e.target.value)}
                required
                name="username"
                type="text"
                placeholder="Username"
                value={username}
            ></input>
            <input
                onChange={(event) => setPassword(e.target.value)}
                required
                name="password"
                type="password"
                placeholder="Password"
                value={password}
            ></input>
            <button type="submit">submit</button>
        </form>
    <button onClick={ toggleRegistration }>Toggle Register/Login</button>
    </>
}
</>
}  

        

export default Account