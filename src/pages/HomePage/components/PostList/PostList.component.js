import React, { useState, useEffect } from 'react';

import PostInfo from '../PostInfo/PostInfo.component';
import Comments from '../Comments/Comments.component';

import Loader from '../../../../components/Loader/Loader.component';

function PostlistComponent() {

    var [posts, setPosts] = useState([]);
    var [postId, setPostId] = useState(null);
    var [isLoading, setLoading] = useState(false);

    function setId(id) {
        setPostId(id);
    }


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => {
                    setPosts(data.slice(0, 5));
                    setLoading(false);
                });
        }, 500)
    }, []);

    if (isLoading) return <Loader />;

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {posts.map(post => (
                    <PostInfo
                        key={post.id}
                        {...post}
                        setId={setId}
                    />
                ))}
            </div>
            <hr />
            {postId && <Comments id={postId} />}
        </React.Fragment>
    )
}

export default PostlistComponent;
