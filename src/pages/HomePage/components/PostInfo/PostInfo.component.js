import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './PostInfo.css';

function PostInfoComponent({ title, setId, id }) {
    return (
        <div className="userinfo" onClick={() => {
            setId(id);
        }}>
            <Card className="userinfo__card">
                <CardContent>
                    <Typography>
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default PostInfoComponent
