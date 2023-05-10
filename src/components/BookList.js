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

  const keys = Object.keys(bookList);
  const bookData = keys.map((key) => {
    const bookInfo = bookList[key][0];
    return {
      key,
      author: bookInfo.author,
      title: bookInfo.title,
      category: bookInfo.category,
    };
  });

  return (
    <>
      {bookData.map((book) => (
        <BookItem
          key={book.key}
          item_id={book.key}
          author={book.author}
          title={book.title}
          category={book.category}
        />
      ))}
    </>
  );
};

export default RenderList;
