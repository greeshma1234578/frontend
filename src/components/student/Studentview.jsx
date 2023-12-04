import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import Studentedit from './Studentedit';

const Studentview = () => {
    var[students,setStudents]=useState([]);
    var[selected,setSelected]=useState();
    var[update,setUpdate]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:4005/sview")
        .then(response=>{
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    const deletevalues =(id)=>{
        console.log("deleted",id)
        axios.put("http://localhost:4005/updatestatus/"+id)
        .then((response)=>{
            alert("status updated")
            window.location.reload(false);
        })
    }

    const updatevalues = (value) =>{
      console.log("updated",value) 
      setSelected(value)
      setUpdate(true)
    }

    var result=
    <div>
    <Typography>STUDENT VIEW</Typography><br></br>
   <TableContainer >
  <Table >
    <TableHead>
      <TableRow>
        
        <TableCell>Admission No</TableCell>
        <TableCell >Name</TableCell>
        <TableCell >Age</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
        {students.map((value,index)=>{
            return(
                <TableRow key={index}>
                    <TableCell>{value.Admno}</TableCell>
                    <TableCell>{value.Sname}</TableCell>
                    <TableCell>{value.Age}</TableCell>
                    <TableCell>{value.Status}</TableCell>
                    <TableCell><ModeEditIcon onClick={()=>updatevalues(value)}/></TableCell>
                    <TableCell><DeleteIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
                </TableRow>
            )
        })}
    </TableBody>
    
  </Table>
</TableContainer>
</div>
if(update)
{
 result=<Studentedit data={selected} method='put'/>
}
  return (result)
}

export default Studentview
