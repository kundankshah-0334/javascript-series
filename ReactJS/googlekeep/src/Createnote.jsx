import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Createnote = (props) => {
 
    const [expand , setExpand ] = useState(false);

    const [note , setNote] = useState({
        title: "",
        content : ""
    });

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content : ""
        })
    }

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
 
        const expandIt = () => {
            setExpand(true);
        }
        const backNormal = () => {
            setExpand(false);
        }

  return (
    <>
    <div className="main_div" onDoubleClick={backNormal}>
       <form> 
        <input type="text" name="title" value={note.title} onChange={setData} placeholder="Title" autoComplete="off" />
 
        <textarea onClick={expandIt}  rows="" name="content" value={note.content} onChange={setData} column="" placeholder="Type note" ></textarea>
        <Button onClick={addEvent}>
            <AddIcon className="add_btn" />
        </Button>
      
 
       {/* {
        expand ?
        <input type="text" name="title" value={note.title} onChange={setData} placeholder="Title" autoComplete="off" />
        : null
       } 
 
        <textarea onClick={expandIt}  rows="" name="content" value={note.content} onChange={setData} column="" placeholder="Type note" ></textarea>
        { expand ?
        <Button onClick={addEvent}>
            <AddIcon className="add_btn" />
        </Button>
        : null
       }  */}
 
       </form>
    </div>
    </>
  );
};

export default Createnote;
