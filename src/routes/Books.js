import NewBook from '../components/NewBookForm';
import RenderList from '../components/BookList';
import '../styles/BooksContainer.css';

const Books = () => (
  <>
    <div className="booksContainerSection">
      <RenderList />
    </div>

    <NewBook />
  </>

);

export default Books;
