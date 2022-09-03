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
        <div>
            {activities.map( activity => {
                return(
                    <ul key={activity.id}>
                        <li> Activity : {activity.name}</li>
                        <li> Description : {activity.description}</li>
                    </ul>
                )
            })}
        </div>

    </>
       
}

export default activities;


