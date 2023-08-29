import React, { useState } from 'react';
import axios from 'axios';
import { LOGIN_URL } from '../utils/apiURL';
import { useNavigate } from 'react-router';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const  onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const [error, setError] = useState({
    message: ""
  })

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const response = await
      axios.post(LOGIN_URL,{
        user: {
          email: formData.email,
          password: formData.password
        }
      })
      
      if(response.status === 200){
        localStorage.setItem('token', response.headers["authorization"]);
          navigate("/home")
      }

      console.log(response)
    }catch(error){
      console.log(error)

      if(error.response.status === 422){
          console.log( error.response.data)
          setError({
              message: error.response.data.message
          })
      }else{
          setError({
              message: "Something went wrong"
          })
      }
    }
  }
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitHandler}>
          <div>
            <h1>
                <span>{error.message}</span>
            </h1>
          </div>

          <div>
              <input value={formData.email} placeholder="Email" type="email" onChange={onChangeHandler} name="email"></input>
          </div>

          <div>
              <input value={formData.password} placeholder="password" type="password" onChange={onChangeHandler} name="password"></input>
          </div>

          <div>
            <button type="submit">Login</button>
            <a href="/registration">Sign Up?</a>
          </div>

      </form>
    </div>
  )
}

export default Login