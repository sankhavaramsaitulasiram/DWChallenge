import { FETCH_PRODUCTS } from '../actions';

export default (state = [], action) => {
    let updatedState = Object.assign({}, state);
    switch (action.type) {
        case FETCH_PRODUCTS:
            updatedState.products = action.payload;
            break;
    }
    return updatedState;
}