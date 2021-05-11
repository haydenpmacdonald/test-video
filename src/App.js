import './App.css';
// import CodingVideo from 'video/keyboard.mp4'
import footage from './footage'
import video from "./keyboard.mov";
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <video controls autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      {/* {footage.map(foot => (
        <video controls autoPlay loop muted src={foot.video_name} preload="preload" className='video-test' allowfullscreen loop='3' title='test' allow="autoplay" muted autoPlay={true} frameborder="0" alt='test' >
          <source src={foot.video_name} type="video/mp4"></source>
        </video>
      ))} */}
    </div>
  );
}

export default App;
