import React from 'react';

import Header from '../../components/Header/Header.component';
import PostList from './components/PostList/PostList.component';

function HomePage() {
    return (
        <div>
            <Header />
            <PostList url={'https://jsonplaceholder.typicode.com/posts'} />
        </div>
    )
}

export default HomePage;
