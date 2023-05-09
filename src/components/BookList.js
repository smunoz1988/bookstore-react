import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const RenderList = () => {
  const { bookList } = useSelector((store) => store.book);

  return (
    <>
      {bookList.map((book) => (
        <BookItem
          key={book.item_id}
          item_id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </>
  );
};

export default RenderList;
