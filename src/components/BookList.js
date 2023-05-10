import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/booksSlice';
import BookItem from './BookItem';

const RenderList = () => {
  const { bookList } = useSelector((store) => store.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const allBooks = Object.values(bookList).flat();

  return (
    <>
      {allBooks.map((book) => (
        <BookItem key={book.item_id} {...book} />
      ))}
    </>
  );
};

export default RenderList;
