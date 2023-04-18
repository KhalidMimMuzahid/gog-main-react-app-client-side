import React from 'react';

const Messages = (props) => {
    return (
        <div className='messages'>
            <div className='messages_df'>
                <p className='message_text_df'>Hi, how are you?</p>
            </div>
            <div className='messages_user'>
                <p className='message_text_user'>I am good</p>
            </div>
            
        </div>
    );
};

export default Messages;