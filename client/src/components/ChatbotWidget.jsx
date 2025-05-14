// ChatbotWidget.jsx
import React from 'react';

const ChatbotWidget = () => (
  <iframe
    title="Sitaare Chatbot"
    allow="microphone;"
    width="350"
    height="500"
    src="https://console.dialogflow.com/api-client/demo/embedded/yourDialogflowID"
    className="fixed bottom-4 right-4 shadow-lg rounded"
  ></iframe>
);

export default ChatbotWidget;
