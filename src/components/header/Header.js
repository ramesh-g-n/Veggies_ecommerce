import React from 'react'
import { AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom'




//components
import Search from './Search';
import HeaderButton from './HeaderButton';


const useStyle = makeStyles({
  header :{
      background:'linear-gradient(180deg, #c3009e, #fd551d)',
      height:63,
  },
  logo :{
    width:185,
    height:60,
    border:'none',
    color:'white'
  },
  container:{
    paddingTop:'10px',
    marginLeft:'4%',
    fontWeight:'bold',
  },
  
})

const Header = ({cartItems, handleChange, setData}) => {
  
  const classes = useStyle();
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Link to="/" className={classes.container}>
          <h1 className={classes.logo}>Fresh Point</h1>
        </Link>
        <Link to="/search" >
        <Search handleChange={handleChange} setData={setData}/>
        </Link>
        <HeaderButton cartItems={cartItems}/>
      </Toolbar>
    </AppBar>
  )
}

export default Header
