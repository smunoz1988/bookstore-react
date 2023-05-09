import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../styles/BookItem.css';

const BookItem = (
  {
    item_id, title, author, category, // eslint-disable-line
  },
) => {
  const dispatch = useDispatch();
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
            onClick={() => {
              dispatch(removeBook(item_id));
            }}
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
