import React from 'react'
import {Link, NavLink} from "react-router-dom";

function Header (){

    return(
    <>
        <nav>
            <ul>
                <li>
                    <NavLink className="active-link" exact to="/">Hottests posts</NavLink>
                </li>
                <li>
                    <NavLink className="active-link" to="/subreddit/:subredditId">Subreddit</NavLink>
                </li>
                <li>
                    <Link to={{pathname: "https:/www.reddit.com"}} target="_blank" className="active-link">Reddit</Link>
                </li>
                <li>
                    <Link to={{pathname: "https:/www.reddit.com/r/memes"}} target="_blank" className="active-link">Memes</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Header;