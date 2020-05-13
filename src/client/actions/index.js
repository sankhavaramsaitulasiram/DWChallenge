import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';

export const fetchProducts = () => async dispatch => {
    let products = [],
        promises = [];
    let res = await axios.get('https://dev-api.danielwellington.com/frontend/products/');
    if (res.data && res.data.data) {
        res.data.data.forEach(function(product) {
            promises.push(axios.get(`https://dev-api.danielwellington.com/frontend/products/${product.id}`))
        });

        let totalResults = await axios.all(promises);
        if (totalResults) {
            promises = [];
            totalResults.forEach((response) => {
                if (response.data && response.data.data && response.data.data.elements) {
                    let assetElement = response.data.data.elements.find((x) => x.type == "href");
                    if (assetElement && assetElement.value) {
                        let assetId = assetElement.value.id;
                        let productInfo = response.data.data;
                        productInfo.assetId = assetId;
                        products.push(productInfo);
                        promises.push(axios.get(`https://dev-api.danielwellington.com/frontend/assets/${assetId}`));
                    }

                }
            })
        }

        let resultsWithImages = await axios.all(promises);
        if (resultsWithImages) {
            resultsWithImages.forEach((res, i) => {
                if (res.data && res.data.data) {
                    products[i].image = res.data.data.uri;
                }
            })
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products
            })
        }
    }
}