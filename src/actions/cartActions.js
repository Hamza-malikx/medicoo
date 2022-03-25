import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_CARD_DETAILS,
    CART_SAVE_PAYMENT_METHOD
} from '../constants/cartConstants'

export const addToCart = (id, qty, obj) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://medico-django-app.herokuapp.com/api/products/${id}`)
    // const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            countInStock: data.countInStock,
            qty,
            obj
        }
        
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// ======================================================================================================

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const saveCardDetails = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_CARD_DETAILS,
        payload: data,
    })

    localStorage.setItem('cardDetails', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}