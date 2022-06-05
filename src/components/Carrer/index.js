/* eslint-disable no-undef */
import React from 'react';
import './carrer.css';

export default function Carrer() {
  const boxes = document.querySelectorAll(".box");
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      }else {
        box.classList.remove("show");
      }      
    });
  }

  // eslint-disable-next-line no-undef
  $(document).ready(function() {    
    $(window).scroll(function() {
      $(".box").each(function(){
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("show");
          }else {
            $(this).removeClass("show");
          }
      });
    });
  })

  return (    
    <div className="carrer" id="carrer">
      <ul className="timeline">
        <li className='box'>
          <h4>Front-End Software Engineer - abr. de 2022 até o momento</h4>
          <p><strong>Inteli - Instituto de Tecnologia e Liderança</strong></p>
          <p className="paragrafo1">Desenvolvimento front-end com ReactJs e AngularJS.</p>
        </li>
        <li className='box'>
          <h4>Desenvolvedor Front-End - ago. de 2021 até fev. de 2022</h4>
          <p><strong>Ally Hub</strong></p>
          <p className="paragrafo1">Desenvolvimento front-end com ReactJs e AngularJS.</p>
        </li>
        <li className='box'>
          <h4>Desenvolvedor Front-End, mar. de 2021 até set. de 2021</h4>
          <p><strong>CUREM</strong></p>
          <p className="paragrafo1">Desenvolvimento front-end com Angular e design de interfaces com Figma.</p>
        </li>
        <li className='box'>
          <h4>Programador Junior, jan. de 2020 até ago. de 2021</h4>
          <p><strong>Mundo Wap Apps for Business</strong></p>
          <p className="paragrafo1">Desenvolvimento front-end com ReactJs, planejamento de testes, criação de
            casos de uso para testes, estratégia, controle de qualidade,
            testes manuais em sistemas web e aplicativos mobile.</p>
        </li>
        <li className='box'>
          <h4>Estagiário em Análise de Testes, dez. de 2018 até dez. de 2019</h4>
          <p><strong>Mundo Wap Apps for Business</strong></p>
          <p className="paragrafo1">Planejamento de testes, criação de casos de uso para testes, estratégia,
            controle de qualidade, testes manuais em sistemas web e aplicativos mobile.</p>
        </li>
        <li className='box'>
          <h4>Estágio de Suporte de T.I, ago. de 2017 até jun. de 2018</h4>
          <p><strong>Ferrosider Componentes</strong></p>
          <p className="paragrafo1">Atuação na área de suporte aos usuários, manutenção em computadores e impressoras,
            criação de relatórios, controle de
            estoque, administração de rede, suporte básico de 1° nível nos sistemas utilizados pela empresa.</p>
        </li>
      </ul>
    </div>    
  );
}