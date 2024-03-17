import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import Tienda_Service from '../../services/Tienda.Service';
import { Link, useLocation, useParams} from 'react-router-dom';

export const CategoryMostrar = () => {

  const [CategoryMostrar, setCategoryMostrar]= useState([ ])
  const {category} = useParams();
    const {pathName} = useLocation();

  useEffect( () => {

    Tienda_Service.getAllProductsByTypeCategory(category)
    .then((data) => setCategoryMostrar(data))
    .catch((error) => console.log(error));
  } , [ category] )

  const ListaXCategoria= CategoryMostrar.map((c) => <Card product= {c} key= {c.category}/>);





  return (
    <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             
           {ListaXCategoria}

            </div>
          </div>
        </div>
  )
}
