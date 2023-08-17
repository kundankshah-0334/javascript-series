import React, { useState } from "react";


const App = () => {

  const[fullName ,setName] = useState({
    Fname : "",
    Lname : ""
  });

    const valueEvent = (event) => {
    // setName(event.target.value);
    // setName(event.target.name);

    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setName ( (preVal) => {
      if(name==="Fname"){
        return {
              Fname : value,
              Lname : preVal.Lname,
        }

      } else if(name==="Lname") {
        return {
          Fname : preVal.Fname,
          Lname : value,
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
          <input
            type="text"
            placeholder="Enter First Name" 
            name="Fname"
            onChange={valueEvent}
            // value={fullName.Fname}
          /> 
          <input
            type="text"
            placeholder="Enter Second Name" 
            name="Lname"
            onChange={valueEvent}
            // value={fullName.Lname}
          /> 
          <button type="submit">Submit</button>
        </div>
     </form>

     </>
  );
};

export default App;
