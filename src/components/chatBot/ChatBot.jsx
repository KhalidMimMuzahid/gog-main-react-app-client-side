import React from "react";
import "./CharBot.css";
// import axios from 'axios';
import Messages from "./Messages";

const ChatBot = () => {
  // const textQuery = async(text) => {
  //     const response = await axios.post("http://localhost:5000/chat-bot-mesages", {
  //         "text":"hi"
  //     })
  //     console.log("response form dialogflow", response);
  // }

  return (
    <div className="chatbot">
      <div className="chatbot_header">
        <h3 className="chatbot_header_text">Geeks of Gurukul</h3>
        <button className="chatbot_header_btn">&#10060;</button>
      </div>
      <div className="chatbot_body">
        <div className="messages">
          {/* create a componets for see the messages */}
          <Messages />
        </div>
      </div>
      <div className="chatbot_footer">
        {/* <input className='chatbot_footer_input' type='text' placeholder='type here'/>
                <button className='chatbot_footer_btn' onClick={() => textQuery()}>send</button> */}
      </div>
    </div>
  );
};

export default ChatBot;
