import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const [formValues, setformValues] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
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

    dispatch(addBook({
      ...formValues,
      item_id: uuidv4(),
    }));

    setformValues({
      item_id: '',
      title: '',
      author: '',
      category: '',
    });
  };

  const categories = [
    'science-fiction',
    'horror',
    'action',
    'romance',
  ];

  return (
    <>
      <div className="form-container">
        <h3>Add new Book</h3>
        <form className="form" onSubmit={onSubmit}>
          <input type="text" placeholder="book title" value={formValues.title} name="title" onChange={onInputChange} />
          <input type="text" placeholder="book author" value={formValues.author} name="author" onChange={onInputChange} />
          <select name="category" placeholder="Choose one..." value={formValues.category} onChange={onInputChange}>
            <option value="">Choose one...</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button className="btn-submit" type="submit">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default NewBook;
