import React from 'react';
import ReactDOM from 'react-dom';
 

ReactDOM.render(<h1>Hello  World!!</h1> 
, document.getElementById("root"));

        // ReactDOM.render(React.createElement("h1", null ,  "Hello  dfg  gooj !!"
        //   ), document.getElementById("root"));

        // var h1 = document.createElement("h1");
        // h1.innerHTML = "Hello Maharaj";
        // document.getElementById("root").appendChild(h1);


ReactDOM.render(
<>
<h2>React Totorial</h2> 
<h3>This all are my Favorite web series</h3> 
<ol>
    <li>Panchyat</li>
    <li>Flames</li>
    <li>Maharani</li>
    <li>Mirzapur</li>
    <li>Cartel</li>
</ol>
</>

, document.getElementById("root"));
