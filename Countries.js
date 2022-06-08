import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Country from './Country details'


const Countries = () => {
    const[countries,setCountries] = React.useState([])

    React.useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(function(res){
            return res.json();
        })
        .then(function(countries) {
            setCountries([...countries]);
        });
    },[]);
  return (
    <div>
    <h1>countries</h1>
        <div style={{ display:'flex'}} className='mybox'>
     <ul>
        {
            countries.map((country)=>{
                return(
                    <Link
                     to={{pathname:`/details/${country.alpha3Code}`, state:country,
                    }}
    
            key={country.alpha3Code}
            >
            <li>{country.name}</li></Link>
            );
        })}
        </ul>
           
        <div>
    
    </div>
    </div>
    </div>
   
    
  )
}
export default Countries;
