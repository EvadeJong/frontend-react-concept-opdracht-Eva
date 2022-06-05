import React from "react";
import {Link} from "react-router-dom";
function Post({link, title, subredditlink, subredditname, comments, ups}) {

    return (
        <article>
            <a href={link}>{title}</a>
            <h5>
                <Link to={subredditlink} target="_blank" className="active-link">{subredditname}</Link>
            </h5>
            <span>Comments: {comments} - </span>
            <span>Ups: {ups} </span>
        </article>
    )
}
export default Post;