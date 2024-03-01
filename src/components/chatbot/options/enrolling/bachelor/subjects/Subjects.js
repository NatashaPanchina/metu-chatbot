import React from 'react';
import { OptionsButton } from '../../../Options.styled';

export default function SubjectsOptions(props) {
  const options = [
    {
      text: 'Математика - Физика',
      handler: props.actionProvider.handle11ClassProgram,
      id: 1,
    },
    {
      text: 'Математика - Информатика',
      handler: () => {},
      id: 2,
    },
    {
      text: 'Химия - Биология',
      handler: () => {},
      id: 3,
    },
    {
      text: 'Химия - Физика',
      handler: () => {},
      id: 4,
    },
    {
      text: 'География - Математика',
      handler: () => {},
      id: 5,
    },
    {
      text: 'География - Иностранный язык',
      handler: () => {},
      id: 6,
    },
    {
      text: 'Другое',
      handler: () => {},
      id: 7,
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
