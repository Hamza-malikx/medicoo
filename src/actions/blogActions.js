import axios from 'axios'
import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,

    BLOG_DETAIL_REQUEST,
    BLOG_DETAIL_SUCCESS,
    BLOG_DETAIL_FAIL,

} from '../constants/blogConstants'


export const listBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: BLOG_LIST_REQUEST })

        const { data } = await axios.get('https://medico-django-app.herokuapp.com/api/blogs/')
        // const { data } = await axios.get('http://127.0.0.1:8000/api/blogs/')

        dispatch({
            type: BLOG_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listBlogDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_DETAIL_REQUEST })

        const { data } = await axios.get(`https://medico-django-app.herokuapp.com/api/blogs/${id}`)
        // const { data } = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}`)

        dispatch({
            type: BLOG_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}