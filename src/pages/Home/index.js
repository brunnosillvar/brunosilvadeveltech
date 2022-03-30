import React from 'react';
import './home.css';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Carrer from '../../components/Carrer';
import Formation from '../../components/Formation';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
 return (
   <div className='Home'>     
     <Hero/>
     <About/>
     <Carrer/>
     <Formation/>
     <Contact/>
     <Footer/>
   </div>
 );
}