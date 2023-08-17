import React, { useState } from "react";


const App = () => {

  const[fullName ,setName] = useState({
    Fname : "",
    Lname : "",
    email : "",
    phone : "",
  });

    const valueEvent = (event) => {

    const {value , name } = event.target;

    setName ( (preVal) => {
      if(name==="Fname"){
        return {
              Fname : value,
              Lname : preVal.Lname,
              phone : preVal.phone,
              email : preVal.email
        }

      } else if(name==="Lname") {
        return {
              Fname : preVal.Fname,
              Lname : value,
              phone : preVal.phone,
              email : preVal.email
        }
      } else if(name==="email") {
        return {
              Fname : preVal.Fname,
              Lname : preVal.Lname,
              phone : preVal.phone,
              email : value
        }
      } else if(name==="phone") {
        return {
              Fname : preVal.Fname,
              Lname : preVal.Lname,
              phone : value,
              email : preVal.email
        }
      }
    });

  };

    const onSubmit = (event) => {
      event.preventDefault();
      alert("Data Submitted");
    // setFullName();       ///////
  };

  return (
     <>
     <form  onSubmit={onSubmit}>
        <div>
          <h1>Hello {fullName.Fname} {fullName.Lname}</h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <input
            type="text"
            placeholder="Enter First Name" 
            name="Fname"
            onChange={valueEvent}
          /> 
          <input
            type="text"
            placeholder="Enter Second Name" 
            name="Lname"
            onChange={valueEvent}
          /> 
          <input
            type="email"
            placeholder="Enter Email" 
            name="email"
            onChange={valueEvent}
          /> 
          <input
            type="number"
            placeholder="Enter Mobile" 
            name="phone"
            onChange={valueEvent}
          /> 
          <button type="submit">Submit</button>
        </div>
     </form>

     </>
  );
};

export default App;
