import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/BookItem.css';
import { deleteBook } from '../redux/books/booksSlice';

const BookItem = (
  {
    item_id, title, author, category, // eslint-disable-line
  },
) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('delete');
    console.log('itemId', item_id);
    console.log('author', author);
    dispatch(deleteBook(item_id));
  };

  return (
    <>
      <div className="flexRow listContainer">
        <div>
          <p>{category}</p>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={handleDelete}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
        <p>25%</p>
        <div>
          <p>Chapter 2</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </>
  );
};

BookItem.propTypes = {
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
