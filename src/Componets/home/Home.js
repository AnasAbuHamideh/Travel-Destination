import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import React from 'react';
import ReactDOM from 'react-dom';
import  toursdata from "../../data/db.json";

function Home(){
return (
 <>   

      <Header />
      <Tours />  
      <Footer />
 </>   

)
}
  export default Home;