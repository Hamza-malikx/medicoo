import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,

    BLOG_DETAIL_REQUEST,
    BLOG_DETAIL_SUCCESS,
    BLOG_DETAIL_FAIL,

} from '../constants/blogConstants'


export const blogListReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case BLOG_LIST_REQUEST:
            return { loading: true, blogs: [] }

        case BLOG_LIST_SUCCESS:
            return {
                loading: false,
                blogs: action.payload,
            }

        case BLOG_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const blogDetailsReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
        case BLOG_DETAIL_REQUEST:
            return { loading: true, blog: {} }

        case BLOG_DETAIL_SUCCESS:
            return { loading: false, blog: action.payload }

        case BLOG_DETAIL_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}