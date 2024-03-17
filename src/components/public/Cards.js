import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import Tienda_Service from "../../services/Tienda.Service";

export const Cards = () => {

  
const [products, setProducts] = useState([ ]);



useEffect (() => {

  Tienda_Service.getAllProducts()
  
  .then((data) => setProducts(data))
  .catch((error) => console.log(error));
} , [] )

console.log(products)
const cardList = products.map((p) => <Card product= {p} key= {p.id} />);


  return (

<div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             
       {cardList}

            </div>
          </div>
        </div>

  )
}


