import React from 'react'
import { useState,  } from 'react';
import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


//components
import LoginDialog from '../Login/Login'




const useStyle = makeStyles({
  login:{
    background:'#fff',
    color:'2874f0',
    textTransform: 'none',
    fontWeight:600,
    borderRadius:'1.7px',
    padding:'3px 25px',
  },
  wraper:{
    margin: '0 7% 0 auto',
    display:'flex',
    '& > *':{
      marginRight: 80,
      alignItems:'cener',
      textDecoration:'none',
      
    }
  },
  container:{
    display:'flex',
    textDecoration:'none',
    color:"#fff"
  },

})

const HeaderButton = ({cartItems}) => {
  
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  
   

  const openLoginDialog = () => {
      setOpen(true);
  }
  return (
    <Box className={classes.wraper} >
      <Button varient='contained' onClick={()=>openLoginDialog()} className={classes.login}>
            Login
        </Button> 
        <Link to='/cart' className={classes.container}>
        <Badge badgeContent={cartItems.length === 0 ? '':cartItems.length} color={'#fff'}>
          <ShoppingCart style={{color:'#fff'}}/>
        </Badge>
         <Typography style={{marginLeft: 7}}>Cart</Typography>
        </Link>
        <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  )
}

export default HeaderButton
