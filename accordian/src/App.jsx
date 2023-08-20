import React, { useState } from "react";
import api_auestion from "./api"
import Accord from "./accord"

const  App = () => {

  const [data , setData] = useState(api_auestion);
  return (
     <>
     <section className="main-div">
     <h1>Inteview Questions</h1>
     {
       data.map((currElement) => {
      return <Accord id={currElement.id} {...currElement}/>;
     })
     }
     </section>
     </>
  );
}

export default App;
