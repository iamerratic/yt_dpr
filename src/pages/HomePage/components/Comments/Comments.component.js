import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Loader from '../../../../components/Loader/Loader.component';

function CommentsComponent({ id }) {

    var [comments, setComments] = useState([]);
    var [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(res => res.json())
                .then(data => {
                    setComments(data);
                    setLoading(false);
                });
        }, 500)
    }, [id]);

    if (isLoading) return <Loader />;

    return (
        <Card style={{ width: '80%' }}>
            <CardContent>
                {(function () {
                    var counter = 1;
                    return (
                        comments.map(comment => {
                            return (
                                <div key={comment.name} style={{ padding: '10px', margin: '10px' }}>
                                    <h4>{counter++}. {comment.name}</h4>
                                    <h5>{comment.body}</h5>
                                </div>
                            );
                        })
                    );
                })()}
            </CardContent>
        </Card>
    )
}

export default CommentsComponent;
