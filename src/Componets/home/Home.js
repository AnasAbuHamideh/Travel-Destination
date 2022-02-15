import Tours from '../tours/Tours';
import React from 'react';
import  toursdata from "../../data/db.json";

function Home(){
return (
 <>   
      <Tours props={toursdata} />  
 </>   

)
}
  export default Home;