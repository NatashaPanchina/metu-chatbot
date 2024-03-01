import 'react-chatbot-kit/build/main.css';
import MetuChatBot from './components/chatbot/MetuChatbot';
import ChatButton from './components/chatbutton/ChatButton';
import styled from '@emotion/styled';
import { useOutsideClick } from './hooks/useOutsideClick';

const ChatBotContainer = styled('div')(() => ({}));

function App() {
  const [ref] = useOutsideClick();
  const toggleDisplay = (event) => {
    event.stopPropagation();
    ref.current.classList.toggle('none');
  };

  return (
    <div className="App">
      <ChatBotContainer ref={ref} className="none">
        <MetuChatBot />
      </ChatBotContainer>
      <div onClick={(event) => toggleDisplay(event)}>
        <ChatButton />
      </div>
    </div>
  );
}

export default App;
