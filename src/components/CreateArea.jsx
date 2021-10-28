import React, { useState } from "react";
import AddBoxRounded from "@material-ui/icons/AddBoxRounded";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [noteClicked, setNoteCLicked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        {noteClicked && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={noteClicked ? "3" : "1"}
          onClick={() => setNoteCLicked(true)}
        />

        <Zoom in={noteClicked}>
          <Fab onClick={submitNote}>
            <AddBoxRounded />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
