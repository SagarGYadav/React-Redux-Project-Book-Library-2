import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Button from "./UI/Button";
import TextField from "./UI/TextField";
import { addBook } from "../store/features/bookSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    description: "",
  });

  const handleAddBook = () => {
    setValues({ name: "", description: "" });
    dispatch(
      addBook({
        id: uuidv4(),
        name: values.name,
        description: values.description,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Type book name" }}
      />
      <br />
      <TextField
        label="Description"
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        inputProps={{
          type: "description",
          placeholder: "Type book description",
        }}
      />
      <Button onClick={handleAddBook}>Submit</Button>
    </div>
  );
};

export default AddBook;
