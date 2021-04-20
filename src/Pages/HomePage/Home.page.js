import React from 'react';

import HeaderComponent from '../../components/Header/Header.component';
import SignInComponent from '../../components/SignIn/SignIn.component';
import SignUpComponent from '../../components/SignUp/SignUp.component';

function HomePage() {
    return (
        <div>
            <HeaderComponent />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <SignInComponent />
                <SignUpComponent />
            </div>
        </div>
    )
}

export default HomePage;
