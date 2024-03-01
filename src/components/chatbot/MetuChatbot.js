import Chatbot from 'react-chatbot-kit';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

export default function MetuChatBot() {
  // const saveMessages = (messages) => {
  //   localStorage.setItem('chat_messages', JSON.stringify(messages));
  // };

  // const loadMessages = () => {
  //   const messages = JSON.parse(localStorage.getItem('chat_messages'));
  //   return messages;
  // };

  return (
    <Chatbot
      config={config}
      headerText="METU Chatbot"
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      //messageHistory={loadMessages()}
      //saveMessages={saveMessages}
      //runInitialMessagesWithHistory
    />
  );
}
