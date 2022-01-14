import React,{useState} from 'react'
import {Box, makeStyles} from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import { Products } from '../Data';



const useStyle = makeStyles({
    input:{
        width:'500px',
        marginLeft:40,
        height:40,
        borderRadius:3,
        border:'none',
        paddingLeft:10,
        color:'#999'
    },
    icon:{
        color:'#000',
        marginLeft:-35,
        position:'absolute',
        bottom:'18px',  
    }
})


const Search = ({ setData}) => {
const classes = useStyle();
const [searchText, setSearchText] = useState(" ");


const handleChange = value => {
    setSearchText(value);
    filterData(value);
}
const filterData = value =>{
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue){
        setData(Products);
    }else{
        const filteredData = Products.filter(items =>{
            return Object.keys(items).some(key =>{
                return items[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        })
        setData(filteredData);
    }
}
    
  return (
    <Box>
        <div >
             <input className={classes.input}
                type='text'
                placeholder='Search Products here....'
                value={searchText}
                onChange={e => handleChange(e.target.value)}/>
            <SearchIcon className={classes.icon}/>
        </div>
    </Box>
  )
}

export default Search
