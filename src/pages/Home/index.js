import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Main,
  ImageSection,
  Title,
  Description,
  Button,
  TextButton,
} from './styles';

import imgBackground from '../../assets/background-home.svg';

const Home = () => {
  return (
    <Container>
      <Main>
        <header>
          <Title>Anmer.</Title>
        </header>
        <Description>
          Com a Anmer, você pode escrever <br /> notas online de maneira rápida
          <br /> e fácil
        </Description>
        <Link to="/dashboard">
          <Button>
            <TextButton>Começar Já</TextButton>
          </Button>
        </Link>
      </Main>
      <ImageSection>
        <img src={imgBackground} alt="Notes" />
      </ImageSection>
    </Container>
  );
};

export default Home;
