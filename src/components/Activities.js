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
const activities = () => {
  
 const getActivities = async () => {
    const fetched = await apiCall('/activites', 'GET', token)
    setActivites()
 }
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getActivities();
    })

    return <>
        <div>
            <h1> Activities </h1>
        </div>

    </>
       
}

export default activities;

