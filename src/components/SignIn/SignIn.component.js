import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useForm from '../../hooks/useForm';

function SignInComponent() {

    var { data, change } = useForm();


    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Card style={{ padding: '50px', margin: '50px', width: '300px' }}>
            <CardContent>
                <h3>Sign In</h3>
                <form onSubmit={handleSubmit}>
                    <TextField
                        onChange={change}
                        style={{ margin: '10px' }}
                        label="Username"
                        variant="outlined"
                        type="text"
                        id="username"
                        placeholder="Username"
                        name="username"
                    />
                    <TextField
                        onChange={change}
                        style={{ margin: '10px' }}
                        label="password"
                        variant="outlined"
                        type="password"
                        id="password"
                        placeholder="Password"
                        name="password"
                    />
                    <Button type="submit" style={{ margin: '10px' }} variant="contained" color="primary">SignIn</Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignInComponent;
