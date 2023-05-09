import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);
  const [formValues, setformValues] = useState({
    item_id: '1',
    title: '',
    author: '',
  });

  const onInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);

    if (formValues.title.trim().length <= 0 || formValues.author.trim().length <= 0) {
      setformSubmitted(false);
      return;
    }

    dispatch(addBook(formValues));

    setformSubmitted(false);
  };

  return (
    <>
      <div className="form-container">
        <h3>Add new Book</h3>
        <form className="form" onSubmit={onSubmit}>
          <input type="text" placeholder="book title" value={formValues.title} name="title" onChange={onInputChange} />
          <input type="text" placeholder="book author" value={formValues.author} name="author" onChange={onInputChange} />
          <button className="btn-submit" type="submit">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default NewBook;

// const NewBook = () => (
//   <>
//     <p>Add New Book</p>
//     <form>
//       <input type="text" placeholder="Book title" />
//       <input type="text" placeholder="Book Author" />
//       <select id="cars">
//         <option value="" hidden>Select Category</option>
//         <option value="author-1">Category 1</option>
//         <option value="author-2">category 2</option>
//       </select>
//       <button type="button">Add Book</button>
//     </form>
//   </>
// );

// export default NewBook;
