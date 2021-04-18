import {
    REQUEST_FEATURED_POSTS_START,
    REQUEST_FEATURED_POSTS_FINISHED,
    REQUEST_FEATURED_POSTS_FAILED
} from "../constant";

const initialState = {
    loading: false,
    data: [],
    message: null
};

const featuredPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FEATURED_POSTS_START:
            return {
                ...state,
                loading: true,
                message: null
            };
        case REQUEST_FEATURED_POSTS_FINISHED:
            return {
                ...state,
                loading: false,
                data: action.payload,
                message: null
            }
        case REQUEST_FEATURED_POSTS_FAILED:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        default:
            return {
                ...state
            }
    }
};

export default featuredPostsReducer;
