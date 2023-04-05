import React from 'react';
import './WhatsAppMessage.css'
import { AiOutlineWhatsApp } from 'react-icons/ai';

const WhatsAppMessage = () => {
    return (
        <div>
            <div class="cleverwa-toggle">
                <span class="cleverwa-toggle-text">Chat with us on WhatsApp</span>
                <div class="cleverwa-toggle-icon">
                    <svg class="WhatsApp" width="20px" height="20px" viewBox="0 0 90 90"><use xlink:href="#cleverwa-logo"></use></svg>
                    <div class="cleverwa-toggle-close"></div>
                </div>
			</div>
        </div>
    );
};

export default WhatsAppMessage;