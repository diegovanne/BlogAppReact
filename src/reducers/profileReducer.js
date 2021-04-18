import {
    REQUEST_PROFILE_START,
    REQUEST_PROFILE_FINISHED,
    REQUEST_PROFILE_FAILED
} from "../constant";

const initialState = {
    data: null,
    message: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PROFILE_START:
            return {
                ...state,
                message: null
            };
        case REQUEST_PROFILE_FINISHED:
            return {
                ...state,
                data: action.payload,
                message: null
            }
        case REQUEST_PROFILE_FAILED:
            return {
                ...state,
                message: action.message
            }
        default:
            return {
                ...state
            }
    }
};

export default profileReducer;
