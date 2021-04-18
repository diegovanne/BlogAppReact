const FeaturedPosts = (props) => {
    const { item, index } = props;
    const imgStyle = {
        width: "170px",
        height: "142px",
        objectFit: "contain"
    };
    const className = index === 1 ? "list-view list-view1" : "list-view list-view1 mt-5";
    return (
        <div className={className}>
            <div className="grids5-info">
                <a href="blog-single.html" className="d-block zoom">
                    <img src={item.thumbnail} alt="" style={imgStyle} className="img-fluid radius-image news-image" /></a>
                <div className="blog-info align-self">
                    <a href="blog-single.html" className="blog-desc1">{item.title}
                    </a>
                    <div className="author align-items-center mt-3 mb-1">
                        <a href="author.html">{item.author}</a> in <a href="#url">{item.category}</a>
                    </div>
                    <ul className="blog-meta">
                        <li className="meta-item blog-lesson">
                            <span className="meta-value">{item.date_release}</span>
                        </li>
                        <li className="meta-item blog-students">
                            <span className="meta-value">{item.mins_read} min read</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPosts;