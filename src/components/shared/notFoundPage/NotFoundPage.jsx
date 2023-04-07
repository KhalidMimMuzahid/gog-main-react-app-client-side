import React from 'react';
import "./NotFoundPage.css";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            
            <div class="page-404">
                <div class="outer">
                    <div class="middle">
                        <div class="inner">
                            
                            <div class="inner-circle"><i class="fa fa-cogs"></i><span>404</span></div>
                            <span class="inner-status">Opps! Internal Server Error!</span>
                            <span class="inner-detail">Unfortunately we're having trouble loading the page you are looking for. Please come back in a while.</span>
                            <div className='text-center'>
                                <Link to='/'><span><button className='btn btn-success'>Back to home</button></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;