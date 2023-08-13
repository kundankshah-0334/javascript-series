import React from "react";

const SlotM = (props) =>  {
  // let a = 1;
  // let b = 1;
  // let c = 5;


  // let a = props.x;
  // let b = props.y;
  // let c = props.z;

  let {a,b,c} = props;

  if( a === b && b === c){
    return (
      <>
      <div className="inner_h">
      <h1 >
      {a} {b} {c}
      </h1>
      <h3>This is matching</h3>
      </div>
      <hr />
      </>
    );
  }else{
    return (
      <>
      <div className="inner_h">
      <h1 >
      {a} {b} {c}
      </h1>
      <h3>This is not matching</h3>
      </div>
      <hr />
      </>
    
    );
  }
}

export default SlotM;
