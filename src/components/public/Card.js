import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({product}) => {

  if (!product) {
    return null; // O muestra un mensaje de error
  }

  return (
   
    <div className="card mb-3" style={{maxWidth: '540px'}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src= {product.image} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title"> {product.title} </h5>
          <p className="card-text">

          <button type="button" className="btn btn-outline-secondary">
            <Link to= { `/products/${product.id} `} className=' nav-link' >
            Detalles
            </Link>

            </button>

          </p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
   
  )
}

