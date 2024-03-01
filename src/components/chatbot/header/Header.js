import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')(() => ({
  borderTopRightRadius: 5,
  borderTopLeftRadius: 5,
  backgroundColor: 'rgb(92, 204, 157)',
  fontFamily: 'Arial',
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.85rem',
  color: '#fff',
  padding: 12.5,
  fontWeight: 'bold',
}));

export default function Header() {
  return <Container>METU Чатбот</Container>;
}
