import React, { Component } from 'react'
import Product from './Product';
import Title from './styled/Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';



function ProductMap(value) {
    
    return (
        value.map((product) =>
            <Product key={product.id} product={product}>{product.title}</Product>
        )
    );
}

export default class ProductList extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products" />
                        {/* Product Row */}
                        < div className="row">
                            <ProductConsumer>
                                {value => {
                                    //console.log('Value ', value),
                                    return ProductMap(value.products)
                                }}
                            </ProductConsumer>
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
