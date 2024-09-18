import './App.css';
import Buttons from './components/Buttons/Buttons';
import Members from './components/Members/Members';
import SearchMembers from './components/searchMembers/SearchMembers';

function App() {
  return (
    <div className="App">
      <h1>Frontend Developer</h1>
      <h2>Add member to Frontend Developer Team</h2>
      <div className="Members">
      <SearchMembers/>
<Members/>
<Buttons/>
      </div>
      

    </div>
  );
}

export default App;
