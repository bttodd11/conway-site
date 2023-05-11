import './App.css';
import Nav from "../src/components/nav/nav.js";
import Main from './components/main/main.js';
import Videos from './components/videos/videos.js';
import Tour from './components/tour/tour.js';
import Contact from "./components/contact/contact.js"

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Videos />
      <Tour /> 
      <Contact/>
    </div>
  );
}

export default App;
