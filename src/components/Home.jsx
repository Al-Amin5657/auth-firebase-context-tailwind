import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProviders';

const Home = () => {
    const { user, createUser } = useContext(AuthContext)
    console.log(createUser);
    return (
        <div>
            <h3>This is home {user && <span>{user.displayName}</span>}</h3>
        </div>
    );
};

export default Home;