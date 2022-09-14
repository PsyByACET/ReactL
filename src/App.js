
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPost from "./components/Profile/MyPosts/Post/MyPost";
import Content from "./components/Profile/Content/Content";


const App = () => {
  return (
      <div className="app-wrapper">

          <Header />
          <Navbar />
          <Content />

          <footer>

          </footer>
      </div>

  );
}




export default App;
