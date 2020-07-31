import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../../../components/Logo';

function Footer() {
  return (
    <FooterBase>
      <Logo />
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
