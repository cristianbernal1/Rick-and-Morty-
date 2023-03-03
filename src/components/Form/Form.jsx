import React from "react"
import { validation } from "./validation.jsx"
import style from "../Form/form.module.css"

export default function Form (props) {
    const [userData, setUserData] = React.useState({
        username :"",
        password:"",
    })
    const [errors , setErrors] = React.useState({
        username:"",
        password:""
    })
 
    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        setErrors(validation( {
            ...userData,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }
 return (
    <>
    <h1 className={style.h1}>:Rick and morty, character's finder:</h1>
    <form onSubmit={handleSubmit} className = {style.backgroundC}>
    <div  >
        <label className={style.label} >Username: </label>   
        <input className={style.input}
        type="text"
        name="username"
        value={userData.username}
        onChange = {handleInputChange}
        placeholder= 'Put your Email'/>
        <p className={style.p}>{errors.username} </p>  
 
        <label className={style.label}>Password: </label>   
        <input className={style.input}
        type="text"
        name="password" 
        value={userData.password}
        onChange = {handleInputChange}
        placeholder = 'Put your password'
        />
        <p className={style.p}>{errors.password} </p> 
    </div>
    <button className={style.login}>Login</button>
    </form>
    </>
)



}