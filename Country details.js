import React from 'react'

const Country = () => {
  const[country,setCountry] = React.useState({});
  const [ccode,setCcode] = React.useState()
  React.useEffect(() =>{
  //var x = window.history;
  var y= window.location;
  console.log(y.pathname.split('/')[2]);
  //setCountry({...x.state.state});
  setCcode(y.pathname.split('/')[2]);
  },[]);
  React.useEffect(()=> {
    if (ccode) {
    fetch(`https://restcountries.com/v2/alpha/${ccode}`)
    .then((res) => res.json())
    .then((data=> {
      console.log(data);
      setCountry(data)})
      
    )
  }

  }, [ccode]);
  return (
    <div className='mybox'>
    <h2>Name:{country.name}</h2>
    <img src={country.flag} width="100px" alt=""/>
    <h2>Capital:{country.capital}</h2>
    <h2>Currency:{country.language}</h2>
    </div>
  )
}

export default Country ;