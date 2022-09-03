import React, { useEffect, useState } from "react";
import { Activities } from ".";
import { apiCall } from "../utilities/api";


/*   TO DO
    ~UNREGISTERED
        - see list of all activties
    ~REGISTERED
        - be able to create new activities
        - be shown an error if the activty already exists

*/
const activities = ({activities, setActivities, user, token}) => {
  
    const getActivities = async () => {
        const fetched = await apiCall('/activities', 'GET', null)
        setActivities(fetched)
        console.log("activities constant", activities)
    }
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');

    useEffect(() => {
        getActivities();
    }, [])

    return <>
        <div>
            <h1> Activities </h1>
        </div>
        <ul className="activitiesBody">
        
        </ul>

    </>
       
}

export default activities;




 {/* <li className="indActivities" key={activites.id}>
                <div> Activity ID: {activities.data.id}</div>
                <div> Activity: {activities.data.name}</div>
                <div> Description: {activities.data.description}</div>
            </li> */}