import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePage from './CreatePage';
import { Link } from 'react-router-dom';
import '../styles/bookdetails.css';

const Bookdetails = () => {
  const params = useParams();
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getBooks();
    getPages();
  }, []);

  const getBooks = () => {
    axios.get(`http://localhost:8000/books/${params.id}`).then((response) => {
      setBooks(response.data);
    });
  };

  const getPages = () => {
    axios.get(`http://localhost:8000/addpage/${params.id}`).then((response) => {
      setPages(response.data);
    });
  };
  console.log(pages);
  const handleSubmit = () => {
    axios
      .delete(`http://localhost:8000/addpage/${pages.id}`)
      .then((response) => {
        setPages(response.data);
      });
  };

  return (
    <div className="bookdetails">
      <div>
        <div className="texte mb-3 mt-3">
          <h1>
            Bienvenue sur ton livre photo : <strong>{books.name}</strong>
          </h1>
          <h2>voici toutes les photos que tu as téléchargé</h2>
          <p>tu as la possibilité d&apos;en supprimer ou d&apos;en ajouter</p>
          <Link to={`/mesbooks/presentation/${books.id}`}>
            <button className="mybook_button mt-2 flex place-content-center border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white">
              apercu du livre
            </button>
          </Link>
        </div>
      </div>

      <div className="book_globaldiv">
        {pages?.map((page) => (
          <div key={page.id} className="book_globaldiv">
            <div key={page.id} className="book_image_div">
              <img className="book_image" src={page.image} alt={page.id} />
              <button onClick={handleSubmit}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <CreatePage />
      </div>
    </div>
  );
};

export default Bookdetails;
