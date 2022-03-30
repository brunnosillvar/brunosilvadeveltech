
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth'
import './signin.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, loadingAuth} = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    if(email !== '' && password !== ''){
      signIn(email, password);
    }
  }

  return (
    <div className="container-center">
      <div className="login">        
        {!loadingAuth && (
          <>            
            <form onSubmit={handleSubmit}>
              <h1>SignIn</h1>
              <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="**************" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className='btn-login' type="submit">Login</button>
            </form>            
          </>
        )}
        {loadingAuth && (
          <>
            <div className="load">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SignIn;
