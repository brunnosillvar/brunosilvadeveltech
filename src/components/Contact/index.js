import React, { useState } from 'react';
import './contact.css';
import { toast } from 'react-toastify';

export default function Contact() { 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');  
  const [loading, setLoading] = useState(false);  

  async function formSubmit(e) {
    e.preventDefault();
    setLoading(true)

    const formData = new FormData();
    formData.append(
      'Nome',
      name
    )
    formData.append(
      'Email',
      email
    )
    formData.append(
      'Assunto',
      assunto
    )
    formData.append(
      'Mensagem',
      mensagem
    )
    await fetch("https://getform.io/f/f6543ea3-b49e-44c5-96ee-fa76bfc357c4", {
      method: "POST",
      body: formData,
    })
    .then(() => {
      toast.success('Email enviado com sucesso! Em breve retornaremos o contato!')
      setLoading(false)
      setName('');
      setEmail('');
      setAssunto('');
      setMensagem('');
    })
    .catch(() => {
      toast.error('Houve algum erro. Tente novamente mais tarde!')
      setLoading(false)
    })
  }

  return (           
    <form onSubmit={formSubmit} className="contact" id="contact">      
      <h4>Contate-me</h4>   
      <input type="text" name="Name" placeholder='Nome Completo' value={name} onChange={(e) => setName(e.target.value)} required/>
      <input type="text" name="Email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <input type="text" name="Assunto" placeholder='Assunto (Opicional)' value={assunto} onChange={(e) => setAssunto(e.target.value)}/>
      <textarea type="text" name="Mensagem" placeholder='Mensagem' value={mensagem} onChange={(e) => setMensagem(e.target.value)} required/>       
      <button type="submit">{loading ? (
        <span class="spinner"></span>
      ) : 'Enviar'}</button>
    </form>    
  );
}