import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import RenderStatusAndMessage from './components/RenderStatusAndMessage';
import {MEMBERS} from './shared/SocietyMembers';
import RenderMembers from './components/RenderMembers';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  var flatNo=1;
  return (
    <div className="App">
      {/* <AccountBox /> */}
      <RenderStatusAndMessage id={flatNo}/>
      <RenderMembers members={MEMBERS}/>
    </div>
  );
}

export default App;