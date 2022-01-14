import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../Data'
import { makeStyles } from '@material-ui/core'


const useStyle = makeStyles({
  image:{
    width:'100%',
    height:280,
    border:'5px solid #edcb09',
    
  }
})
const Banner = () => {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={true}
      animation='slide'
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style:{
          background:'#fff',
          color:'black'
        }
      }}
      >
    {
        bannerData.map( image => (
          <img src={image} alt='images' className={classes.image} />
        ) )
    }
</Carousel>
  )
}

export default Banner
