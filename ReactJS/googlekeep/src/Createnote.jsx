import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Createnote = () => {
 
    const [note , setNote] = useState({
        title: "",
        content : ""
    });

    const setData = (event) => {
        const {name , value} = event.target;

        setNote((preVal) => {
            return {
                ...preVal ,
                [name] : value,
            }
        });

        console.log(name)
        }
 

  return (
    <>
    <div className="main_div">
       <form>
        <input type="text" name="title" value={note.title} onChange={setData} placeholder="Title" autoComplete="off" />
        <textarea rows="" name="content" value={note.content} onChange={setData} column="" placeholder="Type note" ></textarea>
        <Button className="btn_add">
            <AddIcon className="add_btn" />
        </Button>
       </form>
    </div>
    </>
  );
};

export default Createnote;
