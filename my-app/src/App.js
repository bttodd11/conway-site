import './App.css';
import Nav from "../src/components/nav/nav.js";
import Main from './components/main/routes/main.js';
import Videos from './components/videos/routes/videos.js';
import Tour from './components/tour/routes/tour.js';
import Contact from "./components/contact/routes/contact.js"
import Albums from "./components/albums/routes/albums.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Albums />
      <Videos />
      <Tour /> 
      <Contact/>
    </div>
  );
}

export default App;
