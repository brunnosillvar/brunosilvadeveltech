import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaBehance, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {

  return (    
    <div className="footer" id="network">
      <div className='network'>
        <a href="https://www.linkedin.com/in/bruno-silva-rodrigues/" target="_blank" rel="noreferrer">
          <FaLinkedinIn color="#FFF" size={35} />
        </a>
        <a href="https://github.com/brunnosillvar" target="_blank" rel="noreferrer">
          <FaGithub color="#FFF" size={35} />
        </a>
        <a href="https://www.behance.net/brunosilva130" target="_blank" rel="noreferrer">
          <FaBehance color="#FFF" size={35} />
        </a>
        <a href="https://www.instagram.com/brunnosillvar/" target="_blank" rel="noreferrer">
          <FaInstagram color="#FFF" size={35} />
        </a>    
      </div>         
      <p>&copy; 2021 Bruno Silva Development in Technology. Todos os Direitos Reservados. Desenvolvido por Bruno Silva
      Development in Technology</p>                     
    </div>    
  );
}