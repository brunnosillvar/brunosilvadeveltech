import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Header from '../components/Header';
import Certificates from '../pages/Certificates';
import Projects from '../pages/Projects';
import RegisterCertificates from '../pages/RegisterCertificates';
import RegisterProjects from '../pages/RegisterProjects';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

export default function Routes(){
  return(     
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />        
        <Route exact path="/certificates" component={Certificates} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} isPrivate/>
        <Route exact path="/registerProjects" component={RegisterProjects} isPrivate/>
        <Route exact path="/registerCertificates" component={RegisterCertificates} isPrivate />
      </Switch>
    </>    
  )
}