import React from "react";
import { useParams , useLocation ,useNavigate } from "react-router-dom";

const User = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(history);
 
    const {username , lname} = useParams();
    return (
      <>
        <h1>This is {username}  {lname} page</h1>
        <h3>This is path : {location.pathname}</h3>
        <button onClick={() => {navigate(-1);}}>Go Back</button>
      </>
    );
  }
  
  export default User;