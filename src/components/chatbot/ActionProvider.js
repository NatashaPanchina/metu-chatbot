import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Привет! Как я могу помочь вам?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEnrollingOptions = () => {
    const botMessage = createChatBotMessage(
      'Выберите какая программа вас интересует: ',
      {
        widget: 'enrollingOptions',
      },
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBachelorsProgram = () => {
    const botMessage = createChatBotMessage(
      'Вы поступаете после 11 класса или на базе колледжа?',
      {
        widget: 'bachelorsOptions',
      },
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle11ClassProgram = () => {
    const botMessage = createChatBotMessage(
      'Выберите свои профильные предметы:',
      {
        widget: 'subjectsOptions',
      },
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleEnrollingOptions,
            handleBachelorsProgram,
            handle11ClassProgram,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
