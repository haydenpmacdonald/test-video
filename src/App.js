import './App.css';
// import CodingVideo from 'video/keyboard.mp4'

function App() {
  return (
    <div className="App">
      
        {/* <div className='overlay'>
          <h1>title</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div> */}
        <iframe allowfullscreen loop='3' title='test' height='500px' width='100%' src='video/keyboard.mp4' allow="autoplay" frameborder="0" alt='test'>
        
    
      </iframe>
    </div>
  );
}

export default App;
