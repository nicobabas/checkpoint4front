import '../styles/bookscard.css';

const BookCard = ({ book }) => {
  return (
    <div className="bookCard bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h1 className="bookcard_h1 mb-2 text-2xl font-bold text-gray-900 dark:text-white">
        {book.name}
        <img
          className="bookCard_img rounded-l-lg  mt-2"
          src={book.image}
          alt={book.name}
        />
      </h1>
    </div>
  );
};

export default BookCard;
