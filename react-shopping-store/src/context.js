import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';



const ProductContext = React.createContext();
// Provider
// Consumer


class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: null
    }

    componentWillMount(){
        this.products();
    }

    products(){
        let list = this.axiosGetProducts();
        console.log("Getting the list ", list)
        this.setState({products: this.axiosGetProducts(),
            detailProduct: this.axiosGetDetails()
        })
    }

    //Do the rest call from here
    axiosGetProducts() {
        return storeProducts;
    }

    axiosGetDetails(){
        return detailProduct;
    }

    handleDetail = () =>{
        console.log('Hello from detail')
    }

    addToCart = () =>{
        console.log('Hello from cart')
    }

    render() {
        // Value could be an object or string etc
        return (
            <ProductContext.Provider value={{
               ...this.state,
               handleDetail: this.handleDetail,
               addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }
