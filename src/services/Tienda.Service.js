import { Api_tienda } from "../constants/Api.tienda";


class TiendaVirtualService {

  async getAllProducts() {

    const response = await fetch(Api_tienda.Products());
    return response.json();

    //  fetch('https://fakestoreapi.com/products')
    //       .then(res=>res.json())
    //   .then(json=>console.log(json))
  }

  async getAllProductsById(id) {

    const response = await fetch(Api_tienda.ProductsByID(id));
    return response.json();
  }

  async getAllProductsByCategory() {
    const response = await fetch(Api_tienda.ProductsByCategory());
    return response.json();

  }

  async getAllProductsByTypeCategory(category) {

    const response = await fetch(Api_tienda.ProductsByTypeCategory(category))
    return response.json();

  }

  async getAllCarts() {

    const response = await fetch(Api_tienda.Cart())
    return response.json();


  }

}

export default new TiendaVirtualService();
