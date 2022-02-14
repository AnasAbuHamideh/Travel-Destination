import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import React from 'react';
import ReactDOM from 'react-dom';
import  toursdata from "../../data/db.json";

function Home(){

    
ReactDOM.render(
    <React.StrictMode>
      <Header />
      <Tours data={toursdata}/>  
      <Footer/> 
    </React.StrictMode>,
    document.getElementById('root')
  );

  }
  export default Home;