import { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';

import './projects.css';
import { FiArrowRight, FiMinus } from 'react-icons/fi'

const listRef = firebase.firestore().collection('projects').orderBy('name', 'asc');

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCertificates(){
      await listRef
      .get()
      .then((snapshot) => {        
        updateState(snapshot);               
      })
      .catch((error) => {
        setLoading(false);
      })
      setLoading(false)
    }
    loadCertificates();
    return() => {

    }
  },[updateState])  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function updateState(snapshot) {
    const isCollectionEmpty = snapshot.size === 0;
    if(!isCollectionEmpty){
      let list = [];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            link: doc.data().link,
            description: doc.data().description
          })
        })     
        setProjects(list);        
    }    
  }

  return (
    <div className="projects">   
      {loading ? (
        <div className="load">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <div className='list-projects'>  
          <ul>
            {projects.map((item, index) => {
              return(                
                <li key={index}>
                  <div className='text'>
                    <span>{item.name}</span>
                    <p>{item.description ? item.description : <FiMinus size={24} color="#fff"/>}</p>
                  </div>
                  <div className='link-git'>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Ver projeto<FiArrowRight size={24} color="#fff"/>
                    </a>               
                  </div>
                </li>                
              )
            })}                
          </ul>
        </div>      
      )}   
    </div>
  );
}