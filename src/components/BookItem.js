import PropTypes from 'prop-types';

const BookItem = (
  {
    category,
    title,
    author,
    progress,
    chapter,
  },
) => (
  <>
    <div>
      <p>{category}</p>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
      <p>{progress}</p>
      <p>{chapter}</p>
      <button type="button">Update Progress</button>
    </div>
  </>

);

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default BookItem;
