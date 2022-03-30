import { useState } from 'react';
import './registerProjects.css';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';


export default function RegisterProjects(){  

  const [name, setName] = useState('');
  const [github, setGithub] = useState('');
  const [description, setDescription] = useState('');
    

  async function handleSave(e){
    e.preventDefault();
    await firebase.firestore().collection('projects')
    .add({
      name: name,
      link: github,
      description: description
    })
    .then(async (value) => {            
      toast.success('Projeto cadastrado com sucesso!');
      setName('');
      setGithub('');
      setDescription('');
    })    
  }

  return(
    <div>      
      <div className='content'>        
        <div className='container'>
          <form className='form-projects' onSubmit={handleSave}>            
            
            <input type="text" placeholder='Nome do projeto.' value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="text" placeholder='Link do Github.' value={github} onChange={(e) => setGithub(e.target.value)} required/>            
            <textarea type="text" placeholder='Descrição.' value={description} onChange={(e) => setDescription(e.target.value)} required/>           

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}