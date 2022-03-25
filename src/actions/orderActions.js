import axios from 'axios'
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

} from '../constants/orderConstants'

import { CART_CLEAR_ITEMS } from '../constants/cartConstants'


export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })
        
        const { data } = await axios.post(`https://medico-django-app.herokuapp.com/api/orders/add/`, order,)

        // const { data } = await axios.post(`http://127.0.0.1:8000/api/orders/add/`, order,)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

        dispatch({
            type: CART_CLEAR_ITEMS,
            payload: data
        })

        localStorage.removeItem('cartItems')
        localStorage.removeItem('cardDetails')
        localStorage.removeItem('bookingDetails')
        localStorage.removeItem('paymentMethod')


    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        const { data } = await axios.get(`https://medico-django-app.herokuapp.com/api/orders/${id}`)

        // const { data } = await axios.get(`http://127.0.0.1:8000/api/orders/${id}`)

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })

        // localStorage.removeItem('OrderId')


    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

