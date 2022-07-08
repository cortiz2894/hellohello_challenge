import React from 'react';
import Container from '@mui/material/Container';
import { Stepper } from './components/Stepper/Stepper';
import { ItemCard } from './components/Card/ItemCard';
// Styles
import './App.scss';

function App(): JSX.Element {
  const containerStyles = {
    maxWidth: 860,
    display: 'flex',
    padding: '100px 0px',
    alignItems: 'flex-start',
  };

  return (
    <Container
      maxWidth={false}
      sx={containerStyles}
      disableGutters
    >
      <Stepper />
      <ItemCard />
    </Container>
  );
}

export default App;
