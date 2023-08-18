import React, { useState } from "react";

const App = () => {

  const [ inputList , setInputList] = useState();

  const [ items , setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }
  const listOfItems = () => {
   setItems((oldItems) => {
    return [ ...oldItems , inputList]
   });
   setInputList("");
  }

 return  <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a task" onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>
        <ol>
 

          {
            items.map((itemVal) => {
              return <li>{itemVal}</li>
            })
          }
        </ol>
      </div>
    </div>
   </> ;
};

export default App;
