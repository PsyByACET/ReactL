
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {updateNewPostText} from "./Redux/store";
import DialogsContainer from "./components/Dialogs/DialogContainer";



const App = (props) => {

  return (
          <div className="app-wrapper">
              <Navbar state={props.state.sidebar} />
              <Header path ="kek"/>
                <h1>{props.state.category}</h1>
              <div class='app-wrapper-content'>
                  <Routes>
                      <Route path="/dialogs/*" element={<DialogsContainer store = {props.store}/>} />
                      <Route path="/profile"  element={<Profile store={props.store} />} />
                      <Route path="/news"  element={<News />} />
                      <Route path="/music"  element={<Music />} />
                      <Route path="/settings"  element={<Settings />} />
                  </Routes>
              </div>
          </div>

  );
}




export default App;
