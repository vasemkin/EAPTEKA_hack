import { GET_PRODUCTS, PRODUCTS_FETCHING, 
        ADD_PRESCRIBED_PRODUCT, DELETE_PRESCRIBED_PRODUCT, 
        UPDATE_PRESCRIBED_PRODUCT, SET_QR_CODE, POST_PRESCRIPTION } from '../actions/actionTypes';

const defaultStore = {
    products : [],
    productsFetching : true,
    prescribedProducts : [],
    issuedPrescriptions : [],
    QRValue : null
}

export default function itemReducer(store = defaultStore, action) {

    switch (action.type) {
        
        case GET_PRODUCTS :

            return {
                ...store,
                products : action.payload,
                productsFetching : false
            }
        
        case POST_PRESCRIPTION :

            return {
                ...store,
                issuedPrescriptions : [...store.issuedPrescriptions, action.payload]
            }
        
        
        case SET_QR_CODE :

            return {
                ...store,
                QRValue : action.payload
            }
            
        
        case PRODUCTS_FETCHING :

            return {
                ...store,
                productsFetching : action.payload
            }
        
        case ADD_PRESCRIBED_PRODUCT :

            return {
                ...store,
                prescribedProducts : [...store.prescribedProducts, action.payload]
            }
        

        case DELETE_PRESCRIBED_PRODUCT:

            const prodToDelete = store.prescribedProducts.filter(function(value, index, arr){ 
                return value.key !== action.payload;
            });

            return {
                ...store, 
                prescribedProducts : prodToDelete
            }

        case UPDATE_PRESCRIBED_PRODUCT:

            const prodToUpdate = store.prescribedProducts.map(product => {
                if (product.key === action.payload.key) {
                    return {
                        ...product,
                        data : action.payload.data
                    }
                } else {
                    return product
                }
            });

            return {
                ...store, 
                prescribedProducts : prodToUpdate
            }

        default:
            return store

    }

}