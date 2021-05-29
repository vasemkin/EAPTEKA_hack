import axios from 'axios'
import { GET_PRODUCTS , PRODUCTS_FETCHING } from './actionTypes'
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

export const getProducts = () => {
    return async dispatch => {
        const baseQuery =  `${REACT_APP_API_URL}/api/list_products`
        const response = await axios.get(baseQuery)
        dispatch(getProductsCreator(response.data))
    }
}