import SidePanel from './components/Sidepanel';

//for testing purpose
import LoginWindow from './components/LoginComponent';
import Navigation_Bar from './components/NavigationBar';

function App() {
  return (
    <div className="App">

      <Navigation_Bar></Navigation_Bar>
      <SidePanel></SidePanel>
      < LoginWindow />
    </div>
  );
}

export default App;
