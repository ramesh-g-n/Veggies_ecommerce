import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//components
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Cart from './components/cart/Cart';
import SearchBar from './components/header/SearchBar';







function App({handleChange}) {
  const [cartItems, setCartItems] = useState([]);
  
  
  
  
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity +1} : item)
      );
    }
      else{
        setCartItems([...cartItems, {...product, quantity: 1}]);
      }
    };

    const handleRemoveProduct = (product) => {
      const ProductExist = cartItems.find((item)=> item.id === product.id);
      if(ProductExist.quantity === 1){
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      }else{
        setCartItems(
          cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity -1} 
          : item
          )
        )
      }
    }
    
    
  
  return (
    
      <BrowserRouter>
        <Header cartItems={cartItems} handleChange={handleChange}/>
          <Routes>
            <Route exact path="/" element={<Home handleAddProduct={handleAddProduct}/>} />
            <Route path="/cart" exact element={<Cart cartItems={cartItems} 
            handleAddProduct={handleAddProduct} 
            handleRemoveProduct={handleRemoveProduct}/>}/>
           <Route exact path="/search" element={<SearchBar handleAddProduct={handleAddProduct}/>} />
          </Routes>
      </BrowserRouter>
    
  );
};

export default App;
