import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function HeaderComponent() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Design Patterns In React
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderComponent;