import React from "react";

const ToDoList = (props) => {


    
    return(
        <>
            <div className="todo_style">
                <button className="cross_x" 
                onClick={()=>{
                    props.onSelect(props.id);
                }}>x</button>
               <li>{props.val}</li>
            </div>
        </>
    ) 

};

export default ToDoList;
