import React from 'react';
import { OptionsButton } from './Options.styled';

export default function Options(props) {
  const options = [
    {
      text: 'Поступление',
      handler: props.actionProvider.handleEnrollingOptions,
      id: 1,
    },
    {
      text: 'О METU',
      handler: () => {},
      id: 2,
    },
    {
      text: 'Кафедры',
      handler: () => {},
      id: 3,
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
