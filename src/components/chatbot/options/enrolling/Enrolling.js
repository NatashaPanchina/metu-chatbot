import React from 'react';
import { OptionsButton } from '../Options.styled';

export default function EnrollingOptions(props) {
  const options = [
    {
      text: 'Бакалавриат',
      handler: props.actionProvider.handleBachelorsProgram,
      id: 1,
    },
    {
      text: 'Магистратура',
      handler: () => {},
      id: 2,
    },
    {
      text: 'Докторантура',
      handler: () => {},
      id: 3,
    },
    {
      text: 'Колледж',
      handler: () => {},
      id: 4,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <OptionsButton
      size="small"
      variant="outlined"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </OptionsButton>
  ));

  return <div>{buttonsMarkup}</div>;
}
