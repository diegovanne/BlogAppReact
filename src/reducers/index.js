import { combineReducers } from "redux";

import profile from "./profileReducer";
import featuredPosts from "./featuredPostsReducer";

const rootReducer = combineReducers({
    profile,
    featuredPosts
});

export default rootReducer;
