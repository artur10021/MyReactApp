import './App.css';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Profile from './components/Profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Navigator></Navigator>
      <Profile></Profile>
    </div>
  );
}


export default App;
