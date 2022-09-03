import React, { useState, useEffect } from "react";
import { apiCall, loginOrRegister, apiRoutines } from "../utilities/api";


const Routines = () => {
    const [routines, setRoutines] = useState([]);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [creatorUsername, setCreatorUsername] = useState({});

    const displayRoutines = async () => {
        const routines = await apiRoutines();
        setRoutines(routines)
    }
    
    useEffect(() => {
        displayRoutines();   
    }, []);


    
}

export default Routines;



