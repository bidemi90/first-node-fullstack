import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };
const navigate=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4367/new_user/login', credentials);
      console.log(response.data);
localStorage.setItem("token",response.data.token);
navigate("/dashbord")
      // Handle the response as needed
    } catch (error) {
      console.error(error);
      // Handle the error as needed
      alert(error.response.data.message)
      console.log(error.response.data.message);
    }
  };

  return (
    <section className='col-12 bg-dark'>
      login
      <div className='col-6 bg-primary p-3'>
        <form onSubmit={handleSubmit} className='d-flex flex-column'>
          <label htmlFor="email" className='form-label'>
            Email:
            <input required type="email" name='email' className='form-control' value={credentials.email} onChange={handleChange} />
          </label>
          <label htmlFor="password" className='form-label'>
            Password:
            <input required type="password" name='password' className='form-control' value={credentials.password} onChange={handleChange} />
          </label>
          <button type="submit" className='btn btn-danger'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
