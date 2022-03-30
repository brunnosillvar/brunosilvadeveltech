import React from "react";
import "./header.css";
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo2Light.png';
import { Link } from 'react-router-dom';

export default function Header() {  
  return (
    <header id="main-header">
      <div className="container-fluid p-0">
        <nav className="navbar navbar-default navbar-expand-md navbar-fixed-top">
          <Link to="/"><img src={logo} height="40px" alt="logo" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FiMenu color="#fff" size={30} />
          </button>
          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto">              
              <a className="nav-item nav-link" href="/#aboutUs">
                Sobre
              </a>
              <a className="nav-item nav-link" href="/#carrer">
                Carreira
              </a>
              <a className="nav-item nav-link" href="/#formation">
                Formação
              </a>
              <Link to='/projects' className="nav-item nav-link">
                Projetos
              </Link>
              <Link to='/certificates' className="nav-item nav-link">
                Certificados
              </Link>    
              <a className="nav-item nav-link" href="/#contact">
                Contato
              </a>              
            </div>
          </section>          
        </nav>
      </div>
    </header>
  );
}