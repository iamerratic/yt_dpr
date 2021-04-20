import React, { useState } from 'react';

import PostInfo from '../PostInfo/PostInfo.component';
import Comments from '../Comments/Comments.component';

import useRequest from '../../../../hooks/useRequest';
import Loader from '../../../../components/Loader/Loader.component';

function PostlistComponent() {

    var [postId, setPostId] = useState(null);
    var { isLoading, data } = useRequest('https://jsonplaceholder.typicode.com/posts');

    function setId(id) {
        setPostId(id);
    }

    if (isLoading) return <Loader />;

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map(post => (
                    <PostInfo
                        key={post.id}
                        {...post}
                        setId={setId}
                    />
                ))}
            </div>
            <hr />
            { postId && <Comments id={postId} />}
        </React.Fragment>
    );
}

export default PostlistComponent;
