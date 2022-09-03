import React from "react";
import { Activities} from ".";

const activities = () => {



    return (
        <div>
            Activities
        </div>
    )
}

export default activities;


//     return !activities(
//         <main className="activitiesList">
//           <div>Sorry, no activities have been created. Check back later.</div>
//         </main>
//       ) : (
//         <main className="activitiesList">
//           <div>
//             {token ? (
//               <NavLink
//                 key="2"
//                 to="/addactivity"
//                 className="createActivityButtonforall"
//               >
//                 Create New Activity
//               </NavLink>
//             ) : null}
//           </div>
//           {activities.map((activity) => {
//     return (
//         <div>
//             Activites
//         </div>

//         <section className="indActivity" key={activity.id}>
//             <p> ActivityId #{activity.id}</p>
//             <h4>{activity.name}</h4>
//             <p>{activity.description</p>
//             <p>
//                 {token ? (
//                     <NavLink
//                     key="1"
//                     to={}>
//                         Edit the Activity
//                     </NavLink>

//                 ) : null}
//             </p>
//         </section>
//     );
