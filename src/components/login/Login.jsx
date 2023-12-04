import { TextField } from '@mui/material'
import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import Home from '../home/Home'

const Login = () => {
    const [un,setUn] =useState('')
    const [pwd,setPwd] =useState('')
    const [error,setError]=useState(false)
    const navigate=useNavigate();

    const readusername = (event) =>{
        event.preventDefault();
        setUn(event.target.value);
        console.log(un);

    }
    const readpassword = (event) =>{
        event.preventDefault();
        setPwd(event.target.value);
        console.log(pwd);
    }

    const savedata =(event)=>{
        event.preventDefault();
        if(un.trim()==='' || pwd.trim() === '')
        {
            setError(true)
            return
        }
        else
        {
            setError(false)
            navigate('/home')
        }

    }

  return (
    <div>
        <form className='tt'>
        <h1 className='aa'>SIGN IN</h1>
        USER NAME<input type="text"  onChange={readusername}/><br/><br/>
        PASSWORD<input type="password" onChange={readpassword}/><br/><br/>
        <button type="submit" onClick={savedata} >LOG IN</button><br/>
        {error && 'All fields must be entered'}
        </form>
         
    </div>
  )
}

export default Login
