import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Homedashboard = () => {
  
  const [data,setData]=useState([])
  useEffect(()=>{
axios
.get("https://jsonplaceholder.typicode.com/users")

.then((res)=>{
    
    console.log(res.data)
    setData(res.data);

})
.catch((err)=>{

    console.log(err)
});




  },[])
  
    return (
    <div>

<TableContainer>
      <Table>
        <TableHead>
        <Typography variant='h6' alignContent={'center'}>Employee Details</Typography>

          <TableRow>
          <TableCell>Employee-Id</TableCell>

            <TableCell align="right">Employee-Name</TableCell>
            <TableCell align="right">Email</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
            
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>







    </div>
  )
}









  

export default Homedashboard