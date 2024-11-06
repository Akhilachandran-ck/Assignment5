import React from 'react'
import '../App.css'
import { Box, Button, Table, TextField, Typography } from '@mui/material'

const Employeeform = ({person}) => {
  return (
    <div>


      <Box id="d1"
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div >

          <Typography variant='h6'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Registration Form</Typography>
          <br></br>
          <TextField
            required
            id="outlined-required"
            label="Name"
            
          />
          <br></br>
          <TextField
            
            id="outlined-disabled"
            label="Designation"

          />
                  <br></br>

        
          <TextField
            id="outlined-password-input"
            label="Location"
            type="text"
            
          />
                    <br></br>

          <TextField
            id="outlined-read-only-input"
            label="Salary"
type='number'
          />
        </div>
        
        
        <Button id="b1" variant="contained">Submit</Button>
      <Table rows={[{name:'Manju',age:30,place:'kollam',gender:'female'}]}/>

      </Box>





    </div>
  )
}






export default Employeeform