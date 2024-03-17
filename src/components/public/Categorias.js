import React , { useEffect ,useState}  from 'react'
import Tienda_Service from "../../services/Tienda.Service";
import {Card2} from './Card2';

export const Categorias = () => {

    const [category, setCategory] = useState([ ]);



    useEffect (() => {
    
      Tienda_Service.getAllProductsByCategory()
      .then((data) => setCategory(data))
      .catch((error) => console.log(error));
    } , [ ] )

    console.log(category)

    const cardList1 = category.map((c,i) => <Card2 category={c} key={i}  />);

  return (
    <div>
      <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
             
            {cardList1}
       
            </div>
          </div>
        </div>
      
    </div>
  )
}


