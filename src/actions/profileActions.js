import axios from "axios";
import {
    REQUEST_PROFILE_START,
    REQUEST_PROFILE_FINISHED,
    REQUEST_PROFILE_FAILED
} from "../constant";

const client = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getProfile = () => {
    return async (dispatch, getFirebase) => {
        try {
            dispatch(requestProfileAction());
            const profileData = await client.get("/mockdata/profile.json");
            dispatch(requestProfileSuccessAction(profileData.data));
        }
        catch (err) {
            dispatch(requestProfileFailedAction())
        }
    };
};

const requestProfileAction = () => {
    return {
        type: REQUEST_PROFILE_START
    }
};

const requestProfileSuccessAction = (data) => {
    return {
        type: REQUEST_PROFILE_FINISHED,
        payload: data
    }
};

const requestProfileFailedAction = () => {
    return {
        type: REQUEST_PROFILE_FAILED,
        message: "Loading data error!"
    }
};
