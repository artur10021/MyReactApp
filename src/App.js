import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigator />

        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
            <Route path='/dialogues/*' element={<Dialogues state={props.state.dialoguesPage}/>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
