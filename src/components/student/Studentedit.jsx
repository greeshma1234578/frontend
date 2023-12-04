import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './student.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Update } from '@mui/icons-material'


const Studentedit = (props) => {
    var [inputs,setInputs]=useState(props.data)

    const navigate = useNavigate();
  
    const inputhandler =(event)=> {
    const{name,value}=event.target  
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs);
    }
  
    const savedata = ()=>{
     
     
     if(props.method==='put')
     {
        axios.put("http://localhost:4005/sedit/"+inputs._id,inputs)
        .then((response)=>{alert("Updated")
        window.location.reload(false)
     })
        .catch(err=>console.log(err))
        
     }
    }
  
     if(Update)
        
    return (
        <div className='aa'>
        <Typography>REGISTRATION FORM</Typography><br/>
        <TextField id="filled-basic" label="Admission No" variant="filled" name="Admno" value={inputs.Admno} onChange={inputhandler}/><br/><br/>
        <TextField id="filled-basic" label="NAME" variant="filled" name="Sname" value={inputs.Sname} onChange={inputhandler}/><br/><br/>
        <TextField id="filled-basic" label="Age" variant="filled" name="Age" value={inputs.Age} onChange={inputhandler}/><br/><br/>
        Status:
        <select name='Status' value={inputs.status} onChange={inputhandler}>
          <option value="Active"> Active</option>
          <option value="Inactive"> Inactive</option>
        </select><br/>
        <Button variant="contained" onClick ={savedata}>SUBMIT</Button>
      </div>
    )
}

export default Studentedit
