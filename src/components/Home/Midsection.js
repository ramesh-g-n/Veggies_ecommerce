import React from 'react'
import { Box, 
  Card,
  CardActions, 
  CardActionArea, 
  CardMedia, 
  CardContent,
  Typography, 
  Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'


const useStyle = makeStyles({
  container:{
    width:'100%',
    padding:'15px 2px 7px 20px',
    alignItems:'space-between'
  },
  img:{
    height:180,
    width:'100%',
    padding:10
  },
  cartitems:{
    background:'smoke-white',
    boxShadow:'3px 2px 5px #000000',
    width:'90%',
    '&:hover': {
      cursor: 'pointer',
      border:'2px solid black',
      boxShadow:'10px 10px 18px #edcb09'
    },
  },
  content:{
    padding:10,
    color:'green',
    backgroundColor:'#e5e6df',
  },
  stitile:{
    color:'#000000',
    fontSize:'1rem',
    fontWeight:'bold'
  },
  ltitile:{
    color:'#000000',
    fontSize:'0.8rem'
  },
  prices:{
    display:'flex',
    flex:'start',
    
  },
  mrp:{
    color:'red',
    fontSize:'0.9rem',
    paddingRight:5
  },
  price:{
    color:'green',
    fontSize:'1rem',
    fontWeight:600
  },
  disc:{
    color:'#8909bd',
    fontSize:'0.75rem',
    fontWeight:200
  },
  btn:{
    backgroundColor:'#b232b3',
    color:'#fff',
    fontWeight:'bold',
    '&:hover':{
      backgroundColor:'#4c5be0',
      color:'#fff',
      fontWeight:'boldest',
      boxShadow:'3px 2px 5px #000000',
    },
  }
  
  
  
})


const Midsection = ({Prod, handleAddProduct}) => {
  const classes = useStyle();
  return (
   
    <Box>
    <Box className={classes.container}>
         <Card className={classes.cartitems}>
          <CardActionArea>
            <CardMedia><img src={Prod.url} alt='Products'className={classes.img} /></CardMedia>
              <CardContent className={classes.content}>
                <Typography className={classes.stitile}>{Prod.shortTitle}</Typography>
                <Typography className={classes.ltitile}>{Prod.longTitle}</Typography>
                <Box className={classes.prices}>
                <Typography className={classes.mrp}>MRP:{Prod.mrp}/-</Typography>
                <Typography className={classes.price}>Our Price:{Prod.cost}/-</Typography>
                </Box>
                <Typography className={classes.disc}>You Saved:{Prod.discount}</Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.btn} onClick={() => handleAddProduct(Prod)}>
                Add To Cart
            </Button>
          </CardActions>
        </Card> 
    </Box> 
  </Box> 
      
  )
}

export default Midsection;
