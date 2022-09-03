import React, { useState } from "react";
import { apiCall, loginOrRegister } from "../utilities/api";


const Routines = () => {
    const [routines, setRoutines] = useState([]);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [creatorUsername, setCreatorUsername] = useState({});

}

export default Routines;
