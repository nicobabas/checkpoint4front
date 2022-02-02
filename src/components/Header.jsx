import '../styles/header.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between pt-3 pl-3 pr-3 pb-3">
          <div className="header">
            <Link to="/">
              <img className="header_img" src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/participate">Mes souvenirs</Link>
              </li>
              <li>
                <Link to="/creationbook">créer son book</Link>
              </li>
              <li>
                <Link to="/moncompte">Mon compte</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
