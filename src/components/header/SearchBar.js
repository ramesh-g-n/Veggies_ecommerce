import React,{useState} from 'react'
import { Grid,
          Box, 
          makeStyles, 
          Card, 
          CardMedia,
          CardContent,
          CardActions,
          Button,
          CardActionArea,
          Typography, } from '@material-ui/core'
import { Products } from '../Data'
import Search from './Search'

const useStyle = makeStyles({
  container:{
    width:'100%',
    padding:'15px 5px 7px 20px',
    alignItems:'space-between',
    background: 'linear-gradient(180deg, #48085C, #1c0330)',
    color:'#fff',
    marginTop:23
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
  img:{
    height:180,
    width:'100%',
    padding:10
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
  },
  input:{
    width:'500px',
    marginLeft:40,
    height:40,
    borderRadius:3,
    border:'none',
    paddingLeft:10,
    color:'#999'
},
})

const SearchBar = ({handleAddProduct }) => {
  const classes = useStyle();
  const [data, setData] = useState(Products);

  return (
    <div >
      <Search setData={setData} className={classes.input}/>
      <Grid container spacing={2} className={classes.container}>
        {data.map(items => (
              <Grid key={items.id}  item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.cartitems}>
                  <CardActionArea>
                    <CardMedia><img src={items.url} alt='Products' className={classes.img}/></CardMedia>
                    <CardContent className={classes.content}>
                    <Typography className={classes.stitile}>{items.shortTitle}</Typography>
                    <Typography className={classes.ltitile}>{items.longTitle}</Typography>
                    <Box className={classes.prices}>
                    <Typography className={classes.mrp}>MRP:{items.mrp}/-</Typography>
                    <Typography className={classes.price}>Our Price:{items.cost}/-</Typography>
                    </Box>
                    <Typography className={classes.disc}>You Saved:{items.discount}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button className={classes.btn} onClick={() => handleAddProduct(items)}>
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
                    
              </Grid>
        ))}
        {Products.length === 0 && <span>No recordes found to display</span>}
      </Grid>
    </div>
  )
}

export default SearchBar
