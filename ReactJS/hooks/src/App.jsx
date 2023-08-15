// import React, { useState } from "react";

// const App = () => {
  
//       const state = useState();
//       const [count , setCount] = useState(0);

//       const IncreamentNumber = () => {
//       setCount(count+1);
//       // console.log("clicked" + count );
// };

//   return (
//     <>
//       <div class="container">
//         <h1>{count}</h1>
//         <button onClick={IncreamentNumber}>Click Me</button>
//        </div>
//     </>
//   );
// }
// export default App;



import React, { useState } from "react";

const App = () => {
  
      let newtime  = new Date().toLocaleTimeString();

      const [ctime , setTime] = useState(newtime);

      const updateTime = () => {
         newtime  = new Date().toLocaleTimeString();
       setTime(newtime);
};

  return (
    <>
      <div class="container">
        <h1>{ctime}</h1>
        <button onClick={updateTime}>Get Time</button>
       </div>
    </>
  );
}
export default App;



