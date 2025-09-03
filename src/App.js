
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';

import Register from './components/Register';
import Workpage from './components/Workpage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className='flex-grow'>
        <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/workpage' element={<Workpage/>}/>
      </Routes>
      </main>
      
       
        
        <Footer/>
    </div>
    
  );
}

export default App;
