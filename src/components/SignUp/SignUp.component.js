import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SignUpComponent() {

    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');
    var [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log({
            name,
            username,
            password
        });
    }
    return (
        <Card style={{ padding: '50px', margin: '50px', width: '300px' }}>
            <CardContent>
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <TextField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ margin: '10px' }}
                        label="Username"
                        variant="outlined"
                        type="text"
                        id="username"
                        placeholder="Username"
                        name="username"
                    />
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ margin: '10px' }}
                        label="name"
                        variant="outlined"
                        type="text"
                        id="name"
                        placeholder="Name"
                        name="name"
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ margin: '10px' }}
                        label="password"
                        variant="outlined"
                        type="text"
                        id="password"
                        placeholder="Password"
                        name="password"
                    />
                    <Button type="submit" style={{ margin: '10px' }} variant="contained" color="primary">SignUp</Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignUpComponent
