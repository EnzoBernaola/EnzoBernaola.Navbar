
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBarReact from './layouts/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element ={<NavBarReact /> } >
            <Route index element ={<Home /> } />
            <Route path ='About' element ={<About /> } />
            <Route path ='Contact' element ={<Contact /> } />
            <Route path ='*' element ={<Navigate replace to = "/"/> } />

          </Route>

        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
