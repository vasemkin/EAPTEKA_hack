import axios from 'axios'
import { GET_PRODUCTS , PRODUCTS_FETCHING, 
        ADD_PRESCRIBED_PRODUCT, DELETE_PRESCRIBED_PRODUCT, 
        UPDATE_PRESCRIBED_PRODUCT, POST_PRESCRIPTION, SET_QR_CODE } from './actionTypes'
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

export const updatePrescribedProduct = (key, data) => {
    return {
        type: UPDATE_PRESCRIBED_PRODUCT,
        payload: {
            key : key,
            data : data
        }
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

export const postPrescriptionCreator = (prescription) => {
    return {
        type : POST_PRESCRIPTION,
        payload : prescription
    }
}

export const setQRValue = (value) => {
    return {
        type : SET_QR_CODE,
        payload : value
    }
}

export const postPrescription = (prescription) => {
    return async dispatch => {
        const baseQuery =  `${REACT_APP_API_URL}/api/generate_prescription`
        try {
            const res = await axios({
                method: 'post',
                url: baseQuery,
                data: prescription
            })

            console.log(res.data)
            dispatch(setQRValue(res.data['prescription_id']))
            dispatch(postPrescriptionCreator(prescription))
        } catch (error) {
            // fail
        }
    }
}