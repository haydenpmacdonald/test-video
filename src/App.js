import './App.css';

import video from "./keyboard.mov";


function App() {
  return (
    <div className="App">
      <video controls autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
