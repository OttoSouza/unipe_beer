import React from 'react';
import { Container } from '@material-ui/core';
import MainStyles from './styles';

// import { Container } from './styles';

export default function MainContainer({ children }) {
  const classes = MainStyles();
  return (
    <Container className={classes.container} maxWidth='md'>
      {children}
    </Container>
  );
}
