import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postBook, getBooks } from '../redux/books/booksSlice';
import '../styles/NewBook.css';

const NewBook = () => {
  const categories = [
    'Science-Fiction',
    'Horror',
    'Action',
    'Romance'];
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBooks();
  }, [dispatch]);

  const [formValues, setformValues] = useState({
    title: '',
    author: '',
    categores: '',
    item_id: '',
  });

  const onInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (formValues.title.trim().length <= 0 || formValues.author.trim().length <= 0) {
      return;
    }

    setIsLoading(true);
    dispatch(postBook({
      ...formValues,
      item_id: uuidv4(),
    })).then(() => {
      setIsLoading(false);
      setformValues({
        title: '',
        author: '',
        item_id: '',
        category: '',
      });
      dispatch(getBooks());
    }).catch(() => {
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div className="form-container">
        <h3>ADD NEW BOOK</h3>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="inputCase"
            type="text"
            placeholder="Book title"
            value={formValues.title}
            name="title"
            onChange={onInputChange}
          />
          <input
            type="text"
            className="inputCase authorCase"
            placeholder="Book author"
            value={formValues.author}
            name="author"
            onChange={onInputChange}
          />
          <select name="category" placeholder="Choose one..." className="inputCase selector" value={formValues.category} onChange={onInputChange}>
            <option value="">Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="addBookContainer">
            <button className="btn-submit" type="submit">
              ADD BOOK
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default NewBook;
