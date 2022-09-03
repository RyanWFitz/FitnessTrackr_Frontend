import React, { useEffect, useState } from "react";
import { Activities} from ".";
import { apiCall } from "../utilities/api";


/*   TO DO
    ~UNREGISTERED
        - see list of all activties
    ~REGISTERED
        - be able to create new activities
        - be shown an error if the activty already exists

*/
const activities = ({activities, setActivites, user, token}) => {
  
 const getActivities = async () => {
    const fetched = await apiCall('/activites', 'GET', token)
    setActivites(fetched.data.activities)
    console.log(fetched.data.activities)
 }
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getActivities();
    }, [])

    return <>
        <div>
            <h1> Activities </h1>
        </div>
        <ul className="activitiesBody">
            <li className="indActivities" key={activites.id}>
                <div> Activity ID: {activities.id}</div>
                <div> Activity: {activities.name}</div>
                <div> Description: {activities.description}</div>
            </li>
        </ul>

    </>
       
}

export default activities;

