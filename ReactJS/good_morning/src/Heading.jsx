import React from 'react';
import {Name , Age } from "./List";
function Heading() {
    return <h1>Hey This is Component In React</h1>
}
function Para () {
    return <p>This is the list of Audios</p>
}


function List(){
    return (
        <ol>
        <li>Matrix</li>
        <li>Parralel World</li>
        <li>Money Hell</li>
        <li>Magnet II</li>
        <li>{Name()}</li>
        <li>{Age()}</li>
    </ol>
    );
}

export default Heading;
export {List , Para , Name};