import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Updated import
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Updated hook

  function handSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/login', { email, password })
      .then(res => {
        console.log(res);
        if (res.data === "Login Successfully") {
          navigate('/home'); // Updated redirection
        }
      })
      .catch(err => console.log(err));
  }

    return(
        <div className="d-flex-container">
        <div className="p-3 login-container">
          <form onSubmit={handSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
  
    )

}
export default Login