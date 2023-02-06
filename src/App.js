import { Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="container">
      <div className="main-heading">
        <h1>DAVZON BOOK LIBRARY</h1>
      </div>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
