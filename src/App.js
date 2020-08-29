import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import data from './data/data.json';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';



function App() {

  
  const[course,setCourse]= useState([]);
  const [cart,setCart]= useState([]);

  useEffect(() =>{
    setCourse(data);
  },[]);
  const handleAddCourse= (props) =>{
    console.log('product added',props);
    const newCart =[...cart,props];
    setCart(newCart);
  }
  
  return (
    <div>
      <Header></Header>
      <div className="container"> 
            <div className="dashboard">
              {
              course.map(a =><Course handleAddCourse={handleAddCourse} course={a}></Course>)
              }
            </div>
            <div className="cart">
              
            <Cart cart={cart}></Cart>

            </div>
      </div>
      
      
     
    </div>
  );
}

export default App;
