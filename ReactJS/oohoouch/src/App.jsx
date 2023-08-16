import React, { useState } from "react";


const App = () => {
  let color = "#053554";
  let oldClick = "Click Me";
  const [bg , setBg ] = useState(color);
  const [Click , newClick] = useState("Click Me");

  const changeBg = () => {
    const newbg = "#639e1b";
    // click = "Ohho oo";
    setBg(newbg);
    newClick("OmmFoo");
}
  const restore = () => {
    const oldbg = "#053514";
    // click = "Ohho oo";
    setBg(oldbg);
    newClick("Done");
}

  return (
    <>
      <div  style={{backgroundColor : bg}}>
        <button onMouseEnter={changeBg} onMouseLeave={restore}>{Click}</button>
       </div>
    </>
  );
}
export default App;



