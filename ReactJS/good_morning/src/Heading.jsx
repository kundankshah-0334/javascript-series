import React from 'react';
import {add , sub , mul , div} from "./List";
function Heading() {
    return <h1>Hey This is Component In React</h1>
}
function Para () {
    return <p>This is the list of Audios</p>
}


function List(){
    return (
        <ol>
        <li>Add of two number 23 and 8 = {add(23,8)}</li>
        <li>Sub of two number 23 and 8 = {sub(23,8)}</li>
        <li>Mul of two number 23 and 8 = {mul(23,8)}</li>
        <li>Div of two number 23 and 8 = {div(23,8)}</li>
       
       
      
    </ol>
    );
}

export default Heading;
export {add , sub , mul , div , Para , List};