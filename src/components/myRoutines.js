import React, { useEffect, useState } from "react";
import { apiCall } from "../utilities/api";
// As a registered user on the My Routines tab, I want to:

// be shown a form to create a new routine*

// the form should have text fields for name and goal*
// for each routine which is owned by me I should

// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine

const MyRoutines = ({user, token, }) => {

    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const [myRoutines, setMyRoutines] = useState('')

    console.log('looking for user', user.username)
    const userRoutines = async ()=> {
        const fetched = await apiCall(`users/${user.username}/routines`, "GET", token,)
        console.log('12345467', fetched)
        setMyRoutines(fetched)
    }


    // add a check box to toggle isPublic
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newRoutine = await apiCall('routines', "POST", token, {name, goal, isPublic} )
        if (!newRoutine){
            alert(`There Is Already A Routine With The Name "${name}".`)
        }
        userRoutines()
        setName('')
        setGoal('')
        return newRoutine
    }

    useEffect(()=>{
        userRoutines()
    },[])
    return (
    <>
        <form className="item-submit" onSubmit={(e) => {handleSubmit(e)}}>
                <div>Create Routine</div>
                <input
                className="input-text"
                onChange={(e)=> setName(e.target.value)}
                type='text' name='routineName'
                placeholder="Routine Name Required"
                value={name}
                required
                />

                <div>Description</div>
                <input 
                className="input-text"
                onChange={(e) => setGoal(e.target.value)}
                type='text' name='routineGoal'
                placeholder="Routine Goal Required"
                value={goal}
                required
                />
                <button className="button" type="submit">Submit Routine</button>
            </form>      

        <h1>
            My Routines
        </h1>

        <div>
            {myRoutines.map( routine => {
                return(
                    <div key={routine.id}>
                    <p>Name: {routine.name}</p>
                    <p>Description: {routine.goal}</p>
                </div>
                );
            })}
        </div>

    </>
    )
}

export default MyRoutines;