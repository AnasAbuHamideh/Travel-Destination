import Home from "./Componets/home/Home";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Header from './Componets/header/Header';
import Footer from './Componets/footer/Footer';
import ToursDetails from './Componets/TourDetails/TourDetails'
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tour/:id" element={<ToursDetails/>} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;