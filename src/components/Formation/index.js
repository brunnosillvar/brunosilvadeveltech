/* eslint-disable no-undef */
import React from 'react';
import './formation.css';
import { FaGraduationCap } from 'react-icons/fa'

export default function Carrer() {  

  // eslint-disable-next-line no-undef
  $(document).ready(function() {    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }          
      });
    });
  })

  
  return (    
    <div className="row formation slideanim" id="formation">      
        <div className="col-sm-6 groupFormation">
          <FaGraduationCap color="#FFF" size={40}/>
          <h4>Graduação, Sistemas de Informação</h4>
          <strong>Centro Universitário Una, 2016 - 2020</strong>
        </div>
        <div className="col-sm-6 groupFormation">
          <FaGraduationCap color="#FFF" size={40}/>
          <h4>Técnico, Redes de Computadores</h4>
          <strong>SESI SENAI Betim CETEM Maria Madalena Nogueira, 2015 - 2016</strong>
        </div>      
    </div>
  );
}