import FeaturedPosts from './FeaturedPosts';
import MostFeaturedPost from './MostFeaturedPost';
import TrendingPosts from './TrendingPosts';

const FavoritePosts = props => {
    const { data, loading, message } = props.featuredPosts;

    const loadingIcon = (
        <div className="spinner-border text-primary"></div>
    );

    const mostFeaturedPost = data.some(x => x) && data.map((item, index) => {
        if (index === 0) {
            return (<MostFeaturedPost item={item} />);
        }
    });

    const listFeaturedPosts = data.some(x => x) && data.map((item, index) => {
        if (index !== 0) {
            console.log(index);
            return (<FeaturedPosts index={index} item={item} />);
        }
    });

    const content = message ? message :
        (<div className="row">
            <div className="col-lg-5 col-md-6 item">{mostFeaturedPost}</div>
            <div className="col-lg-7 col-md-6 mt-md-0 mt-5">
                {listFeaturedPosts}
            </div>
        </div>);

    return (
        <div className="row">
            <div className="col-lg-9">
                <h3 className="section-title-left">Featured posts </h3>
                {loading && loadingIcon}
                {!loading && content}
            </div>
            <TrendingPosts />
        </div>
    );
}

export default FavoritePosts;
