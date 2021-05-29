import axios from 'axios'
import { GET_PRODUCTS , PRODUCTS_FETCHING, ADD_PRESCRIBED_PRODUCT, DELETE_PRESCRIBED_PRODUCT } from './actionTypes'
const { REACT_APP_API_URL } = process.env

export const getProductsCreator = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const productsFetchingCreator = (fetchStatus) => {
    return {
        type: PRODUCTS_FETCHING,
        payload: fetchStatus
    }
}

export const addPrescribedProduct = (product) => {
    return {
        type: ADD_PRESCRIBED_PRODUCT,
        payload: product
    }
}

export const deletePrescribedProduct = (product) => {
    return {
        type: DELETE_PRESCRIBED_PRODUCT,
        payload: product
    }
}

export const getProducts = () => {
    return async dispatch => {
        const baseQuery =  `${REACT_APP_API_URL}/api/list_products`
        const response = await axios.get(baseQuery)
        const data = response.data.map((product) => {
            return({
                key : product.ID,
                value : product.ID,
                text : product.NAME
            })
        })
        dispatch(getProductsCreator(data))
    }
}