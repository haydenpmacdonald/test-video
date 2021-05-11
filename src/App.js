import logo from './logo.svg';
import './App.css';
import CodingVideo from './components/video/keyboard.mp4';

function App() {
  return (
    <div className="App">
      
        <div className='overlay'>
          <h1>title</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <video className='video-test'
        autoPlay loop muted
        style={{
          position: 'absolute',
          width: '100%',
          heght: '100%',
          left: '50%',
          top: '40%',
          objectFit: 'cover',
          transform: 'translate(-50%, -80%)',
        }}
      >
        
        <source src={CodingVideo} />
      </video>
    </div>
  );
}

export default App;
