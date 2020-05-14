import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import {
    Link
} from "react-router-dom";
import Header from './Header';
import { Helmet } from 'react-helmet';

const styles = {
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    productsBox: {
        marginTop: '1.6rem',
        marginBottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0px 0.7rem',
        listStyle: 'none',
    },
    listItems: {
        width: '20%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem',
        textAlign: 'center',
        transition: 'box-shadow .2s'
    },
    productImage: {
        width: '100%',
    }
}

class ProductsList extends Component {
    componenDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        if (this.props.products && this.props.products.products) {
            return this.props.products.products.map((product, i) => {
                let name = product.key;
                let image = product.image;

                let price = product.elements.find(x => x.type == 'quantityValue');
                price = (price && price.value) ? price.value.value : '';

                let description = product.elements.find(x => x.type == 'textarea');
                description = description ? description.value : '';

                let color = product.elements.find(x => x.name == 'color')
                color = color ? color.value : '';

                let size = product.elements.find(x => x.name == 'size');
                size = size ? size.value : '';

                let productDet = { name, price, description, color, size, image };

                return (<li key={i} className="listItems" style={styles.listItems}>
                	<Link to={{pathname:'/product', productDetails:productDet}} style={{textDecoration:'none',color:'black'}}>
				<img src={product.image} style={styles.productImage}/>
				<div style={{margin:20}}>{name}</div>
				<div style={{margin:20}}>$ {price}</div></Link>
			  </li>);
            })
        }

    }
    render() {
        return (
            <div>
            <Helmet>
            <title>Daniel Wellington</title>
            <meta property="og:title" content="Daniel Wellington"/>
            </Helmet>
		<Header/>
		<div style={styles.box}>{this.props.products.products ? this.props.products.products.length : 0} Products</div>
		<ul style={styles.productsBox}>{this.renderProducts()}</ul>
		</div>)
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

function loadData(store) {
    return store.dispatch(fetchProducts());

}

export { loadData };

export default connect(mapStateToProps, { fetchProducts })(ProductsList);