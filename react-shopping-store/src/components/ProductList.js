import React, { Component } from 'react'
import Product from './Product';
import Title from './styled/Title';
import { storeProducts } from '../data';
export default class ProductList extends Component {

    state = {
        products: []
    }

    componentWillMount(){
        const list = this.axiosGetProducts();
        console.log("Getting the list ", list)
        this.setState({products: list})
    }

    //Do the rest call from here
    axiosGetProducts(){
        return storeProducts;
    }


    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products" />
                        {/* Product Row */}
                        < div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>

            // <div>
            //     <Product/>
            // </div>
        )
    }
}
