import "./App.css";
import { AccountBox } from "./components/accountBox";
import Dashboard from './Dashboard';
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
 
  return (  
    <Switch>
      <AppContainer>
        <Route exact path="/" component={AccountBox}/>
        <Route path="/dashboard" component={Dashboard}/>      
        </AppContainer>
    </Switch>
  );
}

export default App;