import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Form from '../../renderprops/Form'


function SignUpComponent() {


    function handleSubmit(e, data) {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Form
            render={(data, handleChange) => {
                return (
                    <Card style={{ padding: '50px', margin: '50px', width: '300px' }}>
                        <CardContent>
                            <h3>Sign Up</h3>
                            <form onSubmit={(e) => handleSubmit(e, data)}>
                                <TextField
                                    onChange={handleChange}
                                    style={{ margin: '10px' }}
                                    label="Username"
                                    variant="outlined"
                                    type="text"
                                    id="signup_username"
                                    placeholder="Username"
                                    name="username"
                                />
                                <TextField
                                    onChange={handleChange}
                                    style={{ margin: '10px' }}
                                    label="name"
                                    variant="outlined"
                                    type="text"
                                    id="signup_name"
                                    placeholder="Name"
                                    name="name"
                                />
                                <TextField
                                    onChange={handleChange}
                                    style={{ margin: '10px' }}
                                    label="password"
                                    variant="outlined"
                                    type="password"
                                    id="signup_password"
                                    placeholder="Password"
                                    name="password"
                                />
                                <Button type="submit" style={{ margin: '10px' }} variant="contained" color="primary">SignUp</Button>
                            </form>
                        </CardContent>
                    </Card>
                );
            }}
        />
    )
}

export default SignUpComponent;
