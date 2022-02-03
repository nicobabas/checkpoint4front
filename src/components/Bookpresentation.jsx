/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HTMLFlipBook from 'react-pageflip';
import useWindowWide from './useWidth';
import '../styles/bookpresentation.css';

const Bookpresentation = () => {
  const params = useParams();
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState([]);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const widthScreen = useWindowWide();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const book = useRef();

  useEffect(() => {
    getBooks();
    getPages();
  }, []);

  useEffect(() => {
    if (widthScreen < 600) {
      setWidth(400);
      setHeight(300);
    } else {
      setWidth(Math.ceil((0.9 * widthScreen) / 2));
      setHeight(Math.ceil((0.6 * widthScreen) / 2));
    }
  }, [widthScreen]);

  useEffect(() => {
    setTimeout(() => {
      setTotal(book.current.pageFlip().getPageCount());
    }, 1000);
  }, []);

  const updatePage = ({ data }) => setPage(data + 2);

  console.log(books);
  console.log('page', pages);
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

  return (
    <div className="book_flex" style={{ padding: '50px 0' }}>
      <span
        onClick={() => book.current.pageFlip().flipNext()}
        className={'next button'}
      >
        <i className="fas fa-chevron-right"></i>
      </span>
      <HTMLFlipBook
        onFlip={updatePage}
        width={width}
        height={height}
        ref={book}
      >
        {pages?.map((page) => (
          <div className="page" key={page.id}>
            <img src={page.image} alt={page.id} />
          </div>
        ))}
      </HTMLFlipBook>
      <span
        onClick={() => book.current.pageFlip().flipPrev()}
        className={'previous button'}
      >
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="info-page">
        {page} - {total}
      </span>
    </div>
  );
};

export default Bookpresentation;
