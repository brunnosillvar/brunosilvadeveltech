import './hero.css';
import React from 'react';

export default function Hero() {  

  return (
    <div className='hero' id="hero">
      <p className="text-1">Olá, meu nome é</p>
      <h1 className="text-2">Bruno Silva</h1>
      <h3 className="text-3">Dev Front-End, UX/UI Designer e Designer Gráfico.</h3>
      <a href="https://drive.google.com/file/d/1IJf5GRmhxALyQwj6_hpmmO8KxcCNA2Dz/view?usp=sharing" target="_blank" rel="noreferrer">
        <span className="botao-likedin">Meu Currículo</span>
      </a>
    </div>
  );
}