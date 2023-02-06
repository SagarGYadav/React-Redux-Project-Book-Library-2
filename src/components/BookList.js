import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "./UI/Button";

import { deleteBook } from "../store/features/bookSlice";
import classes from "./BookList.module.css";

const BookList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((store) => store.books);

  const handleRemoveBook = (id) => {
    dispatch(deleteBook({ id }));
    window.localStorage.setItem(
      "books",
      JSON.stringify(books.filter((book) => book.id !== id))
    );
  };

  const renderCard = () =>
    books.map((book) => (
      <div className={classes.card} key={book.id}>
        <div className={classes.details}>
          <h3 className={classes.name}>{book.name}</h3>
          <span className={classes.description}>{book.description}</span>
        </div>
        <div className={classes.buttons}>
          <Link to={`edit-book/${book.id}`}>
            <button className={classes.editBookBtn}>Edit</button>
          </Link>
          <button
            className={classes.deleteButton}
            onClick={() => handleRemoveBook(book.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <div className={classes.addBook}>
        <Button onClick={() => navigate("/add-book")}>Add Book</Button>
      </div>
      <div>
        {books.length ? (
          renderCard()
        ) : (
          <p className={classes.noBook}>No Book</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
