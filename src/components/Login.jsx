import { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';

const url = 'http://localhost:8000/security/login';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email: email, password: password };
      axios.post(url, user).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          window.location.href = '/';
        }
      });
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <div className="login">
      <form className="login_form" onSubmit={handleSubmit}>
        {error && <p className="alert alert-danger">{error}</p>}
        <h2 className="login_h2 mb-3">Se connecter</h2>
        <div className="login_email">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="  entrez votre email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login_password mb-3">
          <label htmlFor="password" className="form-label">
            Mot de passe:
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="  entrez votre mot de passe"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="login_button flex border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white btn btn-warning"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default Login;
