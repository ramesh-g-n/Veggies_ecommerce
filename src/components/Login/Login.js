import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core'
import Validation from './Validation'


const useStyle = makeStyles({
    component:{
        height:'75vh',
        width:'80vh',
        padding:0,
        margin:0,
        
    },
    image:{
        backgroundImage:`url(${'https://th.bing.com/th/id/OIP.B5lr3G69sdzssLTuG5J9rgHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7'})`,
        height:'75vh',
        backgroundRepeat:'no-repeat',
        width:'40%',
        backgroundColor:'#b232b3',
        backgroundPosition:'center 85%',
        padding:'5px 10px',
        '& > *':{
           color:'#ffffff',
           fontweight:'2rem',
        }
    },
    login:{
        padding:'9px 12px',
        display: 'flex',
        flex:1,
        flexDirection:'column',
        fontSize:'1rem',
        '& > * ':{
          marginTop:8
        }  
    },
    text1:{
      color:'#878787',
      fontSize:12
    },
    loginbtn:{
      textTransform:'none',
      backgroundColor:'#fB641B',
      color:'#ffffff',
      height:35,
      borderRadius:2
    },
    requestbtn:{
      textTransform:'none',
      backgroundColor:'#7f7083',
      color:'#fff',
      height:35,
      borderRadius:2,
    },
    text3:{
      textAlign:'center',
      marginTop:'auto',
      fontSize:14,
      color:'#2874f0',
      fontweight:600,
      cursor:'pointer',
    },
    signupbtn:{
      textTransform:'none',
      backgroundColor:'#fB641B',
      color:'#ffffff',
      height:35,
      borderRadius:2
    },
    error:{
      color:'red',
      fontSize:'0.7rem'
    }
})

const initialvalue = {
  login:{
    view:'login',
    heading:'LogIn',
    subheading:'Wel-Come to FreshPoint Get access to Your Orders and Recomandations'
  },
  signup:{
    view:'signup',
    heading:'Look like you are new here',
    subheading:'Signup with your mobile number to get started'
  },
  
}

const Login = ({open, setOpen, submitForm }) => {
    const classes = useStyle();

    const [account, toggleAccount] = useState(initialvalue.login);
  //to track of each input values
  const [values, setValues] = useState({
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
  });
    
    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialvalue.login)
    }

    const toggleUserAcount = () =>{
      toggleAccount(initialvalue.signup);
    }
    //To avoid page reloading behavior
    const handleSubmit = (event) =>{
      event.preventDefault();
      setErrors(Validation(values));
      setDataiscorrect(true);
    };
    useEffect(()=>{
      if(Object.keys(errors).length === 0 && dataiscorrect){
        submitForm(true);
      }
    })
    //to take a input from user
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
    //to validate user input
    const [errors, setErrors] = useState({});

    //to set data is correct
    const [dataiscorrect, setDataiscorrect] = useState(false);
    
   

    
   return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{display: 'flex'}}>
            <Box className={classes.image}>
              <Typography variant='h5'>{account.heading}</Typography>
              <Typography style={{marginTop:20}}>{account.subheading}</Typography>
            </Box>
              {

                account.view === 'login' ? 
            <Box className={classes.login}>
              <TextField name='username' label='Enter Email/Mobile number'/>
              <TextField name='password' label='Enter Your Password'/>
              <Typography className={classes.text1}>By continuing, You agree to Terms of use Privacy Policy.</Typography>
              <Button variant="contained" className={classes.loginbtn}>Login</Button>
              <Typography className={classes.text1} style={{textAlign:'center'}}>OR</Typography>
              <Button variant='contained' className={classes.requestbtn}>Request OTP</Button>
              <Typography onClick={()=> toggleUserAcount()}className={classes.text3}>New User? Create an account</Typography>
            </Box>
            :
            <Box className={classes.login}>
            <TextField  onChange={handleChange} name='firstname' label='Enter FirstName'value={values.firstname}/>
            {errors.firstname && <p className={classes.error}>*{errors.firstname}</p>}
            <TextField  onChange={handleChange} name='lastname' label='Enter LastName' value={values.lastname}/>
            {errors.lastname && <p className={classes.error}>*{errors.lastname}</p>}
            <TextField  onChange={handleChange} name='username' label='Enter UserName' value={values.username}/>
            {errors.username && <p className={classes.error}>*{errors.username}</p>}
            <TextField  onChange={handleChange} name='email' label='Enter E-mail'value={values.email}/>
            {errors.email && <p className={classes.error}>*{errors.email}</p>}
            <TextField  onChange={handleChange} name='password' label='Enter Your Password' value={values.password}/>
            {errors.password && <p className={classes.error}>*{errors.password}</p>}
            <TextField  onChange={handleChange} name='phone' label='Enter mobile Number'value={values.phone}/>  
            {errors.phone && <p className={classes.error}>*{errors.phone}</p>}         
            <Button variant='contained' className={classes.signupbtn} onClick={handleSubmit}>Signup</Button>
          </Box> 
              }
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default Login
