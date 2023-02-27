import "./basestyles/App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";

const App = () => {
  return (
    <div id="main">
      <Navbar></Navbar>
      <Posts></Posts>
      <NewPost></NewPost>
    </div>
  );
};

export default App;
