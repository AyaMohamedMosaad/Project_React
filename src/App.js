import logo from './logo.svg';
import './App.css';
import { MyNavbar } from './Components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './Components/Home'
import { Error } from './Components/Error'
import { Albums } from './Components/Albums';
import { Album } from './Components/Album';
import {Footer} from './Components/Footer'
import {MYForm} from './Components/MYForm'
function App() {
  return (

    <>

      <MyNavbar />
<div style={{height:10}}></div>

      <Routes>
      
      <Route path="/" element={<Navigate to="/home" />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:id" element={<Album />} />
        <Route path="/form" element={<MYForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div style={{height:10}}></div>

      <Footer/>
    </>


  );
}


export default App;
