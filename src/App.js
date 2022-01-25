import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialoguesContainer from './components/Dialogues/DialoguesContainer';



function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigator />

        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile store={props.store} />} />
            <Route path='/dialogues/*' element={<DialoguesContainer store={props.store}/>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
