import React, { useEffect, useState } from "react";
import { apiCall } from "../utilities/api";


// As any user on the Routines tab, I want to:

// see a list of all public routines showing:
// The routine name, goal, and creator's username
// A list of activities for the routine, including their name, description, and duration and/or count

// just need to use the public routines endpoint, it doesn't need to be in a utility file
const Routines =({ routines, setRoutines, }) => {

    const getRoutines = async () => {    
        const fetched = await apiCall('/routines', 'GET', null)
        setRoutines(fetched);
    console.log("routines constant", routines);
}


    useEffect(()=>{
        getRoutines();
    },[])



return (
<>

    <div>
        <h1> Routines </h1>
    </div>

    <div>
    {routines.map( routine => {
        console.log(routine)
        return(
            <div key={routine.id}>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <p>Creator Name: {routine.creatorName}</p>
            <ol>
                {routine.activities.map((activity)=> 
                {return <li className="item-body" key={activity.id}>
                    <div>Activity: {activity.name}</div>
                    <div>Activity Description: {activity.description}</div>
                    <div>Activity Duration: {activity.duration}</div>
                    <div>Activity Count: {activity.count}</div>
                </li>
                }
                )}
            </ol>
            </div>
            );
        })}
    </div>
    </>
);

}


export default Routines;