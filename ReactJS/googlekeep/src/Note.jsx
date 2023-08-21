import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
const Note = (p) => {

  const deleteNote = () => {
    p.deleteItem(p.id);
  }
  return (
    <>
    <div className="note">
      <h1>{p.title}</h1>
 
      <p>{p.content}</p>
      <Button onClick={deleteNote}>
        <DeleteOutlineIcon className="del_btn" />
      </Button>
    </div>
    </>
  );
}

export default Note;