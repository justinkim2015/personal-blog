import './basestyles/App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Post from './components/Post';

const App = () => {
  return (
    <div id="main">
      <Navbar></Navbar>
      <Posts></Posts>
    </div>
  );
}

export default App;
