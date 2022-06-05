import {Link} from "react-router-dom";
import React from "react";
function Subreddit({title, description, subscribers}) {

    return (
        <article>
            <h1>Title</h1>
            <h4>{title}</h4>
            <br/>
            <h1>Description</h1>
            <h4>{description}</h4>
            <br/>
            <h1>Number of subscribers</h1>
            <h4>{subscribers}</h4>
            <br/>
            <h5>
                <Link to="/"> Take me back</Link>
            </h5>
        </article>
    )
}
export default Subreddit;