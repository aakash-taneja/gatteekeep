import "./App.css";
import { AccountBox } from "./components/accountBox";
import Dashboard from './Dashboard';
import GuardDashboard from './components/GuardDashboard';
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';



function App() {
 
  return (  
    
    <Switch>      
        <Route exact path="/" component={AccountBox}/>
        <Route path="/dashboard" component={Dashboard}/>      
        <Route path="/guardDashboard" component={GuardDashboard}/>              
    </Switch>
  );
}

export default App;