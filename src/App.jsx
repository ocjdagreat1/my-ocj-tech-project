import {Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import Cards from "./pages/Cards"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import ContactPage  from './pages/ContactPage'
import Footer from  './components/Footer'
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  

  return (
    <>
    <Navbar/> 
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Cards" element={<Cards/>}/>
    <Route path="/AboutPage" element={<AboutPage/>}/>
    <Route path="/ContactPage" element={<ContactPage/>}/>
    <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
    <Route path="/LoginPage" element={<LoginPage/>}/>
  </Routes>
  <Footer/>

    </>
  )
}

export default App
