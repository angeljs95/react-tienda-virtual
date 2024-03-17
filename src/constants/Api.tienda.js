export const Api_tienda= {

    URL : "https://fakestoreapi.com",

    Products : function () {

    return `${this.URL}/products` },

    ProductsByID : function(id) {

return `${this.URL}/products/${id}` },

ProductsByCategory: function() {
    return `${this.URL}/products/categories` },

    ProductsByTypeCategory : function(category) {

        return `${this.URL}/products/category/${category}` 
    },

    Cart : function () {
        return ` ${this.URL}/carts`
    }
}