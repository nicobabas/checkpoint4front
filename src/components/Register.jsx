import { useState } from 'react';
import axios from 'axios';
import '../styles/register.css';

const url = 'http://localhost:8000/security/signup';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const newUser = { email: email, password: password };
      axios.post(url, newUser).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          console.log(data, 'User is successfully registered');
          setError('');
          setEmail('');
          setPassword('');
        }
      });
    } else setError('All fields are required');
  };

  return (
    <div className="register">
      <form className="register_form" onSubmit={handleSubmit}>
        {error && <p className="text-danger">{error}</p>}
        <h2 className="register-h2 mb-3">Register</h2>
        <div className="register_email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="  entrez votre email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register_password mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="  entrez votre mot de passe"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="register_button flex border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white btn btn-warning"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default Register;
