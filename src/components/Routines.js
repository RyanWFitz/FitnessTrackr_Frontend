<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { apiCall, loginOrRegister, apiRoutines } from "../utilities/api";
=======
import React, { useEffect, useState } from "react";
import { apiCall } from "../utilities/api";
>>>>>>> 37e1d9cacb2137440caf073e568ff035d2863bd9


// As any user on the Routines tab, I want to:

// see a list of all public routines showing:
// The routine name, goal, and creator's username
// A list of activities for the routine, including their name, description, and duration and/or count

// just need to use the public routines endpoint, it doesn't need to be in a utility file
const Routines =({user, token, routines, setRoutines, routineActivities, setRoutineActivities}) => {
    const getRoutines = async () => {
        const fetched = await apiCall('routines', 'GET', null)
        console.log('routines', fetched) 
    }

    const [ name, setName ] = useState('');
    const [ goal, setGoal ] = useState('');
    const [ isPublic, setIsPublic ] = useState(false);

    useEffect(()=>{
        getRoutines();
    })
}

export default Routines
