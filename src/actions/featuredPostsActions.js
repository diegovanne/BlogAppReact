import axios from "axios";
import {
    REQUEST_FEATURED_POSTS_START,
    REQUEST_FEATURED_POSTS_FINISHED,
    REQUEST_FEATURED_POSTS_FAILED
} from "../constant";

const client = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getFeaturedPosts = () => {
    return async (dispatch, getFirebase) => {
        try {
            dispatch(requestFeaturedPostsAction());
            const featuredPostsData = await client.get("/mockdata/featuredPosts.json");
            dispatch(requestFeaturedPostsSuccessAction(featuredPostsData.data));
        }
        catch (err) {
            dispatch(requestFeaturedPostsFailedAction())
        }
    };
};

const requestFeaturedPostsAction = () => {
    return {
        type: REQUEST_FEATURED_POSTS_START
    }
};

const requestFeaturedPostsSuccessAction = (data) => {
    return {
        type: REQUEST_FEATURED_POSTS_FINISHED,
        payload: data
    }
};

const requestFeaturedPostsFailedAction = () => {
    return {
        type: REQUEST_FEATURED_POSTS_FAILED,
        message: "Loading data error!"
    }
};
