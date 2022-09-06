import React, { useEffect, useState } from "react";
import { apiCall } from "../utilities/api";


/* TO DO
~UNREGISTERED
- see list of all activties
~REGISTERED
- be able to create new activities
- be shown an error if the activty already exists
*/
const activities = ({activities, setActivities, user, token}) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const getActivities = async () => {
        const fetched = await apiCall('/activities', 'GET', null)
        setActivities(fetched)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newActivity = await apiCall('activities', "POST", token, {name, description} )
        if (!newActivity){
            alert(`There Is Already An Activity With The Name "${name}".`)
        }
        getActivities()
        setName('')
        setDescription('')
        return newActivity
    }

    useEffect(() => {
        getActivities();
    }, [])

    return (
    <>

        <div>
            <h1> Activities </h1>
        </div>

        <div>
            {activities.map( activity => {
                return(
                    <div key={activity.id}>
                    <p>Name: {activity.name}</p>
                    <p>Description: {activity.description}</p>
                </div>
                );
            })}
        </div>

  
        {user && token && (
            <form className="item-submit" onSubmit={(e) => {handleSubmit(e)}}>
                <div>Create Activity</div>
                <input
                className="input-text"
                onChange={(e)=> setName(e.target.value)}
                type='text' name= 'activityName'
                placeholder="Activity Name Required"
                value={name}
                required
                />

                <div>Description</div>
                <input 
                className="input-text"
                onChange={(e) => setDescription(e.target.value)}
                type='text' name='itemDescription'
                placeholder="Activity Description Required"
                value={description}
                required
                />
                <button className="button" type="submit">Submit Activity</button>
            </form>        
        )}
    </>

    );

    }

export default activities;
