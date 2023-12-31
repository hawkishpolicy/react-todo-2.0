import React from "react";
import { useNoteAppContext } from "../Provider/NoteAppProvider";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function LabelList({ label }) {
  const { removeLabelFromNote } = useNoteAppContext();
  const labelId = label.id;
  const handleRemoveLabel = () => {
    const noteId = label.notes_id;
    removeLabelFromNote(labelId, noteId);
  };
  
  return (
    <div
      className="d-flex align-items-center"
      style={{ marginBottom: ".5rem" }}
      key={label.label_name}
    >
      <small className="note-label">{label.label_name}</small>
      <HighlightOffIcon
        className="label-delete-icon"
        style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
        label={label}
        onClick={handleRemoveLabel}
      />
    </div>
  );
}

export default LabelList;
