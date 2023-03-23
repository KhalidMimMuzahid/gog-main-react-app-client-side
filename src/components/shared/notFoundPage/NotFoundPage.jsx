import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h2>404 page not found back to <Link to='/'> home</Link> </h2>
        </div>
    );
};

export default NotFoundPage;