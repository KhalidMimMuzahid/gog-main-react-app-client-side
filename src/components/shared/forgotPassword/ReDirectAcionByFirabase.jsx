import React from 'react';

import { useLocation } from 'react-router-dom';
import SetPass from './SetPass';
import EmailVerification from './EmailVerification';

const ReDirectAcionByFirabase = () => {
    let component
    const location= useLocation()
    
    console.log("location: ", location)
    const search =  location?.search
    if( search?.startsWith("?mode=resetPassword")){
        component = <SetPass/>
    }
    else if( search?.startsWith("?mode=verifyEmail") ){
        component = <EmailVerification/>
    }

    return component;
};

export default ReDirectAcionByFirabase;