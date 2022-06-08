import React from 'react'
import { BrowserRouter,Link,Route } from 'react-router-dom'
import Oils from './Oils';
import Repairs from './Repairs';
import Spare from './Spare Parts';
import Washing from './Washing';

 const Services = () => {
  return (
      <BrowserRouter>
    <div className='mybox'>
    <ol>
    <Link to="/repairs"><li>Repairs</li></Link>
    <Link to="/spare parts"><li>Spare Parts</li></Link>
    <Link to="/oils"><li>Oils</li></Link>
    <Link to="/washing"><li>Washing</li></Link>
   
    <Route path="/repairs" component={(Repairs)}></Route>
    <Route path="/spare parts" component={(Spare)}></Route>
    <Route path="/oils" component={(Oils)}></Route>
    <Route path="/washing" component={(Washing)}></Route>

    
    
    </ol>
    </div>
    </BrowserRouter>
  )
}
export default Services;