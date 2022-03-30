import { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';

import './certificates.css';

const listRef = firebase.firestore().collection('certificates').orderBy('name', 'asc');

export default function Certificates() {
  const [certificates, setCertificates] = useState([])
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
            image: doc.data().certificateUrl
          })
        })     
        setCertificates(list);        
    }    
  }

  return (
    <div className="certificates">   
      {loading ? (
        <div className="load">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <div className='list-certificates'>  
          {certificates.map((item, index) => {
            return(
              <article key={index}>
                <strong>{item.name}</strong>
                <img src={item.image} alt="certificado"/>          
              </article>                  
            )
          })}                
        </div>      
      )}   
    </div>
  );
}