import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia } from "@mui/material";
import space1 from '../assets/space1.png'
import '../App.css'
export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{ bgcolor: 'white' }}>
          <Toolbar >
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#4c6dd1' }}>
              TRIspace
            </Typography>
            <Button sx={{ fontSize: '20px', color: '#4c6dd1', flexGrow: 2 }}>
              About us
            </Button>
            <Button sx={{ fontSize: '20px', color: '#4c6dd1' }}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ height: '30%', width: '90%', display: 'flex', justifyContent: 'flex-end', mt: '50px' }}>
        <CardMedia component="img" image={space1} sx={{ width: '30%' }} />
      </Box>
      
      <Box sx={{ width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex' }}>
        <Typography sx={{ fontfamily: 'cursive', fontSize: '60px',mt:'-60px' ,ml:'100px'}}><b>Search</b></Typography>
      </Box>
      <Box>
      <Typography sx={{ fontfamily: 'cursive', fontSize: '40px',mt:'-20px',ml:'100px' }}>For your workspace</Typography>
    </Box>
    
    </>
  )
}
