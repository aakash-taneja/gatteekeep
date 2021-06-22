import "./App.css";
import { AccountBox } from "./components/accountBox";
import Dashboard from './Dashboard';
import Guard from './components/Guard/Guard';
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';



function App() {
 
  return (  
    
    <Switch>      
        <Route exact path="/" component={AccountBox}/>
        <Route path="/dashboard" component={Dashboard}/>      
        <Route path="/guardDashboard" component={Guard}/>              
    </Switch>
  );
}

export default App;