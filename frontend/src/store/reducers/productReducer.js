import { GET_PRODUCTS, PRODUCTS_FETCHING } from '../actions/actionTypes';

const defaultStore = {
    products : [],
    productsFetching : true
}

export default function itemReducer(store = defaultStore, action) {

    switch (action.type) {
        
        case GET_PRODUCTS :

            return {
                ...store,
                products : action.payload,
                productsFetching : false
            }
        
        case PRODUCTS_FETCHING :

            return {
                ...store,
                productsFetching : action.payload
            }

        default:
            return store

    }

}