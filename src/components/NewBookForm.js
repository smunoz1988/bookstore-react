const NewBook = () => (
  <>
    <p>Add New Book</p>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book Author" />
      <select id="cars">
        <option value="" hidden>Select Category</option>
        <option value="author-1">Author 1</option>
        <option value="author-2">Author 2</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </>
);

export default NewBook;
