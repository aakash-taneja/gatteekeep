import "./App.css";
import { AccountBox } from "./components/accountBox";
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom';


function App() {
 
  return (  
    <Switch>
        <Route exact path="/" component={AccountBox}/>
        <Route path="/dashboard" component={Dashboard}/>      
    </Switch>
  );
}

export default App;