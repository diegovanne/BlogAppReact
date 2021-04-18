const MostFeaturedPost = (props) => {
    const { item } = props;
    function truncate(str, n) {
        return (str.length > n) ? str.substr(0, n - 1) + '&hellip;' : str;
    };
    const imgStyle = {
        width: "338px",
        height: "225px",
        objectFit: "contain"
    };
    return (
        <div className="card">
            <div className="card-header p-0 position-relative">
                <a href="blog-single.html">
                    <img className="card-img-bottom d-block radius-image" style={imgStyle} src={item.thumbnail} alt="Card image cap" />
                </a>
            </div>
            <div className="card-body p-0 blog-details">
                <a href="blog-single.html" className="blog-desc">{item.title}
                </a>
                <p dangerouslySetInnerHTML={{ __html: truncate(item.content, 35) }}></p>
                <div className="author align-items-center mt-3 mb-1">
                    <a href="author.html">{item.author}</a> in <a href="#url">{item.category}</a>
                </div>
                <ul className="blog-meta">
                    <li className="meta-item blog-lesson">
                        <span className="meta-value">{item.date_release}</span>
                    </li>
                    <li className="meta-item blog-students">
                        <span className="meta-value"> {item.mins_read} min read</span>
                    </li>
                </ul>
                <a href="blog.html" className="btn btn-style btn-outline mt-4">All featured
                        posts</a>
            </div>
        </div>
    );
}

export default MostFeaturedPost;