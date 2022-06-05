import axios from "axios";
import React, {useEffect, useState} from 'react';
import './Home.css';
import titleLength from '../../helpers/titleLength';
import Post from '../../components/post/Post';
import formatNumbers from "../../helpers/formatNumbers";

function Home () {

    const [content, setContent] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() =>{
        async function getData() {
            toggleLoading(true);
            setError(false);
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                console.log(result.data.data.children);
                setContent(result.data.data.children);
            } catch (e) {
                console.error(e);
                setError(true);
                setErrorMessage(e.message);
            }
            toggleLoading(false);
        }
        getData();
    },[]);



    return(
    <>

        <h1>Dit is de home pagina</h1>
        {loading &&
            <p>Loading...</p>
        }
        {error &&
            <p>{errorMessage}</p>
        }
        {!error && content && content.map((item) => {
            return(
                <Post key={item.data.id}
                      link={`https://www.reddit.com${item.data.permalink}`}
                      title={titleLength(item.data.title)}
                      subredditlink={`/subreddit/${item.data.subreddit}`}
                      subredditname={item.data.subreddit_name_prefixed}
                      comments={formatNumbers(item.data.num_comments)}
                      ups={formatNumbers(item.data.ups)}
                />
            )
        })
        }
    </>
    )
}

export default Home;