import React from "react";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)}>
        <DeleteRoundedIcon />
      </button>
    </div>
  );
};

export default Note;
