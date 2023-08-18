import React, { useState } from "react";
import ToDoList from "./ToDoList"

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




  const deleteItem = (id) => {
    console.log("Deleted");
    console.log(id);
 
    setItems((oldItems)=>{
     return  oldItems.filter((arrElem , index)=>{
        return index !== id ;
      });
    });
}



 return  <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a task" value={inputList} onChange={itemEvent} />
        <button className="add_button" onClick={listOfItems}>+</button>
        <ol>
 

          {
            items.map((itemVal , index) => {
              return <ToDoList val={itemVal} id={index} key={index} onSelect={deleteItem}/>

            })
          }
        </ol>
      </div>
    </div>
   </> ;
};

export default App;
