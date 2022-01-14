import React from 'react'
import Midsection from './Midsection'
import { Products } from '../Data'
import { Grid, Box } from '@material-ui/core'
import { footerData } from '../Data'
import Footer from './Footer'



const Shop = ({handleAddProduct}) => {
  
  return (
    <div>
      <Grid container spacing={2}>
        {Products.map(Prod => (
              <Grid key={Prod.id}  item xs={12} sm={6} md={4} lg={3}>
                <Midsection Prod={Prod} handleAddProduct={handleAddProduct}/>
              </Grid>
        ))}
      </Grid>
      <Box>
        {
          footerData.map( image => (
          <Footer image={image} />
          ) )
        }
      </Box>
    </div>
  )
}

export default Shop
