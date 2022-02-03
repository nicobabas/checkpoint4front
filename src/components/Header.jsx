import '../styles/header.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem('token');
  console.log(token);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

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
              {token ? (
                <div className="flex flex-row">
                  <li>
                    <Link to="/mesbooks">Mes souvenirs</Link>
                  </li>
                </div>
              ) : null}

              <li>
                <Link to="/creationbook">créer son book</Link>
              </li>
              {token ? (
                <div className="flex flex-row">
                  <li className="text-black ml-2" onClick={() => logout()}>
                    DECONNEXION
                  </li>
                </div>
              ) : (
                <Link to="/moncompte">
                  <li className="liMenu">MON COMPTE</li>
                </Link>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
