import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./UI/Button";
import TextField from "./UI/TextField";
import { editBook } from "../store/features/bookSlice";

const EditBook = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const navigate = useNavigate();
  const existingBook = books.filter((book) => book.id === params.id);
  const { name, description } =
    existingBook && existingBook.length > 0 ? existingBook[0] : {};
  const [values, setValues] = useState({
    name,
    description,
  });

  const handleEditBook = () => {
    setValues({ name: "", description: "" });
    dispatch(
      editBook({
        id: params.id,
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
        inputProps={{ type: "text", placeholder: "Please enter book name" }}
      />
      <br />
      <TextField
        label="Description"
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        inputProps={{
          type: "description",
          placeholder: "Please enter book description",
        }}
      />
      <Button onClick={handleEditBook}>Edit</Button>
    </div>
  );
};

export default EditBook;
