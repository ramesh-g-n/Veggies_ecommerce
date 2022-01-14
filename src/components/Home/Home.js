import { Box, makeStyles } from '@material-ui/core'
import img1 from '../../Asset/FreshOffers.jpg'

//components
import React from 'react'
import Banner from './Banner'
import Shop from './Shop'



const useStyle = makeStyles({
    component:{
      padding:'70px 8px 15px 8px',
      margin:'8px 0px 0px 0px',
      background: 'linear-gradient(180deg, #48085C, #1c0330)'
    },
    FreshOffer:{
      width:'100%',
      height:100,
      marginTop:8,
      paddingTop:1,
      border:'5px solid #edcb09'
      
    },
})

const Home = ({handleAddProduct}) => {
  const classes = useStyle();
  return (
    <div>
      <Box className={classes.component}>
        <Banner />
        <img src={img1} alt='Deal of the Day' className={classes.FreshOffer}/>
        <Shop handleAddProduct={handleAddProduct}/>
      </Box>
    </div> 
  )
}

export default Home
