import React from "react";

const App = () => {
 return  <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a task" />
        <button>+</button>
        <ol>
          <li>Click Snap</li>
          <li>Hit the Gym</li>
        </ol>
      </div>
    </div>
   </> ;
};

export default App;
