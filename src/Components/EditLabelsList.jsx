import React from "react";
import { useNavigate } from "react-router-dom";
import { useNoteAppContext } from "../Provider/NoteAppProvider";
import { InputGroup, Form } from "react-bootstrap";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";

function EditLabelsList({ label }) {
  const { editLabel, deleteLabel } = useNoteAppContext();

  const navigate = useNavigate();
  const styles = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  };

  const handleEditLabel = (e) => {
    const labelId = label.id;
    const label_name = e.target.value;
    if (e.keyCode === 13) {
      editLabel(labelId, label_name);
    }
  };

  const handleDeleteLabel = (e) => {
    const labelId = label.id;
    deleteLabel(labelId);
    navigate("/");
  };
  return (
    <div key={label.id}>
      <InputGroup className="mb-2 align-items-center">
        <LabelOutlinedIcon />
        <Form.Control
          key={label.label_name}
          style={styles}
          id={label.id}
          placeholder={label.label_name}
          onKeyDown={handleEditLabel}
          defaultValue={label.label_name}
        />
        <DeleteForeverOutlined onClick={handleDeleteLabel} id={label.id} />
      </InputGroup>
    </div>
  );
}

export default EditLabelsList;
