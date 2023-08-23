import React from "react";

const Sresult = (props) => {
    const ing = `https://source.unsplash.com/600x500/?${props.val}`;
    return (
    <>
    <img src={ing} alt="..." />

    </>
  );
}

export default Sresult;