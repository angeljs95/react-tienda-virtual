import React, { useEffect, useState } from 'react'
import TiendaService from '../../services/Tienda.Service';
import { Card } from './Card';

export const CartasCategory = () => {

const [cartas, setCartas] = useState([ ]);

useEffect (() => {

TiendaService.getAllCarts()
.then((data)=> setCartas(data))
.catch((error)=> console.log(error))

}, [ ] )

const cardList = cartas.map((ca) => <Card product= {ca} key= {ca.id} />);

  return (
    <div>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             
       {cardList}

            </div>
          </div>
        </div>
      


    </div>
  )
}

