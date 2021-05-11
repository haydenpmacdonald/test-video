import './App.css';
// import CodingVideo from 'video/keyboard.mp4'
import footage from './footage'

function App() {
  return (
    <div className="App">
  

  {footage.map(foot => (
        <video src={foot.video_name} className='video-test' allowfullscreen loop='3' title='test' allow="autoplay" muted autoPlay={true} frameborder="0" alt='test' ></video>
      ))}
       
        {/* <video className='video-test' allowfullscreen loop='3' title='test' src='video/keyboard.mp4' allow="autoplay" muted autoPlay={true} frameborder="0" alt='test'>
        
    
     </video> */}
    </div>
  );
}

export default App;
