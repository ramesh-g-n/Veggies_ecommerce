import { Box, 
          Typography,
          Card,
          CardActionArea,
          CardMedia,
          CardContent,
          CardActions,
          Button,
          makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
  cartcontainer:{
    background:'linear-gradient(180deg, #570d77, #a489a2)',
    width:'100%',
    height:'100%',
    marginTop:'-45px'
    
  },
  cartheader:{
    marginTop:63,
    paddingTop:20,
    width:'100%',
    height:80,
    background:'linear-gradient(180deg, #c3009e, #fd551d)',
    textAlign:'center',
    fontSize:'2rem',
    color:'#fff',
    fontWeight:'bold',
    border:'5px solid black'
  },
  emptycart:{
    background:'linear-gradient(180deg, #570d77, #a489a2)',
    width:'100%',
    height:'60vh',
    padding:50,
    fontSize:'1.5rem',
    fontWeight:'bold',
    color:'red',
    alignItems:'center',
    justifyContent:'center',
    border:'5px solid black',
    marginTop:'-5px'
  },
  totalprice:{
    width:'100%',
    height:80,
    background:'linear-gradient(180deg, #c3009e, #fd551d)',
    border:'5px solid black',
    padding:15,
    fontSize:'1.5rem',
    color:'#fff',
    fontWeight:'bold',
    display:'flex',
    justifyContent:'space-around'
  },
  rs:{
    paddingLeft:5,
    paddingRight:10
  },
  priceincart:{
    width:'80%',
    height:40,
    margin:10,
    backgroundColor:'#44eedc',
    fontWeight:'bold',
    fontSize:'1.1rem',
    color:'#000',
    padding:10,
    paddingLeft:60,
    border:'1.5px solid black',
    
  },
  container:{
    width:'25%',
    padding:'15px 2px 7px 20px',
    alignItems:'space-between',
    marginTop:45,
    
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
  btncontainer:{
    display:'flex',
    justifyContent:'space-between'
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
  },
  buybtn:{
    backgroundColor:'#dcef2b',
    color:'#000',
    fontWeight:'bold',
    '&:hover':{
      backgroundColor:'#4c5be0',
      color:'#fff',
      fontWeight:'boldest',
      boxShadow:'3px 2px 5px #000000',
    },
  },

})

const Cart = ({ cartItems , handleAddProduct, handleRemoveProduct }) => {
  const classes = useStyle();
  const totalPrice = cartItems.reduce((cost, item) => cost + item.quantity * item.cost, 0);
  return (
    <div className='cart_items'>
      <header className={classes.cartheader}>Items in the Cart</header>

      {cartItems.length === 0 && (
      <div className={classes.emptycart}>Cart is Empty</div>
      )}

      <div className={classes.cartcontainer}>
        {cartItems.map((item) =>(
          <div key={item.id} className={classes.container}>
            <Card className={classes.cartitems}>
          <CardActionArea>
            <CardMedia><img src={item.url} alt='Products'className={classes.img} /></CardMedia>
              <CardContent className={classes.content}>
                <Typography className={classes.stitile}>{item.shortTitle}</Typography>
                <Typography className={classes.ltitile}>{item.longTitle}</Typography>
                <Box className={classes.prices}>
                <Typography className={classes.mrp}>MRP:{item.mrp}/-</Typography>
                <Typography className={classes.price}>Our Price:{item.cost}/-</Typography>
                </Box>
                <Typography className={classes.disc}>You Saved:{item.discount}</Typography>
              </CardContent>
          </CardActionArea>
          <CardActions className={classes.btncontainer}>
            <Button className={classes.btn} onClick={() => handleAddProduct(item)}>Add More</Button>
            <Button className={classes.btn} onClick={() => handleRemoveProduct(item)}>Remove</Button>
          </CardActions>
        </Card>
        <Box className={classes.priceincart}>{item.quantity} * Rs: {item.cost} /-</Box>
        </div>
        ))}
        
      </div>
      <Box className={classes.totalprice}>
        Total Amount need to Pay <Box className={classes.rs}> Rs:{totalPrice.toFixed(2)}/-</Box>
        <Button className={classes.buybtn}>BUY NOW</Button>
      </Box>
    </div>
  )
}

export default Cart









