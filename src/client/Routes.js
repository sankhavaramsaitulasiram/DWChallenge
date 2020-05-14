import React from 'react';
import Products, { loadData } from './components/Products';
import ProductDetails from './components/ProductDetails';
import {NotFound} from './components/NotFound';

export default [{
    loadData,
    path: '/',
    component: Products,
    exact: true
}, {
    path: '/product',
    component: ProductDetails,
    exact: true
},{
	component:NotFound
}]