import React from 'react'
import "./App.css";
import { BrowserRouter,Link,Route } from 'react-router-dom';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';
import countries from './Countries';
import Country from './Country details';

const App = () => {
  return (
    <BrowserRouter>
    <div className='mybox'>
    <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/about us">Aboutus</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/contact">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/services">Services</Link>


    <Route path="/home"><Home></Home></Route>
    <Route path="/About us" component={(Aboutus)}></Route>
    <Route path="/countries" component={(countries)}></Route>
    <Route path="/Contact" component={(Contact)}></Route>
    <Route path="/Services" component={(Services)}></Route>
    <Route path="/details/:a"><Country> </Country></Route>

    </div>
    </BrowserRouter>
  )
}
export default App