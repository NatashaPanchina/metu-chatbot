import React from 'react';
import { OptionsButton } from '../../Options.styled';

export default function BachelorsOptions(props) {
  const options = [
    {
      text: 'После 11 класса',
      handler: props.actionProvider.handle11ClassProgram,
      id: 1,
    },
    {
      text: 'На базе колледжа',
      handler: () => {},
      id: 2,
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
