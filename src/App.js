import './App.css';
import Home from './components/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div className="App" >
        <Home />
      </div>
    </ParallaxProvider>
  );
}

export default App;


