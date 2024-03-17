import React, { useState } from 'react'

export const Footer = () => {

  const [clicks, setClicks] = useState(0);

  const handleClicks= ()=> {
    setClicks(clicks +1 );
  };

  const year= new Date().getFullYear();
  const companyName = "El Maquinon.Inc";

  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName} Clicks= {clicks} </p>

    <span
      className='col-md-4 d-flex align-item-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark'
  
      onClick={ handleClicks }
      >

     
        <img
        className='app-logo'
        height="80"
        src="cultura.jpg"
        alt="perri"
      />


      </span>
    <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Formulario</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
  </footer>
</div>
  )
}

