import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BooksCard from './BooksCard';
import '../styles/mybooks.css';

const MyBooks = () => {
  const [error, setError] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:8000/books').then((response) => {
      setBooks(response.data);
    });
  };
  const deleteBook = (id) => {
    axios.delete(`http://localhost:8000/books/${id}`).then(({ data }) => {
      if (data.error) setError(data.error);
      else {
        setError('');
        window.location.reload();
      }
    });
  };

  return (
    <div className="mybook">
      <div className="mybook_card">
        {error && <p className="register-error">{error}</p>}
        {books?.map((book) => (
          <div className="mybook_div" key={book.id}>
            <BooksCard book={book} />
            <div className="mybook_button">
              <button
                type="button"
                className="mybook_button mt-2 flex place-content-center border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white"
              >
                Voir
              </button>
            </div>
            <div className="mybook_button">
              <button
                onClick={() => deleteBook(book.id)}
                type="button"
                className="mybook_button mt-2 flex place-content-center border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
