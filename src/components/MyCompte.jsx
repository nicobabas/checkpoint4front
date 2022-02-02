import Login from './Login';
import Register from './Register';
import { NavLink as Link } from 'react-router-dom';
import '../styles/mycompte.css';

const MyCompte = () => {
  return (
    <div className="mycompte">
      <div className="mycompte_choice">
        <Link to={`/login`}>
          <div className="mycompte_button flex border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white">
            <button onClick={<Login />}>se connecter</button>
          </div>
        </Link>
        <Link to={`/signup`}>
          <div className="mycompte_button flex border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white">
            <button onClick={<Register />}>créer mon compte</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyCompte;
