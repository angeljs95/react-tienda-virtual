import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { CategoryMostrar } from './CategoryMostrar';

export const Card2 = ({category}) => {

 /* const miComponente = (props) => {
    const { history } = props;

    const remplazar = () => {
const rutaActual = props.location.pathname;
const nuevaRuta= rutaActual.replace(`/categories/`, `/category/`);

history.push(nuevaRuta);}
    }*/




  return (
    <div>
        <div className="card-group">
  <div className="card">
  
    
  <img src= {category} className="card-img-top" alt="El Maquinon.Inc" /> 
    <div className="card-body">
      <h2 className="card-title text-center">{category}</h2>
      <p className="card-text "> Categorias </p>
    </div>
    <div className="card-footer ">
      <div className="container text-center"> 
      <Link to= {`/products/category/${category}`} className=' mt-1 btn btn-primary btn-lg' >
                        Ver
              </Link>
      </div>
      
    </div>
  </div>
</div>
      
    </div>
  )
}

