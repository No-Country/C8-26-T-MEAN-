// import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from 'react-json-pretty'
// import 'react-json-pretty/themes/monikai.css'
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import User from './User'

// const Profile = () => {

//     const [users, setUsers] = useState([])

//     useEffect(() =>{
//         const url = "http://localhost:3001/users"
//         axios.get(url)
//         .then(res => setUsers(res.data.data))
//         .catch(e => console.log(e, "entro"))
//     },[])
//     console.log(users);
    
//     return (
    
//             <div>
//                 {
//                     users.map((user, i) =>{
//                         return i < 1 ? (  <User {...user} key={i}/>) : null
//                     }) 
//                 }
    

//             </div>
//         )
    


    
// }

// export default Profile;