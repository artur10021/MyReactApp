import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import Profile from './components/Profile/Profile';



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
