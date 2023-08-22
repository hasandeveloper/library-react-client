import React, { useEffect, useState } from "react"
import axios from "axios"
import { REGISTER_URL } from "../utils/apiURL"
import { useNavigate } from "react-router-dom"

const Registration = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        message: ""
    })

    const navigate = useNavigate();

    //onChange handler
    const onChangeHandler = (e) => {
        setFormData({
            ...formData, //means accept all form data
            //for below meaning let say email="fa@gmail.com"
            [e.target.name]: e.target.value,
        })
        
    }

    const submitHandler = async (e) =>  {
        e.preventDefault();
        try{
            const response = await
            axios.post(REGISTER_URL,{ 
                user: {
                    email: formData.email,
                    password: formData.password
                }
            }) 
            
            if(response.status === 200){
                localStorage.setItem('token', response.headers["authorization"]);
                navigate("/home")
            }
            
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
        <h1>Registration</h1>

        <form onSubmit={submitHandler}> 
            <div>
                <h1>{error.message}</h1>
            </div>

            <div>
                <input value={formData.email} placeholder="Email" type="email" onChange={onChangeHandler} name="email" />
            </div>

            <div>
                <input value={formData.password} placeholder="Password" type="password" onChange={onChangeHandler} name="password" />
            </div>

            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Registration