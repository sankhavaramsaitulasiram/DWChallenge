import axios from 'axios';
export const FETCH_PRODUCTS = 'fetch_products';

export const fetchProducts = () => async dispatch => {
    let products = [],
        promises = [];

      //  products = await axios.get('http://localhost:8000')
    let res = await axios.get('http://localhost:8000');
    if (res && res.data) {
        products = res.data.products;
        dispatch({
                type: FETCH_PRODUCTS,
                payload: products
            })
    
    }
}