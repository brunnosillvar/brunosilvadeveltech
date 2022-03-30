import { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import './registerCertificates.css';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';


export default function RegisterCertificates(){  

  const [name, setName] = useState('');
  const [certificateUrl, setCertificateUrl] = useState(null);
  const [imageCertificate, setImageCertificate] = useState(null);

  function handleFile(e){
    if(e.target.files[0]){
      const image = e.target.files[0];

      if(image.type === 'image/jpeg' || image.type === 'image/png' || image.type === 'image/jpg'){
        setImageCertificate(image);
        setCertificateUrl(URL.createObjectURL(e.target.files[0]));
      }else{
        alert('Envie uma imagem do tipo PNG, JPEG ou JPG.');
        setImageCertificate(null);
        return null;
      }
    }
  }

  async function handleUpload(id){
    const currentUid = id;

    await firebase.storage()
    .ref(`images/${currentUid}/${imageCertificate.name}`)
    .put(imageCertificate)
    .then(async () => {
      await firebase.storage()
      .ref(`images/${currentUid}`)
      .child(imageCertificate.name).getDownloadURL()
      .then(async (url) => {
        let urlFoto = url;
        await firebase.firestore().collection('certificates')
        .doc(currentUid)
        .update({
          certificateUrl: urlFoto,
          nome: name
        })
        .then(() => {          
        })
      })
    })
  }

  async function handleSave(e){
    e.preventDefault();
    await firebase.firestore().collection('certificates')
    .add({
      name: name
    })
    .then(async (value) => {
      let id = value.id;
      handleUpload(id);
      toast.success('Certificado cadastrado com sucesso!');
      setName('');
      setCertificateUrl(null);
    })    
  }

  return(
    <div>      
      <div className='content'>        
        <div className='container'>
          <form className='form-certificate' onSubmit={handleSave}>            
            
            <input type="text" placeholder='Nome do certificado.' value={name} onChange={(e) => setName(e.target.value)} required/>

            <label className='label-avatar'>
              <span><FiUpload color="#fff" size={25}/></span>
              <input type="file" accept='image/*' onChange={handleFile} required/><br/>
              { certificateUrl ===  null ? '' : <img src={certificateUrl} width="250" height="250" alt="certificate"/>}                                      
            </label>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}