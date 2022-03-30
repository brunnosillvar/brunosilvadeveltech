import { useState, useEffect, createContext } from 'react';
import firebase from '../services/firebaseConnection';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadStorage(){
      const storageUser = localStorage.getItem('brunnosillvar')
      
      if(storageUser){
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      
      setLoading(false);
    }
    loadStorage();
  }, [])

  // Fazer Login
  async function signIn(email, password){
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {  
      let data = {
        email: email,
      }  
      setUser(data);
      storageUser(data);           
      setLoadingAuth(false);            
      toast.success('Bem vindo de volta!');
    })
    .catch((error) => {
      toast.error('Ops! Algo deu errado!');      
      setLoadingAuth(false)
    })
  }  

  // Salvar o usuário no Storage
  function storageUser(data){
    localStorage.setItem('brunnosillvar', JSON.stringify(data))
  }

  // Fazer Logout
  async function signOut(){
    await firebase.auth().signOut();
    localStorage.removeItem('brunnosillvar');
    setUser(null);    
  }

  return(
    <AuthContext.Provider 
    value={{
      signed: !!user,
      user, 
      loading,      
      signOut,
      signIn,
      loadingAuth,
      setUser,
      storageUser,
    }}
    >
      {children}           
    </AuthContext.Provider>    
  )  
}

export default AuthProvider;