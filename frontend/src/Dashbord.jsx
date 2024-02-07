import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashbord = () => {

  const uri = "http://localhost:4367/new_user/verifyusertoken";
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(token);
      axios.get(uri, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err);
          clearInterval(interval);
          Navigate("/signup");
        });
    }, 1000); // 600000 milliseconds = 10 minutes
  
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  





  return (
    <div className=' col-10 bg-primary text-light fw-bold '>

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab commodi neque fuga delectus, cupiditate, tempora mollitia maiores sapiente eius repellendus tenetur provident id fugiat animi aliquid expedita est! Quas, optio?

        <p className=' p-5 bg-danger col-8'>
            welcome
        </p>
    </div>
  )
}

export default Dashbord