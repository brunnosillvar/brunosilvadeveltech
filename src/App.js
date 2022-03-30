import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/Auth';

function App() {  
  return (
    <div>       
      <AuthProvider>
        <BrowserRouter> 
          <ToastContainer autoClose={4000}/>                    
          <Routes/>               
        </BrowserRouter>
      </AuthProvider> 
    </div>
  );
}

export default App;
