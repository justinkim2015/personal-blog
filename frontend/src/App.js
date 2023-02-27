import "./basestyles/App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div id="main">
      <Navbar></Navbar>
      <Posts></Posts>
    </div>
  );
};

export default App;
