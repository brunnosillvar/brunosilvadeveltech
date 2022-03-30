import { useContext } from "react";
import './dashboard.css';
import { FiLogOut, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';

export default function Dashboard(){    

  const { signOut } = useContext(AuthContext);  

  return(
    <div>     
      <div className="content">               
          <div className="container dashboard">            
            <button className="logout" onClick={signOut}>
              <FiLogOut size={25} color="#fff"/>
              Logout
            </button>
            <Link to="/registerCertificates" className="new">
              <FiPlus size={25} color="#fff" />
              Registrar Certificado
            </Link>
            <Link to="/registerProjects" className="new">
              <FiPlus size={25} color="#fff" />
              Registrar Projeto
            </Link>
          </div>        
      </div>                
    </div>
  )
}