import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Request from '../../../../renderprops/Request';

function CommentsComponent({ id }) {


    return (
        <Request

            url={`https://jsonplaceholder.typicode.com/posts/${id}/comments`}
            render={(data) => {
                return (
                    <Card style={{ width: '80%' }}>
                        <CardContent>
                            {(function () {
                                var counter = 1;
                                return (
                                    data.map(comment => {
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
                );
            }}
        />
    );
}

export default CommentsComponent;
