import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote"
import Note from "./Note"
// import { useState } from "react";

const App = () => {
  const [addItem , setAddItem] = useState([]);
  const addNote = (note) => {
    //  alert("clicked");

     setAddItem((preData) => {
      return [...preData , note];
  });
  // console.log(note);
};
  const onDelete = (id) => {
    setAddItem((oldData) => 
      oldData.filter((currData , ind) => {
        return ind !==id;
      })
    )

  }



  return (
    <>
    <Header />
    <Createnote passNote={addNote} />
 

  {  addItem.map((val , index ) => {
      return ( <>
      <Note
        key = {index}
        id = {index} 
        title = {val.title}
        content = {val.content}
        deleteItem = {onDelete}
        />
      </>
      )
    })}
    <Footer />

    </>
  );
}

export default App;
