import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
const Note = () => {
  return (
    <>
    <div className="note">
      <h1>This is title</h1>
 
      <p>This is content and ...</p>
      <Button>
        <DeleteOutlineIcon  />
      </Button>
    </div>
    </>
  );
}

export default Note;