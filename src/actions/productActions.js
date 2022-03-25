import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    OTHERS_REQUEST,
    OTHERS_SUCCESS,
    OTHERS_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,

} from '../constants/productConstants'


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('https://medico-django-app.herokuapp.com/api/products/')
        // const { data } = await axios.get('http://127.0.0.1:8000/api/products/')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listOthers = () => async (dispatch) => {
    try {
        dispatch({ type: OTHERS_REQUEST })

        const { data } = await axios.get('https://medico-django-app.herokuapp.com/api/others/')
        // const { data } = await axios.get('http://127.0.0.1:8000/api/others/')

        dispatch({
            type: OTHERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: OTHERS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`https://medico-django-app.herokuapp.com/api/products/${id}`)
        // const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const createProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST
        })

        const { data } = await axios.post(`https://medico-django-app.herokuapp.com/api/products/${productId}/reviews/`, review)
        // const { data } = await axios.post(`http://127.0.0.1:8000/api/products/${productId}/reviews/`, review)

        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}