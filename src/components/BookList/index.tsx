import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../redux/books/selectors";
import { useEffect } from "react";
import { fetchBooks } from "../../redux/books/operations";
import BookItem from "../BookItem";
import { Book } from "../../types";
import { List } from "./BookList.styled";

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBooks());
  }, [dispatch]);
  const books = useSelector(selectBooks);

  return (
    <List>
      {books.map((book: Book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </List>
  );
};

export default BookList;
