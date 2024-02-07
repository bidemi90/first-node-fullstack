import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const navigate=useNavigate()
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    try {
      const response = await axios.post(
        "http://localhost:4367/new_user/signup",
        user
      );
      console.log(response.data);
  navigate("/login")
    } catch (error) {
      console.error(error);
      // Handle the error as needed
      alert(error.response.data.message)
      console.log(error.response.data.message);

    }
  };

  return (
    <section className="bg-dark">
      sign up page
      <div className="col-6 bg-primary p-3">
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <label htmlFor="name" className="form-label">
            Name:
            <input
              
              type="text"
              name="name"
              className="form-control"
              value={user.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
            <input
              
              type="number"
              name="phoneNumber"
              className="form-control"
              value={user.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="form-label">
            Email:
            <input
              
              type="email"
              name="email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password" className="form-label">
            Password:
            <input
              
              type="password"
              name="password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
