import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../PageDefault';

import { Container } from './styles';

function Home() {
  return (
    <PageDefault>
      <Container>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="Vintage Culture x Beck’s - Unlock Your Soul @ São Paulo, Skyline"
        />

        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

        <Carousel category={dadosIniciais.categorias[1]} />

        <Carousel category={dadosIniciais.categorias[2]} />

        <Carousel category={dadosIniciais.categorias[3]} />

        <Carousel category={dadosIniciais.categorias[4]} />

        <Carousel category={dadosIniciais.categorias[5]} />
      </Container>
    </PageDefault>
  );
}

export default Home;
