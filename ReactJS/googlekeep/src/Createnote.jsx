import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Createnote = () => {
  return (
    <>
    <div className="main_div">
       <form>
        <input type="text" placeholder="Title" autoComplete="off" />
        <textarea rows="" column="" placeholder="Type note" ></textarea>
        <Button>
            <AddIcon className="add_btn" />
        </Button>
       </form>
    </div>
    </>
  );
}

export default Createnote;
