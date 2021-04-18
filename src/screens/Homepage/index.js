import React, { useEffect } from "react";
import FavoritePosts from './FavoritePosts';
import MostHighlightPost from './MostHighlightPost';
import TodayHighlightPosts from './TodayHighlightPosts';
import { getFeaturedPosts } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
    const { featuredPosts } = useSelector(state => {
        return {
            featuredPosts: state.featuredPosts
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeaturedPosts());
    }, [dispatch]);

    return (
        <div className="w3l-homeblock1 py-5">
            <div className="container pt-lg-5 pt-md-4">
                <FavoritePosts featuredPosts={featuredPosts} />
                <MostHighlightPost />
                <TodayHighlightPosts />
            </div>
        </div>
    );
};

export default Homepage;
