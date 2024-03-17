import React, { useEffect, useState } from 'react'
import Tienda_Service from "../../services/Tienda.Service";
import { Link, useLocation, useParams, BrowserRouter } from 'react-router-dom';



export const Details = () => {


    const [product, setProduct] = useState({})
    const {id} = useParams();
    const {pathName} = useLocation();

    useEffect(() => {
    console.log(pathName);
     Tienda_Service.getAllProductsById(id)
     .then((data => setProduct(data)))
     .catch((error) => console.log(error)) 
    }, [ ] )

  return (
    <div>

<section className="py-5 text-center container">
          <div className="row py-lg-5">

             <div class="col-md-4">
              <img className="img-fluid rounded-start" src= {product.image} height= "auto" alt= " " />
            </div>
            <div className="col-lg-6 col-md-8 mx-auto">
                
                
            <div className='mb-1 text-muted'>
    
       { new Date (product.created).toLocaleDateString()}
    
      </div>

      
              <h1 className="fw-light"> {product.title} </h1>
              <p className="lead text-body-secondary"> {product.description} </p>

            <p> <h1> <span class="badge bg-secondary"> {product.price}$</span> </h1>  </p>

              <p>
             
              <Link to={"/"} className='mt-3 btn btn-primary btn-lg' >
                         comprar
              </Link>
              <br/>
              <Link to={"/"} className='mt-3 btn btn-primary btn-lg' >
                         volver
              </Link>
                  
              </p> 

            </div>


          </div>
        </section>


     


      
    </div>
  )
}
