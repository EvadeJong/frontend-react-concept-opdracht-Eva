import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import SubredditContext from '../../components/subreddit/SubredditContext';
import formatNumbers from '../../helpers/formatNumbers'

function Subreddit (){

    const {subredditId} = useParams();
    const [content, setContent] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() =>{
        async function getData() {
            toggleLoading(true);
            setError(false);
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(result.data.data);
                setContent(result.data.data);

            } catch (e) {
                console.error(e.message);
                setError(true);
                setErrorMessage(e.message);
            }
            toggleLoading(false);
        }
        getData();
    },[subredditId]);



    return(
        <>
            {loading &&
                <p>Loading...</p>
            }
            {error &&
                <p>{errorMessage}</p>
            }
            {!error && content &&
                <SubredditContext
                    title={content.title}
                    description={content.public_description}
                    subscribers={formatNumbers(content.subscribers)}
                />
            }
        </>
    )
}

export default Subreddit;