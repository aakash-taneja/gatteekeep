import "./App.css";
import RenderStatusAndMessage from './components/RenderStatusAndMessage';
import {MEMBERS} from './shared/SocietyMembers';
import RenderMembers from './components/RenderMembers';



function App() {
  var flatNo=1;
  return (
    <div className="App">    
      <RenderStatusAndMessage id={flatNo}/>
      <RenderMembers members={MEMBERS}/>
    </div>
  );
}

export default App;