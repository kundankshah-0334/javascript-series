import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
    const [img , setImg] = useState('');
    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    };
  return (
    <>
    <div className="searchbar">
      <input type="text" placeholder="Type Anything" value={img}   onChange={inputEvent}/>
      </div>
      <div className="sresult">
      <Sresult val={img}/>
      </div>

    </>
  );
}

export default Search;