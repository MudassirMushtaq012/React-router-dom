import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Homee from './Pages/Homee';
import AppNavbar from './Components/Navbar';
import PageNotFound from './PageNotFound/PageNotFound'


function App() {
  
  return (
    
    <>

    <div>
      <AppNavbar/>
    </div>

    <div>
      <Routes>

        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/home' element={<Homee/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
    </div>

    </>
  );
}

export default App;
