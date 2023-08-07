import React from 'react';
import ReactDOM from 'react-dom';
 

// ReactDOM.render(<h1>Hello  World!!</h1> 
// , document.getElementById("root"));

        // ReactDOM.render(React.createElement("h1", null ,  "Hello  dfg  gooj !!"
        //   ), document.getElementById("root"));

        // var h1 = document.createElement("h1");
        // h1.innerHTML = "Hello Maharaj";
        // document.getElementById("root").appendChild(h1);


        const s1 =  "Panchyat";
        const s2 =  "Flames";
        const s3 =  "Maharani";
        const s4 =  "Mirzapur";
        const s5 =  "Cartel";

ReactDOM.render(
<>
<h2>React Totorial</h2> 
<h3>This all are my Favorite web series</h3> 
<ol>
    {/* <li>Panchyat</li>
    <li>Mirzapur </li>
    <li>Maharani </li>
    <li>Flames</li>
    <li>Cartel</li> */}
    <li>First Series is {s1} </li>
    <li>Second Series is {s2} </li>
    <li>Third Series is {s3} </li>
    <li>Fourth Series is {s4} </li>
    <li>Fifth is {s5} </li>
</ol>
</>
, document.getElementById("root"));
