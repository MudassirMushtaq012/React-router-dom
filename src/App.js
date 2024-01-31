import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Homee from './Pages/Homee';
import AppNavbar from './Components/Navbar';
import PageNotFound from './PageNotFound/PageNotFound'
import { useParams } from 'react-router-dom';
import User from './Pages/User';

function App() {
  
  return (
    
    <>

    {/* <div>
      <AppNavbar/>
    </div> */}

    <div>
      <Routes>

        <Route path='/:userName' element={<AppNavbar><User/></AppNavbar>} />
        <Route path='/home' element={<AppNavbar><Homee/></AppNavbar>} />
        <Route path='/' element={<AppNavbar><Homee/></AppNavbar>} />
        <Route path='/about' element={<AppNavbar><About/></AppNavbar>} />
        <Route path='/contact' element={<AppNavbar><Contact/></AppNavbar>} />
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
    </div>

    </>
  );
}

export default App;
 