import './App.css';
import Nav from "../src/components/nav/nav.js";
import Main from './components/main/main.js';
import Videos from './components/videos/videos.js';
import Tour from './components/tour/tour.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Videos />
      <Tour /> 
    </div>
  );
}

export default App;
