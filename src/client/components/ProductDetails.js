import React, { Component } from 'react';
import Header from './Header';
import {
    Link
} from "react-router-dom";

const styles = {
    productDetails: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 40,
        flexDirection: 'row'
    },
    productImageContainer: {
        width: '30%'
    },
    productImage: {
        width: '100%'
    },
    productDetailsContainer: {
        width: '60%',
        fontSize: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    productTitle: {
        fontSize: 30
    },
    productDescription: {
        marginTop: 20
    },
    button: {
        marginTop: 20,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: '#bdc3c7',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}
export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
			<Header/>
			{this.props.location.productDetails ? 
			(<div style={styles.productDetails}>
			<div style={styles.productImageContainer}>
			<img style={styles.productImage} src={this.props.location.productDetails.image}/>
			</div>
			<div style={styles.productDetailsContainer}>
			<div style={styles.productTitle}>{this.props.location.productDetails.name}</div>
			<div style={styles.productTitle}>$ {this.props.location.productDetails.price}</div>
			<div style={styles.productDescription}>{this.props.location.productDetails.description}</div>
			<div style={styles.productDescription}><b style={{fontSize:15,paddingRight:20}}>Color: </b>{this.props.location.productDetails.color}</div>
			<div style={styles.productDescription}><b style={{fontSize:15,paddingRight:20}}>Size: </b>{this.props.location.productDetails.size}</div>
			<Link to="/" style={{textDecoration:'none'}}><button style={styles.button}>Back</button></Link>
			</div>				
			</div>):(<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><h1 style={{textAlign:'center'}}>No Product Selected</h1><br/><button onClick={(e)=>window.location.href = "/"} style={styles.button}>Back</button></div>)
		}
			</div>
        )
    }
}