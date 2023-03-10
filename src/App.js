import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './components/Home';
import Collage from './components/Collage';
import Photograph from './components/Photograph';
import Topbar from './components/Topbar';
import Words from './components/Words';
import Drawings from './components/Drawings';

function App() {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div className="App" 
      >
        <Topbar />
        <Home />
        <Collage />
        <Photograph />
        <Drawings />
      </div>
    </ParallaxProvider>
  );
}

export default App;


