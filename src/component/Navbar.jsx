import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>






<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Button color="inherit">
          <Link to ={'/h'} style={{textDecoration:'none',color:'white'}}>
            Home
          
          </Link>
          </Button>
          <Button>
            <Link to ={'/e'} style={{textDecoration:'none',color:'white'}}>
            Employee
          
          </Link>
          </Button>
          
          
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar