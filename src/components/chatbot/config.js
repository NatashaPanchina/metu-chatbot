import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './options/Options';
import EnrollingOptions from './options/enrolling/Enrolling';
import BotAvatar from './avatar/BotAvatar';
import Header from './header/Header';
import BachelorsOptions from './options/enrolling/bachelor/Bachelor';
import SubjectsOptions from './options/enrolling/bachelor/subjects/Subjects';

const botName = 'METU ChatBot';

const config = {
  initialMessages: [
    createChatBotMessage(`Привет! Я ${botName}. Как я могу помочь вам?`, {
      widget: 'options',
    }),
  ],
  botName,
  customStyles: {
    chatHeader: {
      backgroundColor: '#5ccc9d',
    },
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: 'enrollingOptions',
      widgetFunc: (props) => <EnrollingOptions {...props} />,
    },
    {
      widgetName: 'bachelorsOptions',
      widgetFunc: (props) => <BachelorsOptions {...props} />,
    },
    {
      widgetName: 'subjectsOptions',
      widgetFunc: (props) => <SubjectsOptions {...props} />,
    },
  ],
  customComponents: {
    // Replaces the default header
    header: () => <Header />,
    // Replaces the default bot avatar
    botAvatar: () => <BotAvatar />,
    // Replaces the default bot chat message container
    //botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // Replaces the default user icon
    //userAvatar: (props) => <MyCustomAvatar {...props} />,
    // Replaces the default user chat message
    //userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
};

export default config;
