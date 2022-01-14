import { Box, Link, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyle = makeStyles({
    footer_container:{
      width:'102%',
      height:250,
      marginLeft:'-8px',
      marginTop:'30px',
      marginBottom:'-15px',
      background:'linear-gradient(180deg, #570d77, #9e0693)',
      display:'flex',
      justifyContent:'space-between',
      padding:'2rem 1rem 2rem 1rem',
      boxSizing:'border-box'
        },
    img:{
        width:100,
        height:30,
        backgroundColor:'white',
        margin:1
        },
    company:{
      display:'flex',
      flexDirection:'column',
      textDecoration:'none',
           
    },
    comp:{
      color:'#ffffff',
      cursor:'pointer',
      marginBottom:'15px'
    },
    h2:{
      marginBottom:'15px'
    },
    payment:{
      display:'flex',
      flexDirection:'column'
    },
    pay:{
      color:'#ffffff',
      cursor:'pointer',
      marginBottom:'7px'
    },
    get:{
      display:'flex',
      flexDirection:'column',
      cursor:'pointer',
      marginBottom:'7px'
    },
    img1:{
      width:100,
      height:50,
      bagckroundColor:'white',
      
    },
    img2:{
      width:100,
      height:90,
      bagckroundColor:'white',
      marginTop:'-4px'
      
    },
    social:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
    socio:{
      color:'#fff',
      marginBottom:2,
      fontSize:'1.4rem'
    },
    copy:{
      color:'#fff',
      fontSize:'1.2rem',
      paddingLeft:10,
      paddingTop:18,
      width:'100%',
      height:35
    }
    
})
const Footer = ({image}) => {
    const classes = useStyle();
  return (
    <Box>
    <Box className={classes.footer_container}>
      <Box className={classes.company}>
          <h2 style={{color:'#fff'}} className={classes.h2}>Company</h2>
          <Link to='/' className={classes.comp}>About us</Link>
          <Link to='/' className={classes.comp}>Contact us</Link>
          <Link to='/' className={classes.comp}>Privacy</Link>
          <Link to='/' className={classes.comp}>Terms & Conditions</Link>
      </Box>
      <Box className={classes.payment}>
          <h2 style={{color:'#fff'}} className={classes.h2} >Mode of Payments</h2>
          <Link className={classes.pay}>Cash on Delivery</Link>
          <Link><img src={image.upi} alt='UPI'className={classes.img}/></Link>
          <Link><img src={image.card} alt='Credit Card'className={classes.img}/></Link>
          <Link><img src={image.paypal} alt='paypal'className={classes.img}/></Link>
      </Box>
      <Box className={classes.social}>
          <h2 style={{color:'#fff'}} className={classes.h2} >Connect with us</h2>
          <Link className={classes.socio}
              to='/'
              target='_blank'
              arial-label='Facebook'>
             <i class='fab fa-facebook-f'/>
            </Link>
          <Link className={classes.socio}
              to='/'
              target='_blank'
              arial-label='Instagram'>
             <i class='fab fa-instagram'/>
            </Link>
            <Link className={classes.socio}
              to='/'
              target='_blank'
              arial-label='Youtube'>
            <i class='fab fa-youtube'/>
            </Link>
            <Link className={classes.socio}
              to='/'
              target='_blank'
              arial-label='LinkedIn'>
             <i class='fab fa-linkedin'/>
            </Link>
            <Link className={classes.socio}
              to='/'
              target='_blank'
              arial-label='Twitter'>
             <i class='fab fa-twitter'/>
            </Link>
           
      </Box>
      <Box className={classes.get}>
          <h2 style={{color:'#fff'}} className={classes.h2} >Get us on</h2>
          <Link><img src={image.playstore} alt='playstore'className={classes.img2}/></Link>
          <Link><img src={image.appstore} alt='appstore'className={classes.img1}/></Link>
      </Box>
      <Box className={classes.office}>
          <h2 style={{color:'#fff'}} className={classes.h2} >Registered Office Address</h2>
          <div style={{color:'#fff'}}><br/>
            <h3>Fresh Point Private Limited,</h3><br/>
              <p>#15/4 Electronic City Phase-1</p> 
              <p>Bengaluru, 560100,</p>
              <p>Karnataka, India</p>
          </div>
      </Box>
      </Box>
      <Box className={classes.copy}>
      <div>copyright @2021-2022 FreshPoint All rights reserved</div>
      </Box>
      
    </Box>
  )
}

export default Footer
