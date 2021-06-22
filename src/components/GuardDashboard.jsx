import "../App.css";
import {MEMBERS} from '../shared/SocietyMembers';
import RenderMembers from './RenderMembers';
import Guard from './Guard/Guard'


function App() {
  return (
    <div className="App">    
      {/* <RenderStatusAndMessage id={flatNo}/> */}
      <Guard/>
      <RenderMembers members={MEMBERS}/>
    </div>
  );
}

export default App;