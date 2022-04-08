import React from 'react';
import './about.css';
import profile from '../../assets/Bruno.png';

export default function About() {  
  return (        
    <div className="about" id="aboutUs">
      <div className="sobreFoto">
        <span className=""><img src={profile} alt="profile"/></span>
      </div>      

      <div className="sobreTexto">
        <h3>Sobre Mim</h3>
        <p className="paragrafo1">
          Graduado em Sistemas de Informação na Faculdade UNA de Betim e formado em Técnico de Redes de Computadores
          com
          certificados da Cisco, atualmente estou imergido na área de desenvolvimento front-end, com o foco no ReactJS
          e React
          Native além de atuar como design de interfaces UI&UX e design gráfico, com o Photoshop, Illustrator, entre
          outros
          softwares para edição e criação de mídias sociais. Além do desenvolvimento, carrego uma ampla bagagem com
          metodologias ágeis, como o SCRUM e Kanban, na qual atualmente estou desenvolvendo um curso sobre SCRUM em
          parceria
          com a produtora Apostila Pocket que irá abordar desde o nível principiante até o nível avançado sobre essa
          metodologia incrível. Apaixonado por música e como todo bom desenvolvedor, amante de café.
        </p>
      </div>
    </div>    
  );
}