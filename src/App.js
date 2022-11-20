
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPost from "./components/Profile/MyPosts/Post/MyPost";
import Content from "./components/Profile/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";


const App = () => {
  return (

          <div className="app-wrapper">
              <Header />
              <Navbar />

                  <div class='app-wrapper-content'>
                      <Routes>
                          <Route path="/dialogs/*" element={<Dialogs />} />
                          <Route path="/profile"  element={<Content />} />
                          <Route path="/news"  element={<News />} />
                          <Route path="/music"  element={<Music />} />
                          <Route path="/settings"  element={<Settings />} />
                      </Routes>
                  </div>
          </div>

  );
}




export default App;
