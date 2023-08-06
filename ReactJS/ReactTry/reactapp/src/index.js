import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
 

ReactDOM.render(<h1>Hello  World!!</h1> 
, document.getElementById("root"));

        // ReactDOM.render(React.createElement("h1", null ,  "Hello  dfg  gooj !!"
        //   ), document.getElementById("root"));

        // var h1 = document.createElement("h1");
        // h1.innerHTML = "Hello Maharaj";
        // document.getElementById("root").appendChild(h1);


ReactDOM.render(
<React.Fragment>
<h1>Hello  World!!</h1> 
<h2>Hello  World!!</h2> 
<p>Hello  World!!</p> 

</React.Fragment>

, document.getElementById("root"));
